OrdealEdit = React.createClass({
  propTypes: {
    ordealId: React.PropTypes.string.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    const subscription = Meteor.subscribe('ordeal', this.props.ordealId);
    return {
      isLoading: !subscription.ready(),
      ordeal: Ordeals.findOne({ _id: this.props.ordealId })
    };
  },
  ordealEditForm() {
    const ordealDate = this.data.ordeal.date;
    const today = moment(new Date()).format('MM/DD/YYYY h:mm A');
    const ordealBegins = moment(ordealDate, 'MM/DD/YYYY h:mm A').format('MM/DD/YYYY h:mm A');
    if (today > ordealBegins) {
      return <PreOrdealEditForm ordealId={ this.props.ordealId } ordeal={ this.data.ordeal }/>;
    }

    return <PostOrdealEditForm ordealId={ this.props.ordealId } ordeal={ this.data.ordeal }/>;
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
