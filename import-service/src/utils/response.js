const defaultHeaders = {
    "Access-Control-Allow-Headers": "Authorization, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Credentials, Access-Control-Request-Method, Access-Control-Allow-Origin,Access-Control-Request-Headers",
    "Access-Control-Request-Method": "GET, OPTION",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": '*',
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
