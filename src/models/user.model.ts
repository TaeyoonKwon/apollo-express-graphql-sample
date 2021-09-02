import { Schema, model } from "mongoose";

const User = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "no description"
        }
    },
    { timestamps: true }
);

export default model("User", User);
