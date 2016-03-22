PreOrdealEditForm = React.createClass({
  propTypes: {
    ordeal: React.PropTypes.object.isRequired,
    ordealId: React.PropTypes.string.isRequired
  },
  saveOrdeal(event) {
    event.preventDefault();

    const ordeal = {};
    _.each(this.refs, (ref) => {
      if (ref.value) ordeal[ref.id] = ref.value;
    });

    const lateArrivals = [];
    _.each(this.refs.lateArrivals.refs, (lateArrivalRow) => {
      lateArrivals.push({ name: lateArrivalRow.refs.lateArrivalName.value, eta: moment(lateArrivalRow.refs.lateArrivalETA.value).toDate(), key: Math.random() });
    });

    const ordealMasters = [];
    _.each(this.refs.ordealMasters.refs, (ordealMastersRow) => {
      ordealMasters.push({ name: ordealMastersRow.refs.ordealMasterName.value, key: Math.random() });
    });

    const preOrdealTeams = [];
    _.each(this.refs.preOrdealTeams.refs, (preOrdealTeamRow) => {
      preOrdealTeams.push({ chapter: preOrdealTeamRow.refs.preOrdealTeamChapter.value, eta: moment(preOrdealTeamRow.refs.preOrdealTeamETA.value).toDate(), key: Math.random() });
    });

    const ordealTeams = [];
    _.each(this.refs.ordealTeams.refs, (ordealTeamRow) => {
      ordealTeams.push({ chapter: ordealTeamRow.refs.ordealTeamChapter.value, eta: moment(ordealTeamRow.refs.ordealTeamETA.value).toDate(), key: Math.random() });
    });

    const brotherhoodTeams = [];
    _.each(this.refs.brotherhoodTeams.refs, (brotherhoodTeamRow) => {
      brotherhoodTeams.push({ chapter: brotherhoodTeamRow.refs.brotherhoodTeamChapter.value, eta: moment(brotherhoodTeamRow.refs.brotherhoodTeamETA.value).toDate(), key: Math.random() });
    });

    _.extend(ordeal, {
      lateArrivals,
      ordealMasters,
      preOrdealTeams,
      ordealTeams,
      brotherhoodTeams
    });

    Meteor.callPromise('updateOrdeal', this.props.ordealId, ordeal)
      .then(() => {
        Bert.alert('Ordeal successfully updated', 'success');
      })
      .catch((error) => {
        Bert.alert(error.reason, 'danger');
      });
  },
  render() {
    return (
      <form onSubmit={ this.saveOrdeal }>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <label htmlFor="vcInductions">Vice-Chief of Inductions</label>
            <input type="text" ref="vcInductions" defaultValue={ this.props.ordeal.vcInductions } className="form-control" id="vcInductions" placeholder="Vice-Chief of Inductions"/>
          </div>
          <div className="col-xs-12 col-sm-6">
            <label htmlFor="vcInductionsAdviser">Vice-Chief of Inductions Adviser</label>
            <input type="text" ref="vcInductionsAdviser" defaultValue={ this.props.ordeal.vcInductionsAdviser } className="form-control" id="vcInductionsAdviser" placeholder="Vice-Chief of Inductions Adviser"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="name">Name</label>
            <input type="text" ref="name" name="name" defaultValue={ this.props.ordeal.name } className="form-control" id="name" placeholder="ex: Spring Ordeal 2015"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="location">Location</label>
            <input type="text" ref="location" defaultValue={ this.props.ordeal.location } className="form-control" id="location" placeholder="ex: Camp Sequoyah"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="datetime">Ordeal Begins</label>
            <div className="input-group datetimepicker">
              <input className="set-due-date form-control" type="text" ref="date" defaultValue={ this.props.ordeal.date } id="date" placeholder="ex: 10/03/2015 06:00 PM"/>
              <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="lodgeChief">Lodge Chief</label>
            <input type="text" ref="lodgeChief" defaultValue={ this.props.ordeal.lodgeChief } className="form-control" id="lodgeChief" placeholder="Lodge Chief"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="lodgeAdviser">Lodge Adviser</label>
            <input type="text" ref="lodgeAdviser" defaultValue={ this.props.ordeal.lodgeAdviser } className="form-control" id="lodgeAdviser" placeholder="Lodge Adviser"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="lodgeStaffAdviser">Lodge Staff Adviser</label>
            <input type="text" ref="lodgeStaffAdviser" defaultValue={ this.props.ordeal.lodgeStaffAdviser } className="form-control" id="lodgeStaffAdviser" placeholder="Lodge Staff Adviser"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="candidatesPreRegistered">Candidates Pre-Registered</label>
            <input type="number" ref="candidatesPreRegistered" defaultValue={ this.props.ordeal.candidatesPreRegistered } className="form-control" id="candidatesPreRegistered" placeholder="Candidates Pre-Registered"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="candidatesAnticipated">Candidates Anticipated</label>
            <input type="number" ref="candidatesAnticipated" defaultValue={ this.props.ordeal.candidatesAnticipated } className="form-control" id="candidatesAnticipated" placeholder="Candidates Anticipated"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="membersAnticipated">Members Anticipated</label>
            <input type="number" ref="membersAnticipated" defaultValue={ this.props.ordeal.membersAnticipated } className="form-control" id="membersAnticipated" placeholder="Members Anticipated"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <label htmlFor="medic">Medic</label>
              <input type="text" ref="medic" defaultValue={ this.props.ordeal.medic } className="form-control" id="medic" placeholder="Medic"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <label htmlFor="interfaithServiceLeader">Interfaith Service Leader</label>
              <input type="text" ref="interfaithServiceLeader" defaultValue={ this.props.ordeal.interfaithServiceLeader } className="form-control" id="interfaithServiceLeader" placeholder="Interfaith Service Leader"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="form-group">
              <label htmlFor="brotherhoodChairman">Brotherhood Chairman</label>
              <input type="text" ref="brotherhoodChairman" defaultValue={ this.props.ordeal.brotherhoodChairman } className="form-control" id="brotherhoodChairman" placeholder="Brotherhood Chairman"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="form-group">
              <label htmlFor="specialNeedsClan">Special Needs Clan</label>
              <input type="text" ref="specialNeedsClan" defaultValue={ this.props.ordeal.specialNeedsClan } className="form-control" id="specialNeedsClan" placeholder="ex: Goat"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="form-group">
              <label htmlFor="lateArrivalClan">Late Arrival Clan</label>
              <input type="text" ref="lateArrivalClan" defaultValue={ this.props.ordeal.lateArrivalClan } className="form-control" id="lateArrivalClan" placeholder="ex: Falcon"/>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <h3>Ceremony Teams</h3>
          </div>
        </div>
        <Teams teams={ this.props.ordeal.preOrdealTeams } ref="preOrdealTeams" type="preOrdeal" display="Pre-Ordeal" time="pre"/>
        <hr/>
        <Teams teams={ this.props.ordeal.ordealTeams } ref="ordealTeams" type="ordeal" display="Ordeal" time="pre"/>
        <hr/>
        <Teams teams={ this.props.ordeal.brotherhoodTeams } ref="brotherhoodTeams" type="brotherhood" display="Brotherhood" time="pre"/>
        <hr/>
        <OrdealMasters ordealMasters={ this.props.ordeal.ordealMasters } ref="ordealMasters" time="pre"/>
        <hr/>
        <LateArrivals lateArrivals={ this.props.ordeal.lateArrivals } ref="lateArrivals"/>
        <hr/>
        <div className="row">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    );
  }
});
