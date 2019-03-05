# graphqlNodejsBoilorplate

## How do I get set up? ###
* Install Git and Clone this repository (git clone <clone utl>)
* Install python dependencies (npm install)
* Run the API with (npm start)
### Basic command ###

Run below command for Test GraphQl.
to
http://localhost:5060/graphiql

### For Query ###
================================
* query{GetTeckStacks{layer_name}}
### For Mutation ###
================================
* mutation AddMessage($message: String!, $broadcast: Boolean!) {
 addMessage(message: $message, broadcast: $broadcast)
} 
----
{
  "message": "test",
  "broadcast": true
}
### For subscription(In development) ###
================================
subscription{
  newMessage(input:{ userId:123})
  {
    message
  }
}



