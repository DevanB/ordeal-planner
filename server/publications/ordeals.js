Meteor.publish('allOrdeals', function(){
  return Ordeals.find();
});

Meteor.publish('ordeal', function(id){
  check(id, String);
  return Ordeals.find({_id: id});
});
