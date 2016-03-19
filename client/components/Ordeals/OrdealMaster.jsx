OrdealMaster = React.createClass({
  propTypes: {
    readOnly: React.PropTypes.string,
    ordealMaster: React.PropTypes.object.isRequired
  },
  render() {
    const { readOnly, ordealMaster } = this.props;
    if (readOnly) {
      return (
        <p>
          <strong>Name</strong>: { this.props.ordealMaster.name }<br/>
          <strong>Rating</strong>: { this.props.ordealMaster.rating }
        </p>
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col-xs-11">
            <label htmlFor="ordealMasterName">Name</label>
            <input type="text" defaultValue={ ordealMaster.name } className="form-control" name="ordealMasterName" placeholder="Name"/>
          </div>
          <div className="col-xs-1">
            <label htmlFor="removeBtn">&nbsp;</label><br/>
            <a href="#" className="btn btn-default"><i className="fa fa-times"></i></a>
          </div>
        </div>
      </div>
    );
  }
});
