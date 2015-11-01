Template.header.events({
  'click .logout'() {
    Meteor.logout(function(error) {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Succesfully logged out!', 'success');
      }
    });
  }
});
