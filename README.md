# Backend

## DB Folder
SQL to initiate rds postgres database with sample data.

## Product Service

Lambda Functions

## Task 4

4.1 RDS postgres instance was created. DBeaver client was used to create tables and insert sample data.
4.2 Serverless contain info about DB. Lambda functions were modified to gather/insert data from two tables. 
4.3 createProduct endpoint created.
4.4 PR

endpoints:
  GET - https://elkk4ktad6.execute-api.eu-central-1.amazonaws.com/dev/products/ping
  GET - https://elkk4ktad6.execute-api.eu-central-1.amazonaws.com/dev/products/{productId}
  GET - https://elkk4ktad6.execute-api.eu-central-1.amazonaws.com/dev/products
  POST - https://elkk4ktad6.execute-api.eu-central-1.amazonaws.com/dev/products
functions:
  ping: product-service-dev-ping (260 kB)
  getProductById: product-service-dev-getProductById (260 kB)
  getAllProducts: product-service-dev-getAllProducts (260 kB)
  createProduct: product-service-dev-createProduct (260 kB)

- [] validation on createProduct
- [x] basic error handling
- [] console log
- [x] RDS
- [] Transaction based creation of product

## Additional things
https://serverfault.com/questions/656079/unable-to-connect-to-public-postgresql-rds-instance/656119#656119

## Task 5