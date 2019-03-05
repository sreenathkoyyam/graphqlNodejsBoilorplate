"use strict";

var GetMessageSchema = "\n\ninput messageInsertRequest {\n\tmessage: String!,\n\tbroadcast: Boolean!\n}\n# Return message details\ntype GetMessageSchema {\n    message: String\n}\n# Return message details\ninput MessageUpdateRequest {\n    userId: Int!\n}\n";

module.exports = GetMessageSchema;