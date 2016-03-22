Clans = React.createClass({
  propTypes: {
    clans: React.PropTypes.array
  },
  getInitialState() {
    return {
      clans: this.props.clans || []
    };
  },
  addClan() {
    this.setState({ clans: React.addons.update(this.state.clans, { $push: [{ chapter: '', eta: new Date(), key: Math.random() }] }) });
  },
  removeClan(clan) {
    this.setState({ clans: _.without(this.state.clans, _.findWhere(this.state.clans, clan)) });
  },
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="pull-left">Clans</h4>
            <a onClick={ this.addClan } className="btn btn-sm btn-default pull-right"><i className="fa fa-plus"></i>&nbsp;Add Clan</a>
          </div>
        </div>
        <div id="clans">
          {
            this.state.clans && this.state.clans.map((clan, index) => {
              return (<Clan key={ clan.key } clan={ clan } ref={ `clans${ index }` } removeClan={ this.removeClan }/>);
            })
          }
        </div>
      </div>
    );
  }
});
