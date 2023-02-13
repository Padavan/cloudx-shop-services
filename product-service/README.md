# Product Service

Zero dependencies aws lambda-powered microservice.

## 1. What was done?
**(required)**

    - [x] Product Service Serverless config contains configuration for 2 lambda functions, API is not working at all, but YAML configuration is correct
    - [x] The getProductsList OR getProductsById lambda function returns a correct response 
    - [x] The getProductsById AND getProductsList lambda functions return a correct response code 
    - [x] Your own Frontend application is integrated with Product Service (/products API) and products from Product Service are represented on Frontend. 

**optional**

    - [x] Async/await is used in lambda functions
    - [x] ES6 modules are used for Product Service implementation
    - [] Custom Webpack/ESBuild/etc is manually configured for Product Service. Not applicable for preconfigured/built-in bundlers that come with templates, plugins, etc.
    - [] SWAGGER documentation is created for Product Service
    - [] Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered)
    - [x] Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase.
    - [] Main error scenarios are handled by API ("Product not found" error).


## 2. Links

endpoints:

  GET - https://elkk4ktad6.execute-api.eu-central-1.amazonaws.com/dev/products/{productId}

  GET - https://elkk4ktad6.execute-api.eu-central-1.amazonaws.com/dev/products

  GET - https://bmjrcdjaue.execute-api.eu-central-1.amazonaws.com/ping

## 3. Link to Shop: https://d15m6ky32255rk.cloudfront.net

## 4. Product interface:
```

  interface Product {
    id: string;
    title: string;
    description: string;
    availability: number;
    image: string;
    price: number;
  }    
```