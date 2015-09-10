Template.ordealsCreate.events({
  'submit form': function(e) {
    e.preventDefault();

    var ordeal = {
      name: e.target.name.value,
      location: e.target.location.value,
      date: e.target.date.value,
      time: e.target.time.value,
      vcInductions: e.target.vcInductions.value,
      vcInductionsAdviser: e.target.vcInductionsAdviser.value
    };

    Meteor.call('createOrdeal', ordeal, function(error, response){
      if (error) {
        Bert.alert(error.reason, "danger");
      } else {
        Router.go("/");
      };
    });
  }
});
