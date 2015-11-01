generateTestAccounts = function() {
  const users = [
    { name: 'Devan Beitel', email: 'devan@devanb.us', password: '015418'}
  ];

  for (i = 0; i < users.length; i++) {
    const userEmail = users[i].email;
    const checkUser = Meteor.users.findOne({'emails.address': userEmail});

    if (!checkUser) {
      Accounts.createUser({
        email: userEmail,
        password: users[i].password,
        profile: {
          name: users[i].name
        }
      });
    }
  }
};
