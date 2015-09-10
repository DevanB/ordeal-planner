Template.ordealsView.onRendered(function(){
  $('input').prop('disabled', true);
});
Template.ordealsView.helpers({
  ordeal: function(){
    return Ordeals.findOne();
  }
});
