const resolvers = {
    Query: {
        users: async (
            _: any,
            __: any,
            context: { dataSources: { users: { getAllUsers: () => any } } }
        ) => {
            try {
                return await context.dataSources.users.getAllUsers();
            } catch (error) {
                throw new Error("Failed to fetch users");
            }
        },
    }
}



export default resolvers;
