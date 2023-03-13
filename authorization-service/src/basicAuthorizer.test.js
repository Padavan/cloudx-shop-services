import { describe, it, mock } from "node:test";
import assert from "assert";
import { basicAuthorizer } from "./basicAuthorizer.js";

describe("basicAuthorizer", () => {
  it("should authorize request with proper token", async () => {
    // hurr:durr
    const mockEvent = {
      authorizationToken: "Basic aHVycjpkdXJy"
    };

    const mockCredentials = { token: 'aHVycjpkdXJy' };

    const response = await basicAuthorizer(mockCredentials)(mockEvent);

    assert.equal(response.policyDocument.Statement[0].Effect, 'Allow')
  })

   it("should return deny policy if token wrong", async () => {
    // hurr:durr
    const mockEvent = {
      authorizationToken: "Basic aHVycjpkdXJy"
    };

    const mockCredentials = { token: 'wrongToken' };

    const response = await basicAuthorizer(mockCredentials)(mockEvent);

    assert.equal(response.policyDocument.Statement[0].Effect, "Deny")
  });

})
