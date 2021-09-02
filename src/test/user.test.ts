import mongoose from 'mongoose'
import apolloServer from "@src/apollo_server"
import App from "@src/app";

jest.setTimeout(30000);

describe("Testing Basics", () => {
  beforeAll(async () => {
    await App.initMongoose();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("Get Users", async () => {
    const result = await apolloServer.executeOperation({
      query: 'query{ users { _id, name, description, createdAt, updatedAt } }'
    });

    expect(result.errors).toBe(undefined);
  })

  it("Get Users Failed", async () => {
    const result = await apolloServer.executeOperation({
      query: 'query{ users { wrongField } }'
    });

    expect(result.data).toBe(undefined);
  })
})