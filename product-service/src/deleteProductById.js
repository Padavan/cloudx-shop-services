import { errorResponse, successResponse } from "./utils/response.js";

export const deleteProductById = (dbService) => async (event) => {
  try {

    const { productId = '' } = event.pathParameters;

    await dbService.deleteProductById(productId);

    return successResponse({});
  } catch ( err ) {
    return errorResponse( err );
  }
}
