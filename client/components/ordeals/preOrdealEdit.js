Template.ordealsEdit.helpers({
  sortedLateArrivals: function(lateArrivals) {
    return _.sortBy(lateArrivals, function(lateArrival) { return lateArrival.eta; });
  }
});
