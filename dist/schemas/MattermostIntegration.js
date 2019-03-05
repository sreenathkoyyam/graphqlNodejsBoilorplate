"use strict";

var mattermostDetailsSchema = "\ninput mattermostDetailsRequest {\n\tchannel: String !\n}\n\ntype mattermostDetailsResponse{\n\tmattermostEndpoint : String!,\n\tmattermostChannel: String!\n}\n";

module.exports = mattermostDetailsSchema;