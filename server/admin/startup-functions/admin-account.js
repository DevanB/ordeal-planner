addAdminAccount = function(){
  if (Meteor.users.find().count() === 1) {
    var user = Meteor.users.findOne();
    console.log(user);
    Roles.addUsersToRoles(user, ["admin"]);
  }
}
