LateArrival = React.createClass({
  propTypes: {
    lateArrival: React.PropTypes.object.isRequired,
    readOnly: React.PropTypes.bool
  },
  render() {
    const { readOnly, lateArrival } = this.props;
    if (readOnly) {
      return (
        <p>
          <strong>Name</strong>: { lateArrival.name }<br/>
          <strong>ETA</strong>: { lateArrival.eta }
        </p>
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col-xs-6">
            <label htmlFor="lateArrivalName">Name</label>
            <input type="text" defaultValue={ lateArrival.name } className="form-control" name="lateArrivalName" placeholder="Name"/>
          </div>
          <div className="col-xs-5">
            <label htmlFor="lateArrivalETA">ETA</label>
            <div className="input-group datetimepicker">
              <input className="set-due-date form-control" type="text" defaultValue={ lateArrival.eta } name="lateArrivalETA" placeholder="ETA"/>
              <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
            </div>
          </div>
          <div className="col-xs-1">
            <label htmlFor="removeBtn">&nbsp;</label><br/>
            <a href="#" className="removeBtn btn btn-default"><i className="fa fa-times"></i></a>
          </div>
        </div><br/>
      </div>
    );
  }
});
