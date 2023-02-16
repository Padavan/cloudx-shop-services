import { errorResponse, successResponse } from "./utils/response.js";

export const createProduct = (dbClient) => async (event) => {
  try {
    const product = await dbClient.createProduct(JSON.parse(event.body));

    if(product) {
      return successResponse(product);
    }

    return successResponse( { message: "Product not created" }, 500 );
  } catch ( err ) {
    return errorResponse( err );
  }
};
