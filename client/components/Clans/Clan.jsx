Clan = React.createClass({
  propTypes: {
    clan: React.PropTypes.object,
    readOnly: React.PropTypes.bool,
    removeClan: React.PropTypes.func
  },
  handleRemoval() {
    this.props.removeClan(this.props.clan)
  },
  render() {
    if (this.props.readOnly) {
      return (
        <p>
          <strong>Name</strong>: { this.props.clan.name }<br/>
          <strong>Elangomat</strong>: { this.props.clan.elangomat }<br/>
          <strong>Candidates</strong>: { this.props.clan.numberOfCandidates }<br/>
          <strong>Poor Elangomat</strong>: { this.props.clan.poorElangomat }
        </p>
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label htmlFor="clanName">Name</label>
            <input type="text" ref="clanName" defaultValue={ this.props.clan.name } className="form-control" name="clanName" placeholder="Clan Name" required/>
          </div>
          <div className="col-xs-6 col-sm-3">
            <label htmlFor="clanCandidates">Candidates</label>
            <input type="number" ref="clanCandidates" defaultValue={ this.props.clan.candidates } className="form-control" name="clanCandidates" placeholder="Number of Candidates" required/>
          </div>
          <div className="col-xs-12 col-sm-3">
            <label htmlFor="clanElangomat">Elangomat</label>
            <input type="text" ref="clanElangomat" defaultValue={ this.props.clan.elangomat } className="form-control" name="clanElangomat" placeholder="Elangomat Name" required/>
          </div>
          <div className="col-xs-6 col-sm-2">
            <label htmlFor="clanPoorElangomat">Poor Elangomat
              <input type="checkbox" ref="clanPoorElangomat" defaultChecked={ this.props.clan.poorElangomat } className="form-control" name="clanPoorElangomat"/>
            </label>
          </div>
          <div className="col-xs-6 col-sm-1">
            <div className="pull-right">
              <label>&nbsp;</label><br/>
              <a onClick={ this.handleRemoval } className="btn btn-default"><i className="fa fa-times"></i></a>
            </div>
          </div>
        </div><br/>
      <hr/></div>
    );
  }
});
