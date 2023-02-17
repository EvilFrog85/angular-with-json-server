# AngularAndJsonServer
This is a simple example of using json-server for dev/mock data in Angular.

## Getting started
1. Run `npm install`
2. Run `npm run all` to start Angular on http://localhost:4200 and json-server on http://localhost:4300. You can also choose to run them separatly using `npm run start / ng serve` and `npm run backend`
3. Modify the file `db.json` to add any data. Demo data added for http://localhost:4300/users

## Trying it out
The Angular app works as any other Angular app.
The json-server works the same way as any REST API, allowing you to get, delete, put and post data. It will be written to the db.json-file found at the project root. It is not intended for use in production enviroments.