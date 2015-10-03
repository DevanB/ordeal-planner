Template.login.onRendered(function(){
  $('#application-login').validate({
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    messages: {
      emailAddress: {
        required: "Please enter your email address to login.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter your password to login."
      }
    },
    submitHandler: function(){
      // Grab the user's details.
      user = {
        email: $('[name="emailAddress"]').val(),
        password: $('[name="password"]').val()
      }

      // Log the user in.
      Meteor.loginWithPassword(user.email, user.password, function(error){
        if(error){
          Bert.alert(error.reason, 'danger');
        } else {
          Bert.alert('Logged in!', 'success');
        }
      });
    }
  });
});

Template.login.events({
  'submit form': function(e){
    // Prevent form from submitting.
    e.preventDefault();
  }
});
