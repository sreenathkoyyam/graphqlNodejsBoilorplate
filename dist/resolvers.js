'use strict';

var GetDbNameResolver = require('./resolvers/query/stackDetails/GetDbNameResolver');
var messageResolver = require('./resolvers/query/message/GetMessagesResolver');
var messageMutationResolver = require('./resolvers/mutation/insertMessageMutationResolver');
var getMessageSubscriptionResolver = require('./resolvers/mutation/getMessageSubscriptionResolver');

var createMattermostIntegration = require('./resolvers/mutation/CreateMattermostIntegrationResolver');

var resolveFunctions = {
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