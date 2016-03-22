Team = React.createClass({
  propTypes: {
    team: React.PropTypes.object.isRequired,
    readOnly: React.PropTypes.bool,
    teamType: React.PropTypes.string,
    removeTeam: React.PropTypes.func,
    time: React.PropTypes.string
  },
  handleRemoval() {
    this.props.removeTeam(this.props.team);
  },
  render() {
    if (this.props.time === 'pre') {
      return (
        <div>
          <div className="row">
            <div className="col-xs-12 col-sm-5">
              <label htmlFor={ `${ this.props.teamType }TeamChapter` }>Chapter</label>
              <input type="text" ref={ `${ this.props.teamType }TeamChapter` } defaultValue={ this.props.team.chapter } className="form-control" id={ `${ this.props.teamType }TeamChapter` } placeholder="Chapter" required/>
            </div>
            <div className="col-xs-10 col-sm-5">
              <label htmlFor={ `${ this.props.teamType }TeamETA` }>ETA</label>
              <div className="input-group datetimepicker">
                <input
                  type="text"
                  defaultValue={ this.props.team.eta }
                  ref={ `${this.props.teamType }TeamETA` }
                  className="form-control"
                  name={ `${this.props.teamType }TeamETA` }
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
    } else if (this.props.time === 'post') {
      return (
        <div>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <label htmlFor={ `${ this.props.teamType }TeamChapter` }>Chapter</label>
              <input type="text" ref={ `${ this.props.teamType }TeamChapter` } defaultValue={ this.props.team.chapter } className="form-control" id={ `${ this.props.teamType }TeamChapter` } placeholder="Chapter" required/>
            </div>
            <div className="col-xs-12 col-sm-5">
              <label htmlFor={ `${ this.props.teamType }TeamETA` }>ETA</label>
              <div className="input-group datetimepicker">
                <input
                  type="text"
                  defaultValue={ this.props.team.eta }
                  ref={ `${this.props.teamType }TeamETA` }
                  className="form-control"
                  name={ `${this.props.teamType }TeamETA` }
                  placeholder="ETA"
                  required
                />
                <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
              </div>
            </div>
            <div className="col-xs-10 col-sm-1">
              <label htmlFor={ `${ this.props.teamType }TeamPerformed` }>Performed
                <input type="checkbox" ref={ `${this.props.teamType }TeamPerformed` } defaultChecked={ this.props.team.performed } className="form-control" name={ `${ this.props.teamType }TeamPerformed` }/>
              </label>
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
    return (
      <p>
        <strong>Chapter</strong>: { this.props.team.chapter }<br/>
        <strong>ETA</strong>: { moment(this.props.team.eta).format('MM/DD/YYYY h:mm A') }<br/>
        <strong>Performed</strong>: { this.props.team.performed }
      </p>
    );
  }
});
