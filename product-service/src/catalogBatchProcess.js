import { errorResponse, successResponse } from "./utils/response.js";
import { snsPublish } from "./snsPublish.js";

export const catalogBatchProcess = (dbService) => async (event) => {
  const { Records } = event;
  try {
    const list = await Promise.all(
      Records.map(async (message) => {
        const newProduct = JSON.parse(message.body);
        const createdProduct = await dbService.createProduct(newProduct);
        return { product: createdProduct, eventSource: message.eventSource };
      })
    );

    await snsPublish(list);
    return successResponse(list);
  } 
  catch (err) {
    return errorResponse( err );
  }
}
