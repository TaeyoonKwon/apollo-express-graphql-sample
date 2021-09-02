import { logger } from "@/src/utils/logger";
import { UserModel } from "@models/index";
import { Document } from 'mongoose';

export const Query = {
    users: async (): Promise<Document[]> => {
        const docs = await UserModel.find();
        return docs;
    },
    userById: async (_: undefined, { _id }: { _id: string }): Promise<Document | null> => {
        const doc = await UserModel.findById(_id);
        return doc;
    }
};

export const Mutation = {
    createUser: async (_: undefined, { name, description }: { name: string, description: string }): Promise<Document> => {
        logger.info("hello", name, description)
        const doc = await UserModel.create({
            name,
            description
        })

        return doc;
    }
}