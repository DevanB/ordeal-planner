Meteor.publish('allOrdealsForList', function() {
  return Ordeals.find({}, {fields: {name: 1, location: 1, date: 1, _id: 1}});
});

Meteor.publish('ordeal', function(id) {
  check(id, String);
  return Ordeals.find({_id: id});
});
