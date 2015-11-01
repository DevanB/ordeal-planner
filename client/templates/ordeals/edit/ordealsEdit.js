Template.ordealsEdit.onCreated(function(){
  this.ordealId = new ReactiveVar(FlowRouter.getParam("_id"));
  this.subscribe('ordeal', FlowRouter.getParam("_id"));
});

Template.ordealsEdit.helpers({
  ordeal: function(){
    return Ordeals.findOne();
  },
  preOrdealEditForm: function(ordealDate) {
    today = moment(new Date()).format("MM/DD/YYYY h:mm A");
    ordealBegins = moment(ordealDate, "MM/DD/YYYY h:mm A").format("MM/DD/YYYY h:mm A");
    if(today < ordealBegins) {
      return true;
    } else {
      return false;
    }
  }
});
