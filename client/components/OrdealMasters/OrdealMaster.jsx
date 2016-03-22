OrdealMaster = React.createClass({
  propTypes: {
    ordealMaster: React.PropTypes.object.isRequired,
    readOnly: React.PropTypes.bool,
    index: React.PropTypes.number,
    removeOrdealMaster: React.PropTypes.func,
    time: React.PropTypes.string
  },
  handleRemoval() {
    this.props.removeOrdealMaster(this.props.ordealMaster);
  },
  render() {
    if (this.props.time === 'pre') {
      return (
        <div>
          <div className="row">
            <div className="col-xs-12 col-sm-10">
              <label htmlFor="ordealMasterName">Name</label>
              <input type="text" ref="ordealMasterName" defaultValue={ this.props.ordealMaster.name } className="form-control" id="ordealMasterName" placeholder="Name" required/>
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
    } else if (this.props.time === 'post') {
      return (
        <div>
          <div className="row">
            <div className="col-xs-12 col-sm-5">
              <label htmlFor="ordealMasterName">Name</label>
              <input type="text" ref="ordealMasterName" defaultValue={ this.props.ordealMaster.name } className="form-control" id="ordealMasterName" placeholder="Name" required/>
            </div>
            <div className="col-xs-6 col-sm-5">
              <label htmlFor="ordealMasterRating">Rating</label>
              <input type="number" ref="ordealMasterRating" defaultValue={ this.props.ordealMaster.rating } className="form-control" id="ordealMasterRating" placeholder="Rating" required/>
            </div>
            <div className="col-xs-offset-1 col-xs-5 col-sm-1">
              <div className="pull-right">
                <label>&nbsp;</label><br/>
                <a className="btn btn-default" onClick={ this.handleRemoval }><i className="fa fa-times"></i></a>
              </div>
            </div>
          </div><br/>
        <hr/></div>
      );
    }
    return (
      <p>
        <strong>Name</strong>: { this.props.ordealMaster.name }<br/>
        <strong>Rating</strong>: { this.props.ordealMaster.rating }
      </p>
    );
  }
});
