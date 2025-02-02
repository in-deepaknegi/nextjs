import { MongoDataSource } from "apollo-datasource-mongodb";
import UserModel from "@/lib/models/user.model";
import { ObjectId } from "mongodb";

interface UserDocument {
    _id: ObjectId;
    username: string;
    password: string;
    email: string;
    interests: [string];
}


export default class Users extends MongoDataSource<UserDocument> {
    // Function to fetch all users
    async getAllUsers() {
        try {
            return await UserModel.find();
        } catch (error) {
            throw new Error("Failed to fetch users");
        }
    }
}