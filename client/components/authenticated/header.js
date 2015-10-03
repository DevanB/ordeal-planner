Template.header.events({
  'click .logout': function(){
    Meteor.logout(function(error){
      if(error){
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Succesfully logged out!', 'success');
      }
    });
  }
});
