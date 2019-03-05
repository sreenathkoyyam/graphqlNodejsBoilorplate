'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = exports.subscriptionManager = undefined;

var _graphqlSubscriptions = require('graphql-subscriptions');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
var GetTeckStacks = require('./schemas/GetDbNameSchema');
var MessageSchema = require('./schemas/messageSchema');
var createMattermostIntegration = require('./schemas/MattermostIntegration');

// import { makeExecutableSchema } from "graphql-tools";

var pubsub = new _graphqlSubscriptions.PubSub();

var RootQuery = '\n#  GIT APIs\ntype RootQuery {\n\n\n  # Return Latest Stack Updates\n  GetTeckStacks:[GetDbNameSchema],\n  messages:[GetMessageSchema]\n}\n';

var Mutation = '\n  type Mutation {\n    addMessage(input: messageInsertRequest!): [GetMessageSchema]\n    createMattermostIntegration(input: mattermostDetailsRequest!): mattermostDetailsResponse\n\n }\n';
var Subscription = '\n  type Subscription {\n    newMessage(input: MessageUpdateRequest!): GetMessageSchema\n\n }\n';

var SchemaDefinition = '\n  schema {\n    query: RootQuery ,\n    mutation: Mutation,\n    subscription:Subscription\n  }\n';

// The DB
var messages = [];

var destinationFilter = function destinationFilter(options, _ref, subscriptionName) {
  var filter = _ref.filter;
  return _defineProperty({}, 'newMessage', {
    filter: function filter(payload, context) {
      if (payload.broadcast === true || payload.authToken === context.authToken) {
        return payload.entry;
      }
      return null;
    }
  });
};

var setupFunctions = {
  // The name of the subscription in our schema
  newMessage: destinationFilter
};

var schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Mutation, Subscription, GetTeckStacks, MessageSchema, createMattermostIntegration]
});
var subscriptionManager = new _graphqlSubscriptions.SubscriptionManager({ schema: schema, pubsub: pubsub, setupFunctions: setupFunctions });

exports.subscriptionManager = subscriptionManager;
exports.schema = schema;