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
      return <a href={ FlowRouter.path('ordeals-create') } className="pull-right btn btn-sm btn-success"><i className="fa fa-plus"></i>&nbsp;Add Ordeal</a>;
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
          { this.addOrdealBtn() }<br/>
        </div>
        <div className="row">
          <div className="col-xs-3">Name</div>
          <div className="col-xs-3">Location</div>
          <div className="col-xs-3">Begins</div>
          <div className="col-xs-3">Options</div>
        </div>
        <hr/>
        <div className="row">
          {
            this.data.ordeals.map((ordeal, index) => {
              return <Ordeal key={ index } ordeal={ ordeal } />;
            })
          }
        </div>
      </div>
    );
  }
});
