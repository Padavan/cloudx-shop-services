# Cloudx Course Shop

It is infrastructure for shop app consisted from: 

  - authorization-service
  - cart-service
  - db
  - frontend
  - import-service
  - product-service

## Product Service

**frontend** contain react application with frontend for the shop.

**authorization-service** contains basic authorization lambda to protect import request in import-service

**product-service** contains lambdas that deals with creating/store/list products data, also SNS service to announce creation.

**import-servce** contains endpoint to upload csv in S3 folder and also s3-event based lambda function to parse this file

**db** some sql queries to bootstrap RDS database 

**cart-service** `¯\_(ツ)_/¯`


