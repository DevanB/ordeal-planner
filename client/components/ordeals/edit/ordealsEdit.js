Template.ordealsEdit.onCreated(function(){
  this.ordealsEditDictionary = new ReactiveDict();
  this.ordealsEditDictionary.set('ordealEdit', '');
});

Template.ordealsEdit.helpers({
  ordeal: function(){
    return Ordeals.findOne();
  },
  preOrdealEditForm: function(ordealDate) {
    today = moment(new Date()).format("MM/DD/YYYY h:mm A");
    ordealBegins = moment(ordealDate, "MM/DD/YYYY h:mm A").format("MM/DD/YYYY h:mm A");
    if(today < ordealBegins) {
      Template.instance().ordealsEditDictionary.set('ordealEdit', 'preOrdeal');
      return true;
    } else {
      Template.instance().ordealsEditDictionary.set('ordealEdit', 'postOrdeal');
    }
  }
});
