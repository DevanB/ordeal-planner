Template.ordealsView.onCreated(function(){
  this.ordealId = new ReactiveVar(Router.current().params._id);
  this.subscribe('ordeal', Router.current().params._id);
});

Template.ordealsView.helpers({
  ordeal: function(){
    return Ordeals.findOne();
  },
  sortedLateArrivals: function(lateArrivals) {
    return _.sortBy(lateArrivals, function(lateArrival) { return Date.parse(lateArrival.eta) });
  }
});
