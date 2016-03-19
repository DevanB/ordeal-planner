OrdealEdit = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    const subscription = Meteor.subscribe('ordeal', FlowRouter.getParam('_id'));
    return {
      isLoading: !subscription.ready(),
      ordeal: Ordeals.findOne()
    };
  },
  ordealEditForm() {
    const ordealDate = this.data.ordeal.date;
    const today = moment(new Date()).format('MM/DD/YYYY h:mm A');
    const ordealBegins = moment(ordealDate, 'MM/DD/YYYY h:mm A').format('MM/DD/YYYY h:mm A');
    if (today < ordealBegins) {
      return <PreOrdealEditForm ordeal={ this.data.ordeal }/>;
    }

    return <PostOrdealEditForm ordeal={ this.data.ordeal }/>;
  },
  render() {
    if (this.data.isLoading) {
      return <Loading />;
    }
    return (
      <div>
        { this.ordealEditForm() }
      </div>
    );
  }
});
