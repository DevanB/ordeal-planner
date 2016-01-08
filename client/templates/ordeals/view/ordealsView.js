Template.ordealsView.onCreated(function() {
  this.ordealId = new ReactiveVar(FlowRouter.getParam('_id'));
  this.subscribe('ordeal', FlowRouter.getParam('_id'));
});

Template.ordealsView.helpers({
  ordeal() {
    return Ordeals.findOne();
  },
  sortedLateArrivals: function(lateArrivals) {
    return _.sortBy(lateArrivals, function(lateArrival) { return Date.parse(lateArrival.eta); });
  }
});
