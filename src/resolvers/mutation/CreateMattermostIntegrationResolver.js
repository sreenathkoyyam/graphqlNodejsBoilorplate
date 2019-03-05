import { PubSub, SubscriptionManager } from "graphql-subscriptions";
const pubsub = new PubSub();

module.exports = async function (obj, { input }, { request }) {

	const messages = [];
	let entry = {mattermostEndpoint: "https://mattermost.com", mattermostChannel: input.channel};

	console.log(entry)
    messages.push(entry);
    pubsub.publish('newMessage', {entry: entry, authToken: 'someToken'});
    return entry;
};
