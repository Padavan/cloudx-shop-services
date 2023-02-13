import test from 'node:test';
import assert from 'assert';
import { getAllProducts } from './getAllProducts.js';

test("getAllProducts", async (t) => {
  const mockEvent = {};

  const response = await getAllProducts(mockEvent);

  assert.strictEqual(JSON.parse(response.body).length, 11, "Length should be equal mock number")
})