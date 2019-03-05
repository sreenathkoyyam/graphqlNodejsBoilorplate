const GetMessageSchema = `

input messageInsertRequest {
	message: String!,
	broadcast: Boolean!
}
# Return message details
type GetMessageSchema {
    message: String
}
# Return message details
input MessageUpdateRequest {
    userId: Int!
}
`;

module.exports = GetMessageSchema;
