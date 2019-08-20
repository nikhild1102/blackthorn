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

#### Start Application:
For Production
```
npm start
```
For Development/Staging
```
npm run start:dev
```
For load testing
```
artillery run load-test.yaml
```
#### API Docs:
```
{{BASEURL}}/docs