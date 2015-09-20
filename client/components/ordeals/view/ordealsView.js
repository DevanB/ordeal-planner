Template.ordealsView.onRendered(function(){
  $('input').prop('disabled', true);
});
Template.ordealsView.helpers({
  ordeal: function(){
    return Ordeals.findOne();
  },
  sortedLateArrivals: function(lateArrivals) {
    return _.sortBy(lateArrivals, function(lateArrival) { return Date.parse(lateArrival.eta) });
  }
});
