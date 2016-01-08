Template.ordealsList.onRendered(function() {
  this.subscribe('allOrdeals');
});

Template.ordealsList.helpers({
  ordeals() {
    return Ordeals.find();
  },
  editOrdealAbility() {
    if ( Meteor.user() && (this.createdBy === Meteor.userId()) ) {
      return true;
    }
    return false;
  },
  notLoggedIn() {
    if (Meteor.user()) { return false; }
    return true;
  }
});

Template.ordealsList.events({
  'click .deleteOrdealBtn'(event) {
    event.preventDefault();
    Meteor.call('deleteOrdeal', this._id, function(error) {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        FlowRouter.go('/');
      }
    });
  }
});
