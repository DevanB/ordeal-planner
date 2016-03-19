Team = React.createClass({
  propTypes: {
    team: React.PropTypes.object,
    readOnly: React.PropTypes.bool,
    teamType: React.PropTypes.string
  },
  render() {
    const { readOnly, team, teamType} = this.props;
    if (readOnly) {
      return (
        <p>
          <strong>Chapter</strong>: { team.chapter }<br/>
          <strong>ETA</strong>: { team.eta }<br/>
          <strong>Performed</strong>: { team.performed }
        </p>
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col-xs-6">
            <label htmlFor={ `${type}TeamChapter` }>Chapter</label>
            <input type="text" defaultValue={ chapter } className="form-control" name={` ${type}TeamChapter`} placeholder="Chapter"/>
          </div>
          <div className="col-xs-5">
            <label htmlFor={ `${type}TeamETA` }>ETA</label>
            <div className="input-group datetimepicker">
              <input className="set-due-date form-control" type="text" defaultValue={ eta } name={ `${type}TeamETA` } placeholder="ETA"/>
              <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
            </div>
          </div>
          <div className="col-xs-1">
            <label htmlFor="removeBtn">&nbsp;</label><br/>
            <a className="btn btn-default"><i className="fa fa-times"></i></a>
          </div>
        </div>
      </div>
    );
  }
});
