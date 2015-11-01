PreOrdealEditForm = React.createClass({
  propTypes: {
    ordeal: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <form>
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <label for="vcInductions">Vice-Chief of Inductions</label>
            <input type="text" value="{{vcInductions}}" class="form-control" id="vcInductions" placeholder="Vice-Chief of Inductions"/>
          </div>
          <div class="col-xs-12 col-sm-6">
            <label for="vcInductionsAdviser">Vice-Chief of Inductions Adviser</label>
            <input type="text" value="{{vcInductionsAdviser}}" class="form-control" id="vcInductionsAdviser" placeholder="Vice-Chief of Inductions Adviser"/>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <label for="name">Name</label>
            <input type="text" value="{{name}}" class="form-control" id="name" placeholder="ex: Spring Ordeal 2015"/>
          </div>
          <div class="col-xs-12 col-sm-4">
            <label for="location">Location</label>
            <input type="text" value="{{location}}" class="form-control" id="location" placeholder="ex: Camp Sequoyah"/>
          </div>
          <div class="col-xs-12 col-sm-4">
            <label for="datetime">Ordeal Begins</label>
            <div class="input-group datetimepicker">
              <input class="set-due-date form-control" type="text" value="{{date}}" id="date" placeholder="ex: 10/03/2015 06:00 PM"/>
              <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <label for="lodgeChief">Lodge Chief</label>
            <input type="text" value="{{lodgeChief}}" class="form-control" id="lodgeChief" placeholder="Lodge Chief"/>
          </div>
          <div class="col-xs-12 col-sm-4">
            <label for="lodgeAdviser">Lodge Adviser</label>
            <input type="text" value="{{lodgeAdviser}}" class="form-control" id="lodgeAdviser" placeholder="Lodge Adviser"/>
          </div>
          <div class="col-xs-12 col-sm-4">
            <label for="lodgeStaffAdviser">Lodge Staff Adviser</label>
            <input type="text" value="{{lodgeStaffAdviser}}" class="form-control" id="lodgeStaffAdviser" placeholder="Lodge Staff Adviser"/>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <label for="candidatesPreRegistered">Candidates Pre-Registered</label>
            <input type="number" value="{{candidatesPreRegistered}}" class="form-control" id="candidatesPreRegistered" placeholder="Candidates Pre-Registered"/>
          </div>
          <div class="col-xs-12 col-sm-4">
            <label for="candidatesAnticipated">Candidates Anticipated</label>
            <input type="number" value="{{candidatesAnticipated}}" class="form-control" id="candidatesAnticipated" placeholder="Candidates Anticipated"/>
          </div>
          <div class="col-xs-12 col-sm-4">
            <label for="membersAnticipated">Members Anticipated</label>
            <input type="number" value="{{membersAnticipated}}" class="form-control" id="membersAnticipated" placeholder="Members Anticipated"/>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <div class="form-group">
              <label for="medic">Medic</label>
              <input type="text" value="{{medic}}" class="form-control" id="medic" placeholder="Medic"/>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="form-group">
              <label for="interfaithServiceLeader">Interfaith Service Leader</label>
              <input type="text" value="{{interfaithServiceLeader}}" class="form-control" id="interfaithServiceLeader" placeholder="Interfaith Service Leader"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <div class="form-group">
              <label for="brotherhoodChairman">Brotherhood Chairman</label>
              <input type="text" value="{{brotherhoodChairman}}" class="form-control" id="brotherhoodChairman" placeholder="Brotherhood Chairman"/>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <div class="form-group">
              <label for="specialNeedsClan">Special Needs Clan</label>
              <input type="text" value="{{specialNeedsClan}}" class="form-control" id="specialNeedsClan" placeholder="ex: Goat"/>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <div class="form-group">
              <label for="lateArrivalClan">Late Arrival Clan</label>
              <input type="text" value="{{lateArrivalClan}}" class="form-control" id="lateArrivalClan" placeholder="ex: Falcon"/>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12">
            <h3>Ceremony Teams</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <h4 class="pull-left">Pre-Ordeal Teams</h4>
            <a href="#" id="addPreOrdealTeamBtn" class="btn btn-sm btn-default pull-right"><i class="fa fa-plus"></i>&nbsp; Add Pre-Ordeal Team</a>
          </div>
        </div>
        <div id="preOrdealTeams">
          {{#each preOrdealTeams}}
          <div class="row">
            <div class="col-xs-6">
              <label for="preOrdealTeamChapter">Chapter</label>
              <input type="text" value="{{chapter}}" class="form-control" name="preOrdealTeamChapter" placeholder="Chapter"/>
            </div>
            <div class="col-xs-5">
              <label for="preOrdealTeamETA">ETA</label>
              <div class="input-group datetimepicker">
                <input class="set-due-date form-control" type="text" value="{{eta}}" name="preOrdealTeamETA" placeholder="ETA"/>
                <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
              </div>
            </div>
            <div class="col-xs-1">
              <label for="removeBtn">&nbsp;</label><br/>
              <a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a>
            </div>
          </div>
          {{/each}}
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12">
            <h4 class="pull-left">Ordeal Teams</h4>
            <a href="#" id="addOrdealTeamBtn" class="btn btn-sm btn-default pull-right"><i class="fa fa-plus"></i>&nbsp; Add Ordeal Team</a>
          </div>
        </div>
        <div id="ordealTeams">
          {{#each ordealTeams}}
          <div class="row">
            <div class="col-xs-6">
              <label for="ordealTeamChapter">Chapter</label>
              <input type="text" value="{{chapter}}" class="form-control" name="ordealTeamChapter" placeholder="Chapter"/>
            </div>
            <div class="col-xs-5">
              <label for="ordealTeamETA">ETA</label>
              <div class="input-group datetimepicker">
                <input class="set-due-date form-control" type="text" value="{{eta}}" name="ordealTeamETA" placeholder="ETA"/>
                <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
              </div>
            </div>
            <div class="col-xs-1">
              <label for="removeBtn">&nbsp;</label><br/>
              <a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a>
            </div>
          </div>
          {{/each}}
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12">
            <h4 class="pull-left">Brotherhood Teams</h4>
            <a href="#" id="addBrotherhoodTeamBtn" class="btn btn-sm btn-default pull-right"><i class="fa fa-plus"></i>&nbsp; Add Brotherhood Team</a>
          </div>
        </div>
        <div id="brotherhoodTeams">
          {{#each brotherhoodTeams}}
          <div class="row">
            <div class="col-xs-6">
              <label for="brotherhoodTeamChapter">Chapter</label>
              <input type="text" value="{{chapter}}" class="form-control" name="brotherhoodTeamChapter" placeholder="Chapter"/>
            </div>
            <div class="col-xs-5">
              <label for="brotherhoodTeamETA">ETA</label>
              <div class="input-group datetimepicker">
                <input class="set-due-date form-control" type="text" value="{{eta}}" name="brotherhoodTeamETA" placeholder="ETA"/>
                <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
              </div>
            </div>
            <div class="col-xs-1">
              <label for="removeBtn">&nbsp;</label><br/>
              <a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a>
            </div>
          </div>
          {{/each}}
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12">
            <h4>Ordeal Masters</h4>
            <a href="#" id="addOrdealMasterBtn" class="btn btn-sm btn-default pull-right"><i class="fa fa-plus"></i>&nbsp; Add Ordeal Master</a>
          </div>
        </div>
        <div id="ordealMasters">
          {{#each ordealMasters}}
          <div class="row">
            <div class="col-xs-11">
              <label for="ordealMasterName">Name</label>
              <input type="text" value="{{name}}" class="form-control" name="ordealMasterName" placeholder="Name"/>
            </div>
            <div class="col-xs-1">
              <label for="removeBtn">&nbsp;</label><br/>
              <a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a>
            </div>
          </div>
          {{/each}}
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12">
            <h4>Late Arrivals</h4>
            <a href="#" id="addLateArrivalBtn" class="btn btn-sm btn-default pull-right"><i class="fa fa-plus"></i>&nbsp; Add Late Arrival</a>
          </div>
        </div>
        <div id="lateArrivals">
          {{#each sortedLateArrivals lateArrivals}}
          <div class="row">
            <div class="col-xs-6">
              <label for="lateArrivalName">Name</label>
              <input type="text" value="{{name}}" class="form-control" name="lateArrivalName" placeholder="Name"/>
            </div>
            <div class="col-xs-5">
              <label for="lateArrivalETA">ETA</label>
              <div class="input-group datetimepicker">
                <input class="set-due-date form-control" type="text" value="{{eta}}" name="lateArrivalETA" placeholder="ETA"/>
                <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
              </div>
            </div>
            <div class="col-xs-1">
              <label for="removeBtn">&nbsp;</label><br/>
              <a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a>
            </div>
          </div>
          {{/each}}
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12">
            <button type="submit" class="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    );
  }
});
