"use strict";

var UpdateUserDetailsInADFS = "\ninput Users {\n\t\tuserTpx: String!,\n\t\tadd: Boolean!\n}\ninput UsersInGroupInput {\n\t\tusers: [Users]!\n}\ntype ADFSUserUpdate {\n\t\tisSuccess: Boolean !\n}\n";

module.exports = UpdateUserDetailsInADFS;