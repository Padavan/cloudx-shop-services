import test from 'node:test';
import assert from 'assert';
import { getProductById } from './getProductById.js';

test('passing test', (t) => {
  assert.strictEqual(1, 1);
});

test("getProductById success", async (t) => {
  const mockEvent = {
    pathParameters: {
      productId: '5',
    }
  };

  const response = await getProductById(mockEvent);

  assert.deepEqual(JSON.parse(response.body), {
    id: "5",
    title: "Cinnamon Roll",
    description: "Description",
    availability: 0,
    image: "https://bread-cloud.s3.eu-central-1.amazonaws.com/cinnamon-roll.jpg",
    price: 100
  })
})