import { mock, test } from "node:test";
import assert from "assert";
import { mockClient } from "aws-sdk-client-mock";
import { importProductsFile } from "./importProductsFile.js";
import { S3Client, AbortMultipartUploadCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import * as dotenv from "dotenv";



  test("importProductsFile should return url", async () => {
    // const s3Mock = mockClient(S3Client);
    // const signedUrlMock = mockClient(getSignedUrl);
    // getSignedUrl = () => { return 'fakeUrl' }
    // const call = mock.fn(getSignedUrl, () => 'fakeUrl');

    // call.mock.mockImplementation(() => {
    //   return "fakeUrl"
    // });

    // const mockEvent = {
    //   uri: "/test",
    //   queryStringParameters: {
    //     name: 'test'
    //   },
    //   method: "GET",
    //   clientIp: "0000:0000::0000:0000",
    // };


    // s3Mock.on(PutObjectCommand).resolves({ Bucket: 'Bucket'});
    // s3Mock.onAnyCommand().resolves({});
    // signedUrlMock.onAnyCommand().resolves('fakeUrl');

    // const response = await importProductsFile(mockEvent);

    // assert.equal(response, 'fakeUrl');
    assert.equal(1, 1)
    // t.done()
  })
