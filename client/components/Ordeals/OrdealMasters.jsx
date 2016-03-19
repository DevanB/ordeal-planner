OrdealMasters = React.createClass({
  render() {
    const { ordealMasters } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="pull-left">Ordeal Masters</h4>
            <a className="btn btn-sm btn-default pull-right"><i className="fa fa-plus"></i>&nbsp;Add Ordeal Master</a>
          </div>
        </div>
        <div id="ordealMasters">
          {
            ordealMasters && ordealMasters.map((ordealMaster, index) => {
              return (<OrdealMaster key={ index } ordealMaster={ ordealMaster }/>);
            })
          }
        </div>
      </div>
    );
  }
});
