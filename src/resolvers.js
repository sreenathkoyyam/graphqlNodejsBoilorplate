const GetDbNameResolver = require('./resolvers/query/stackDetails/GetDbNameResolver')
const messageResolver = require('./resolvers/query/message/GetMessagesResolver')
const messageMutationResolver = require('./resolvers/mutation/insertMessageMutationResolver')
const getMessageSubscriptionResolver = require('./resolvers/mutation/getMessageSubscriptionResolver')

const createMattermostIntegration = require('./resolvers/mutation/CreateMattermostIntegrationResolver');


const resolveFunctions = {
	/* Mapping Resolvers */

	RootQuery: {
		GetTeckStacks: GetDbNameResolver,
		messages: messageResolver
	},
	Mutation: {
		addMessage: messageMutationResolver,
		createMattermostIntegration: createMattermostIntegration
	},
	Subscription: {
		newMessage: getMessageSubscriptionResolver
	}
};

module.exports = resolveFunctions;
