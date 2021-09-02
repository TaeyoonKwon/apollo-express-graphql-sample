import { Request } from 'express'

// basic authentication
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const context = ({ req }: { req: Request }) => {
    // authorization level
    let authorization = undefined;

    if (!req?.headers?.authorization) return { authorization };

    const token = req?.headers?.authorization.substr(7);

    switch (token) {
        case "user":
            authorization = "user"
            break;
        case "admin":
            authorization = "admin"
            break;
        default:
            authorization = "none"
            break;
    }

    return { authorization };
}