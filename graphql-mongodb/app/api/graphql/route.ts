import { ApolloServer } from "@apollo/server";

import typeDefs from "@/lib/graphql/schema";

import connectDB from "@/lib/mongodb";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import resolvers from "@/lib/graphql/resolvers";
import Users from "@/lib/graphql/datasources";
import UserModel from "@/lib/models/user.model";



connectDB();



const server = new ApolloServer({
    resolvers,
    typeDefs
});

const handler = startServerAndCreateNextHandler<NextRequest>(server as any,
    {
        context: async (req, res) => ({
            req,
            res,
            dataSources: {
                users: new Users({ modelOrCollection: UserModel as any }),
            },
        })
    }
)


export async function GET(request: NextRequest) {
    return handler(request);
}
export async function POST(request: NextRequest) {
    return handler(request);
}
