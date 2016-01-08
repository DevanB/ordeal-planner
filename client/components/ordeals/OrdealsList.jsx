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
          {this.addOrdealBtn()}
        </div>
        <div className="row">
        <Table
          noDataString="No ordeals in planner."
          data={this.data.ordeals}
          keys={['name', 'location', 'date', '_id']}
          header={['Name', 'Location', 'Date', 'View']}
          transforms={[
            {key: 'name', transform: function(value) {return (value);}},
            {key: 'location', transform: function(value) {return (value);}},
            {key: 'date', transform: function(value) {return (value);}},
            {key: '_id', transform: function() {return (<a href="/view-ordeal/">View</a>);}}
          ]}
          />

        {/*<OrdealsTable ordeals={this.data.ordeals}/>*/}
        </div>
      </div>
    );
  }
});
