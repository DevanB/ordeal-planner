/*
* Generate Test Accounts
* Creates a collection of test accounts automatically on startup.
*/

generateTestAccounts = function(){
  // Create an array of user accounts.
  var users = [
    { name: "Devan Beitel", email: "devan@devanb.us", password: "015418"}
  ]

  // Loop through array of user accounts.
  for(i=0; i < users.length; i++){
    // Check if the user already exists in the DB.
    var userEmail = users[i].email,
        checkUser = Meteor.users.findOne({"emails.address": userEmail});

    // If an existing user is not found, create the account.
    if ( !checkUser ) {
      Accounts.createUser({
        email: userEmail,
        password: users[i].password,
        profile: {
          name: users[i].name
        }
      });
    }
  }
}
