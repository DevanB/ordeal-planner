Template.ordealsList.onRendered(function(){
  this.subscribe("allOrdeals");
});

Template.ordealsList.helpers({
  ordeals: function(){
    return Ordeals.find();
  },
  editOrdealAbility: function(){
    if (Meteor.user() && (this.createdBy === Meteor.userId() ||
      Roles.userIsInRole(Meteor.user(), ['admin']))) {
      return true;
    } else {
      return false;
    }
  },
  dateFormatter: function(formatDate) {
    if(formatDate) {
      return moment(formatDate).format('MM/DD/YYYY');
    }
  }
});

Template.ordealsList.events({
  'click .deleteOrdealBtn': function(e){
      e.preventDefault();
      Meteor.call('deleteOrdeal', this._id, function(error, response){
        if(error) {
          Bert.alert(error.reason, "danger");
        } else {
          Router.go("/");
        }
      });
  }
});
