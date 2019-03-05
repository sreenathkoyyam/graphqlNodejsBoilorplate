const graphqlExpress = require('graphql-server-express').graphqlExpress;
// const addResolveFunctionsToSchema = require('graphql-tools').addResolveFunctionsToSchema;
const express = require('express');
const bodyParser = require('body-parser');
const resolveFunctions = require('./resolvers');
const schema = require('./schema');
// const NoIntrospection = require('graphql-disable-introspection');
const addResolveFunctionsToSchema = require('graphql-tools').addResolveFunctionsToSchema;
import {graphiqlExpress } from "graphql-server-express";
// addResolveFunctionsToSchema(schema, resolveFunctions);

//graphQLServer.use(helmet());


const app = express();

//app.use('*', cors());
app.use('/graphql', bodyParser.json(), graphqlExpress(request =>
  ({schema}))
);

addResolveFunctionsToSchema(schema, resolveFunctions);
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  //subscriptionsEndpoint: 'ws://localhost:5000/',
  query: 'query { messages }'
}));

app.listen(5060, () => {
  console.log(`Server listening on port 5060`);
});
