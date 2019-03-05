const UpdateUserDetailsInADFS = `
input Users {
		userTpx: String!,
		add: Boolean!
}
input UsersInGroupInput {
		users: [Users]!
}
type ADFSUserUpdate {
		isSuccess: Boolean !
}
`;

module.exports = UpdateUserDetailsInADFS;
