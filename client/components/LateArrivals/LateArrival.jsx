LateArrival = React.createClass({
  propTypes: {
    lateArrival: React.PropTypes.object.isRequired,
    readOnly: React.PropTypes.bool,
    removeLateArrival: React.PropTypes.func,
  },
  handleRemoval() {
    this.props.removeLateArrival(this.props.lateArrival);
  },
  render() {
    if (this.props.readOnly) {
      return (
        <p>
          <strong>Name</strong>: { this.props.lateArrival.name }<br/>
          <strong>ETA</strong>: { this.props.lateArrival.eta }
        </p>
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-5">
            <label htmlFor="lateArrivalName">Name</label>
            <input
              type="text"
              defaultValue={ this.props.lateArrival.name }
              ref="lateArrivalName"
              className="form-control"
              name="lateArrivalName"
              placeholder="Name"
              required
            />
          </div>
          <div className="col-xs-10 col-sm-5">
            <label htmlFor="lateArrivalETA">ETA</label>
            <div className="input-group datetimepicker">
              <input
                type="text"
                defaultValue={ moment(this.props.lateArrival.eta).format('MM/DD/YYYY h:mm A') }
                ref="lateArrivalETA"
                className="form-control"
                name="lateArrivalETA"
                placeholder="ETA"
                required
              />
              <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
            </div>
          </div>
          <div className="col-xs-offset-1 col-xs-1 col-sm-1">
            <div className="pull-right">
              <label>&nbsp;</label><br/>
              <a className="btn btn-default" onClick={ this.handleRemoval }><i className="fa fa-times"></i></a>
            </div>
          </div>
        </div><br/>
      <hr/></div>
    );
  }
});
