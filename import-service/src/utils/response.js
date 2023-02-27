const defaultHeaders = {
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
};

const errorResponse = ( error, statusCode = 500 ) => {

    return {
        statusCode,
        headers: {
            ...defaultHeaders
        },
        body: JSON.stringify( { message: error.message || 'Something went wrong !!!' })
    }
}

const successResponse = ( body, statusCode = 200 ) => {

    return {
        statusCode,
        headers: {
            ...defaultHeaders
        },
        body: JSON.stringify( body )
    }
}

export { errorResponse, successResponse };
