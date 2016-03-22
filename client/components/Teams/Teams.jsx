Teams = React.createClass({
  propTypes: {
    teams: React.PropTypes.array,
    type: React.PropTypes.string,
    display: React.PropTypes.string,
    time: React.PropTypes.string
  },
  getInitialState() {
    return {
      teams: this.props.teams || []
    };
  },
  addTeam() {
    this.setState({ teams: React.addons.update(this.state.teams, { $push: [{ chapter: '', eta: new Date(), key: Math.random() }] }) });
  },
  removeTeam(team) {
    this.setState({ teams: _.without(this.state.teams, _.findWhere(this.state.teams, team)) });
  },
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="pull-left">{ this.props.display } Teams</h4>
            <a onClick={ this.addTeam } className="btn btn-sm btn-default pull-right"><i className="fa fa-plus"></i>&nbsp;Add { this.props.display } Team</a>
          </div>
        </div>
        <div id={ `${this.props.type}Teams` }>
          {
            this.state.teams && this.state.teams.map((team, index) => {
              return (<Team key={ team.key } team={ team } ref={ `${ this.props.type }Team${ index }` } teamType={ this.props.type } display={ this.props.display } removeTeam={ this.removeTeam } time={ this.props.time }/>);
            })
          }
        </div>
      </div>
    );
  }
});
