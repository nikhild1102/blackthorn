## Technologies

| NodeJS

| ExpressJS

| Postgres / MySQL (Need to update config/app.js for change)

| Artillery

| Swagger

## Version Compatibility

| Node Version

| >8.x.x

## Usage

#### Setup project:
```
npm install
```

#### Create db from migration:
```
npm run db:create
```

#### Create tables from migration:
```
npm run db:migrate
```

#### Insert default records:
```
npm run db:seed
```
Currently we added 4 products in heroku with respective product id 1,2,3 & 4

#### Start Application:
For Production
```
npm start
```
For Development/Staging
```
npm run start:dev
```
Install artillery
```
npm i artillery
```
For load testing
```
artillery run load-test.yaml
```
#### API Docs:
```
{{BASEURL}}/docs
```
#### Description:
To create a cart we need to run /cart/create API which will return cartId.
With cartId we can run following APIs :
/cart/add-item,
/cart/update,
/order/place