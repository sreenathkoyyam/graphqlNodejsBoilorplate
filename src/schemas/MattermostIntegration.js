const mattermostDetailsSchema = `
input mattermostDetailsRequest {
	channel: String !
}

type mattermostDetailsResponse{
	mattermostEndpoint : String!,
	mattermostChannel: String!
}
`;

module.exports = mattermostDetailsSchema;
