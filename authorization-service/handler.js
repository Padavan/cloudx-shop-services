import { basicAuthorizer } from './src/basicAuthorizer.js';
import { credentialManager } from './src/credentialManager.js';

const basicAuthorizerHandler = basicAuthorizer(credentialManager);

export { basicAuthorizerHandler };
