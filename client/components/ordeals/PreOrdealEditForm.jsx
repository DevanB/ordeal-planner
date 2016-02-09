PreOrdealEditForm = React.createClass({
  propTypes: {
    ordeal: React.PropTypes.object.isRequired
  },
  render() {
    const ordeal = this.props.ordeal;
    return (
      <form>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <label htmlFor="vcInductions">Vice-Chief of Inductions</label>
            <input type="text" defaultValue={ordeal.vcInductions} className="form-control" id="vcInductions" placeholder="Vice-Chief of Inductions"/>
          </div>
          <div className="col-xs-12 col-sm-6">
            <label htmlFor="vcInductionsAdviser">Vice-Chief of Inductions Adviser</label>
            <input type="text" defaultValue={ordeal.vcInductionsAdviser} className="form-control" id="vcInductionsAdviser" placeholder="Vice-Chief of Inductions Adviser"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="name">Name</label>
            <input type="text" defaultValue={ordeal.name} className="form-control" id="name" placeholder="ex: Spring Ordeal 2015"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="location">Location</label>
            <input type="text" defaultValue={ordeal.location} className="form-control" id="location" placeholder="ex: Camp Sequoyah"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="datetime">Ordeal Begins</label>
            <div className="input-group datetimepicker">
              <input className="set-due-date form-control" type="text" defaultValue={ordeal.date} id="date" placeholder="ex: 10/03/2015 06:00 PM"/>
              <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="lodgeChief">Lodge Chief</label>
            <input type="text" defaultValue={ordeal.lodgeChief} className="form-control" id="lodgeChief" placeholder="Lodge Chief"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="lodgeAdviser">Lodge Adviser</label>
            <input type="text" defaultValue={ordeal.lodgeAdviser} className="form-control" id="lodgeAdviser" placeholder="Lodge Adviser"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="lodgeStaffAdviser">Lodge Staff Adviser</label>
            <input type="text" defaultValue={ordeal.lodgeStaffAdviser} className="form-control" id="lodgeStaffAdviser" placeholder="Lodge Staff Adviser"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="candidatesPreRegistered">Candidates Pre-Registered</label>
            <input type="number" defaultValue={ordeal.candidatesPreRegistered} className="form-control" id="candidatesPreRegistered" placeholder="Candidates Pre-Registered"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="candidatesAnticipated">Candidates Anticipated</label>
            <input type="number" defaultValue={ordeal.candidatesAnticipated} className="form-control" id="candidatesAnticipated" placeholder="Candidates Anticipated"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="membersAnticipated">Members Anticipated</label>
            <input type="number" defaultValue={ordeal.membersAnticipated} className="form-control" id="membersAnticipated" placeholder="Members Anticipated"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <label htmlFor="medic">Medic</label>
              <input type="text" defaultValue={ordeal.medic} className="form-control" id="medic" placeholder="Medic"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <label htmlFor="interfaithServiceLeader">Interfaith Service Leader</label>
              <input type="text" defaultValue={ordeal.interfaithServiceLeader} className="form-control" id="interfaithServiceLeader" placeholder="Interfaith Service Leader"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="form-group">
              <label htmlFor="brotherhoodChairman">Brotherhood Chairman</label>
              <input type="text" defaultValue={ordeal.brotherhoodChairman} className="form-control" id="brotherhoodChairman" placeholder="Brotherhood Chairman"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="form-group">
              <label htmlFor="specialNeedsClan">Special Needs Clan</label>
              <input type="text" defaultValue={ordeal.specialNeedsClan} className="form-control" id="specialNeedsClan" placeholder="ex: Goat"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="form-group">
              <label htmlFor="lateArrivalClan">Late Arrival Clan</label>
              <input type="text" defaultValue={ordeal.lateArrivalClan} className="form-control" id="lateArrivalClan" placeholder="ex: Falcon"/>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <h3>Ceremony Teams</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="pull-left">Pre-Ordeal Teams</h4>
            <a href="#" id="addPreOrdealTeamBtn" className="btn btn-sm btn-default pull-right"><i className="fa fa-plus"></i>&nbsp; Add Pre-Ordeal Team</a>
          </div>
        </div>
        <div id="preOrdealTeams">
          {/* {{#each preOrdealTeams}} */}
          <div className="row">
            <div className="col-xs-6">
              <label htmlFor="preOrdealTeamChapter">Chapter</label>
              <input type="text" defaultValue={ordeal.chapter} className="form-control" name="preOrdealTeamChapter" placeholder="Chapter"/>
            </div>
            <div className="col-xs-5">
              <label htmlFor="preOrdealTeamETA">ETA</label>
              <div className="input-group datetimepicker">
                <input className="set-due-date form-control" type="text" defaultValue={ordeal.eta} name="preOrdealTeamETA" placeholder="ETA"/>
                <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
              </div>
            </div>
            <div className="col-xs-1">
              <label htmlFor="removeBtn">&nbsp;</label><br/>
              <a href="#" className="removeBtn btn btn-default"><i className="fa fa-times"></i></a>
            </div>
          </div>
        {/*  {{/each}} */}
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="pull-left">Ordeal Teams</h4>
            <a href="#" id="addOrdealTeamBtn" className="btn btn-sm btn-default pull-right"><i className="fa fa-plus"></i>&nbsp; Add Ordeal Team</a>
          </div>
        </div>
        <div id="ordealTeams">
        {/*  {{#each ordealTeams}} */}
          <div claclassNamess="row">
            <div className="col-xs-6">
              <label htmlFor="ordealTeamChapter">Chapter</label>
              <input type="text" defaultValue={ordeal.chapter} className="form-control" name="ordealTeamChapter" placeholder="Chapter"/>
            </div>
            <div className="col-xs-5">
              <label htmlFor="ordealTeamETA">ETA</label>
              <div className="input-group datetimepicker">
                <input className="set-due-date form-control" type="text" defaultValue={ordeal.eta} name="ordealTeamETA" placeholder="ETA"/>
                <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
              </div>
            </div>
            <div className="col-xs-1">
              <label htmlFor="removeBtn">&nbsp;</label><br/>
              <a href="#" className="removeBtn btn btn-default"><i className="fa fa-times"></i></a>
            </div>
          </div>
        {/*  {{/each}} */}
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="pull-left">Brotherhood Teams</h4>
            <a href="#" id="addBrotherhoodTeamBtn" className="btn btn-sm btn-default pull-right"><i className="fa fa-plus"></i>&nbsp; Add Brotherhood Team</a>
          </div>
        </div>
        <div id="brotherhoodTeams">
        {/*  {{#each brotherhoodTeams}} */}
          <div className="row">
            <div className="col-xs-6">
              <label htmlFor="brotherhoodTeamChapter">Chapter</label>
              <input type="text" defaultValue={ordeal.chapter} className="form-control" name="brotherhoodTeamChapter" placeholder="Chapter"/>
            </div>
            <div className="col-xs-5">
              <label htmlFor="brotherhoodTeamETA">ETA</label>
              <div className="input-group datetimepicker">
                <input className="set-due-date form-control" type="text" defaultValue={ordeal.eta} name="brotherhoodTeamETA" placeholder="ETA"/>
                <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
              </div>
            </div>
            <div className="col-xs-1">
              <label htmlFor="removeBtn">&nbsp;</label><br/>
              <a href="#" className="removeBtn btn btn-default"><i className="fa fa-times"></i></a>
            </div>
          </div>
        {/*  {{/each}} */}
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <h4>Ordeal Masters</h4>
            <a href="#" id="addOrdealMasterBtn" className="btn btn-sm btn-default pull-right"><i className="fa fa-plus"></i>&nbsp; Add Ordeal Master</a>
          </div>
        </div>
        <div id="ordealMasters">
        {/*  {{#each ordealMasters}} */}
          <div className="row">
            <div className="col-xs-11">
              <label htmlFor="ordealMasterName">Name</label>
              <input type="text" defaultValue={ordeal.name} className="form-control" name="ordealMasterName" placeholder="Name"/>
            </div>
            <div className="col-xs-1">
              <label htmlFor="removeBtn">&nbsp;</label><br/>
              <a href="#" className="removeBtn btn btn-default"><i className="fa fa-times"></i></a>
            </div>
          </div>
        {/*  {{/each}} */}
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <h4>Late Arrivals</h4>
            <a href="#" id="addLateArrivalBtn" className="btn btn-sm btn-default pull-right"><i className="fa fa-plus"></i>&nbsp; Add Late Arrival</a>
          </div>
        </div>
        <div id="lateArrivals">
        {/*  {{#each sortedLateArrivals lateArrivals}} */}
          <div className="row">
            <div className="col-xs-6">
              <label htmlFor="lateArrivalName">Name</label>
              <input type="text" defaultValue={ordeal.name} className="form-control" name="lateArrivalName" placeholder="Name"/>
            </div>
            <div className="col-xs-5">
              <label htmlFor="lateArrivalETA">ETA</label>
              <div className="input-group datetimepicker">
                <input className="set-due-date form-control" type="text" defaultValue={ordeal.eta} name="lateArrivalETA" placeholder="ETA"/>
                <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
              </div>
            </div>
            <div className="col-xs-1">
              <label htmlFor="removeBtn">&nbsp;</label><br/>
              <a href="#" className="removeBtn btn btn-default"><i className="fa fa-times"></i></a>
            </div>
          </div>
        {/*  {{/each}} */}
        </div>
        <hr/>
        <div claclassNamess="row">
          <div className="col-xs-12">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    );
  }
});
