OrdealsList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    const subscription = Meteor.subscribe('allOrdealsForList');
    return {
      isLoading: !subscription.ready(),
      ordeals: Ordeals.find().fetch()
    };
  },
  addOrdealBtn() {
    if (Meteor.user()) {
      return <a href={FlowHelpers.pathFor('ordeals-create')} className="pull-right btn btn-sm btn-success"><i className="fa fa-plus"></i>&nbsp;Add Ordeal</a>;
    }
  },
  render() {
    if (this.data.isLoading) {
      return <Loading />;
    }
    return (
      <div>
        <div className="row">
          <h1>Ordeals</h1>
          {this.addOrdealBtn()}<br/>
        </div>
        <div className="row">
          <OrdealsTable ordeals={this.data.ordeals}/>
        </div>
      </div>
    );
  }
});
