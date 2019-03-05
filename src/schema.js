const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const GetTeckStacks = require('./schemas/GetDbNameSchema');
const MessageSchema = require('./schemas/messageSchema');
const createMattermostIntegration = require('./schemas/MattermostIntegration');


import { PubSub, SubscriptionManager } from "graphql-subscriptions";
// import { makeExecutableSchema } from "graphql-tools";

const pubsub = new PubSub();


const RootQuery = `
#  GIT APIs
type RootQuery {


  # Return Latest Stack Updates
  GetTeckStacks:[GetDbNameSchema],
  messages:[GetMessageSchema]
}
`;

const Mutation = `
  type Mutation {
    addMessage(input: messageInsertRequest!): [GetMessageSchema]
    createMattermostIntegration(input: mattermostDetailsRequest!): mattermostDetailsResponse

 }
`;
const Subscription = `
  type Subscription {
    newMessage(input: MessageUpdateRequest!): GetMessageSchema

 }
`;


const SchemaDefinition = `
  schema {
    query: RootQuery ,
    mutation: Mutation,
    subscription:Subscription
  }
`;

// The DB
const messages = [];

const destinationFilter = (options, {filter}, subscriptionName) => ({
  // PubSub channel name (newMessage)
  ['newMessage']: {
    filter: (payload, context) => {
      if (payload.broadcast === true || payload.authToken === context.authToken) {
        return payload.entry;
      }
      return null;
    }
  },
});


const setupFunctions = {
  // The name of the subscription in our schema
  newMessage: destinationFilter,
};

const schema = makeExecutableSchema({
	typeDefs: [
	SchemaDefinition,
	RootQuery,
	Mutation,
	Subscription,
	GetTeckStacks,
	MessageSchema,
	createMattermostIntegration
	]
});
const subscriptionManager = new SubscriptionManager({schema, pubsub, setupFunctions});


export { subscriptionManager, schema }
