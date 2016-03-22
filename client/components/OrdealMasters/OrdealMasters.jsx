OrdealMasters = React.createClass({
  propTypes: {
    ordealMasters: React.PropTypes.array
  },
  getInitialState() {
    return {
      ordealMasters: this.props.ordealMasters || []
    };
  },
  addOrdealMaster() {
    this.setState({ ordealMasters: React.addons.update(this.state.ordealMasters, { $push: [{ name: '', rating: '', key: Math.random() }] }) });
  },
  removeOrdealMaster(ordealMaster) {
    this.setState({ ordealMasters: _.without(this.state.ordealMasters, _.findWhere(this.state.ordealMasters, ordealMaster)) });
  },
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="pull-left">Ordeal Masters</h4>
            <a onClick={ this.addOrdealMaster } className="btn btn-sm btn-default pull-right"><i className="fa fa-plus"></i>&nbsp;Add Ordeal Master</a>
          </div>
        </div>
        <div id="ordealMasters">
          {
            this.state.ordealMasters && this.state.ordealMasters.map((ordealMaster, index) => {
              return (<OrdealMaster key={ ordealMaster.key } ordealMaster={ ordealMaster } ref={ `ordealMaster${ index }` } removeOrdealMaster={ this.removeOrdealMaster } time={ this.props.time }/>);
            })
          }
        </div>
      </div>
    );
  }
});
