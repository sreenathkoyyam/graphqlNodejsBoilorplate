import { PubSub } from "graphql-subscriptions";
const pubsub = new PubSub();
module.exports = async function (message, variables, context, subscription) {
  console.log('from subscription')
  console.log(message)
  console.log(`Serving subscription for user ${variables.userId}`);
      return message;
};