Template.ordealsCreate.onRendered(function() {
  $('.datetimepicker').datetimepicker();
  $('#createOrdealForm').validate({
    rules: {
      vcInductions: {
        required: true
      },
      vcInductionsAdviser: {
        required: true
      },
      name: {
        required: true
      },
      location: {
        required: true
      },
      date: {
        required: true
      }
    },
    messages: {
      vcInductions: {
        required: 'Who is the current VC Inductions?',
      },
      vcInductionsAdviser: {
        required: 'Who is the current VC Inductions Adviser?',
      },
      name: {
        required: 'Please enter a name. Example: May Ordeal 2016',
      },
      location: {
        required: 'Where is this Ordeal happening?',
      },
      date: {
        required: 'When is this Ordeal beginning?',
      }
    },
    submitHandler() {
      const ordeal = {
        name: $('[name="name"]').val(),
        location: $('[name="location"]').val(),
        date: $('[name="date"]').val(),
        vcInductions: $('[name="vcInductions"]').val(),
        vcInductionsAdviser: $('[name="vcInductionsAdviser"]').val(),
      };

      Meteor.call('createOrdeal', ordeal, function(error, response) {
        if (error) {
          Bert.alert(error.reason, 'danger');
        } else {
          FlowRouter.go('/ordeals/edit/' + response);
        }
      });
    }
  });
});
Template.ordealsCreate.events({
  'submit form'(event) {
    event.preventDefault();
  }
});
