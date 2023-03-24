export const basicAuthorizer = (credentials) => async (event) => {
  console.info(event);
  const { authorizationToken, methodArn } = event;
  try {
    const token = authorizationToken.split(" ")[1];

    const isAuthorized = token === credentials.token;
    const policy = getPolicy(isAuthorized ? "Allow" : "Deny", methodArn);
    console.log(policy);

    return policy;
  } catch ( err ) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};


/***
  * effect: "Allow" | "Deny"
  *
  */
const getPolicy = (effect, methodArn) => {
  return {
    "principalId": 'user', // The principal user identification associated with the token sent by the client.
    "policyDocument": {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Action": "execute-api:Invoke",
          "Effect": effect,
          "Resource": methodArn
        }
      ]
    },
    "context": {}
  };
};
