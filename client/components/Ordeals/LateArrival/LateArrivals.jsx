LateArrivals = React.createClass({
  addLateArrival() {
    // Meteor.callPromise('addNewLateArrival')
    //   .catch((error) => {
    //     return Bert.alert(error.reason, 'danger');
    //   });
    console.log(this.props.lateArrivals);
    this.props.addLateArrival();
    console.log(this.props.lateArrivals);
  },
  render() {
    const { lateArrivals } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="pull-left">Late Arrivals</h4>
            <a onClick={ this.addLateArrival } className="btn btn-sm btn-default pull-right"><i className="fa fa-plus"></i>&nbsp; Add Late Arrival</a>
          </div>
        </div>
        <div id="lateArrivals">
          {
            lateArrivals && lateArrivals.map((lateArrival, index) => {
              return (<LateArrival key={ index } lateArrival={ lateArrival }/>);
            })
          }
        </div>
      </div>
    );
  }
});
