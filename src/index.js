import { createServer } from "http";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import {subscriptionManager,schema} from "./schema";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
require("babel-polyfill");
const addResolveFunctionsToSchema = require('graphql-tools').addResolveFunctionsToSchema;
const resolveFunctions = require('./resolvers');
//const schema = require('./schema');
import { PubSub, SubscriptionManager } from "graphql-subscriptions";
// Create WebSocket server
const appWS = createServer((request, response) => {
  response.writeHead(404);
  response.end();
});

const subscriptionServer = new SubscriptionServer({
  onConnect: async (connectionParams, webSocket) => {
    console.log('WebSocket connection established');
    // the following object fields will be added to subscriptions context and filter methods
    return {
      authToken: connectionParams.authToken
    }
  },
  onUnsubscribe: (a, b) => {
    console.log('Unsubscribing');
  },
  onDisconnect: (a, b) => {
    console.log('Disconnecting');
  },
  subscriptionManager: subscriptionManager
}, {
  server: appWS,
  path: '/'
});
appWS.listen(5000, () => {
  console.log(`Websocket listening on port 5000`)
});

addResolveFunctionsToSchema(schema, resolveFunctions);


//const subscriptionManager = new SubscriptionManager({schem, pubsub});

// Init HTTP server and GraphQL Endpoints
const app = express();

app.use('*', cors());
app.use('/graphql', bodyParser.json(), graphqlExpress(request =>
  ({schema, context: {authToken: parseInt(request.headers.authtoken)}}))
);
addResolveFunctionsToSchema(schema, resolveFunctions);
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: 'ws://localhost:5000/',
  query: 'query { messages }'
}));

app.listen(5060, () => {
  console.log(`Server listening on port 5060`);
});
