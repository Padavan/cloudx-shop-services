import { errorResponse, successResponse } from "./utils/response.js";

export const getProductById = (dbService) => async (event) => {
  try {

    const { productId = '' } = event.pathParameters;

    const product = await dbService.getProductById(productId);

    if(product) {
      return successResponse(product);
    }

    return successResponse( { message: "Product not found" }, 404 );
  } catch ( err ) {
    return errorResponse( err );
  }
}
