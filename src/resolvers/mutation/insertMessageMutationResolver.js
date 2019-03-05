// const projectDetails = require('../../persistence/projectDetails');
import { PubSub } from "graphql-subscriptions";
const pubsub = new PubSub();
module.exports = async function (obj, { input ,broadcast }, { request }) {

  const messages = ( typeof messages != 'undefined' && messages instanceof Array ) ? x : []
	let entry = JSON.stringify({id: 3, message: input.message});
	console.log(entry)

    pubsub.publish('newMessage', {entry: entry, authToken: "someToken",broadcast});
const resp = {id: 1, message: input.message}
messages.push(resp);
console.log(messages)
    return messages;
};
