addAdminAccount = function(){
  if (Meteor.users.find().count() === 1) {
    var user = Meteor.users.findOne();
    Roles.addUsersToRoles(user, ["admin"]);
  }
}
