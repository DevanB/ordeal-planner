LateArrivals = React.createClass({
  propTypes: {
    lateArrivals: React.PropTypes.array
  },
  getInitialState() {
    return {
      lateArrivals: this.props.lateArrivals || []
    };
  },
  addLateArrival() {
    this.setState({ lateArrivals: React.addons.update(this.state.lateArrivals, { $push: [{ name: '', eta: new Date(), key: Math.random() }] }) });
  },
  removeLateArrival(lateArrival) {
    this.setState({ lateArrivals: _.without(this.state.lateArrivals, _.findWhere(this.state.lateArrivals, lateArrival)) });
  },
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="pull-left">Late Arrivals</h4>
            <a onClick={ this.addLateArrival } className="btn btn-sm btn-default pull-right"><i className="fa fa-plus"></i>&nbsp;Add Late Arrival</a>
          </div>
        </div>
        <div id="lateArrivals">
          {
            this.state.lateArrivals && this.state.lateArrivals.map((lateArrival, index) => {
              return (<LateArrival key={ lateArrival.key } lateArrival={ lateArrival } ref={ `lateArrival${index}` } removeLateArrival={ this.removeLateArrival }/>);
            })
          }
        </div>
      </div>
    );
  }
});
