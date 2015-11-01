addAdminAccount = function() {
  if (Meteor.users.find().count() === 1) {
    const user = Meteor.users.findOne();
    Roles.addUsersToRoles(user, ['admin']);
  }
};
