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
      if (_.get(ref, 'refs.input')) { ordeal[ref.refs.input.id] = ref.refs.input.value; }
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
            <InputGroup inputName="vcInductions" ref="vcInductions" label="Vice-Chief of Inductions" inputType="text" defaultValue={ this.props.ordeal.vcInductions } className="form-control" isRequired/>
          </div>
          <div className="col-xs-12 col-sm-6">
            <InputGroup inputName="vcInductionsAdviser" ref="vcInductionsAdviser" label="Vice-Chief of Inductions Adviser" inputType="text" defaultValue={ this.props.ordeal.vcInductionsAdviser } className="form-control" isRequired/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="name" ref="name" label="Name" inputType="text" defaultValue={ this.props.ordeal.name } className="form-control" placeholder="ex: Spring Ordeal 2015" isRequired/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="location" ref="location" label="Location" inputType="text" defaultValue={ this.props.ordeal.location } className="form-control" placeholder="ex: Camp Sequoyah" isRequired/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="datetime">Ordeal Begins</label>
            <div className="input-group datetimepicker">
              <input className="set-due-date form-control" type="text" ref="date" defaultValue={ this.props.ordeal.date } id="date" placeholder="ex: 10/03/2015 06:00 PM" required/>
              <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="lodgeChief" ref="lodgeChief" label="Lodge Chief" inputType="text" defaultValue={ this.props.ordeal.lodgeChief } className="form-control"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="lodgeAdviser" ref="lodgeAdviser" label="Lodge Adviser" inputType="text" defaultValue={ this.props.ordeal.lodgeAdviser } className="form-control"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="lodgeStaffAdviser" ref="lodgeStaffAdviser" label="Lodge Staff Adviser" inputType="text" defaultValue={ this.props.ordeal.lodgeStaffAdviser } className="form-control"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="candidatesPreRegistered" ref="candidatesPreRegistered" label="Candidates Pre-Registered" inputType="number" defaultValue={ this.props.ordeal.candidatesPreRegistered } className="form-control"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="candidatesAnticipated" ref="candidatesAnticipated" label="Candidates Anticipated" inputType="number" defaultValue={ this.props.ordeal.candidatesAnticipated } className="form-control"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="membersAnticipated" ref="membersAnticipated" label="Members Anticipated" inputType="number" defaultValue={ this.props.ordeal.membersAnticipated } className="form-control"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <InputGroup inputName="medic" ref="medic" label="Medic" inputType="text" defaultValue={ this.props.ordeal.medic } className="form-control"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <InputGroup inputName="interfaithServiceLeader" ref="interfaithServiceLeader" label="Interfaith Service Leader" inputType="text" defaultValue={ this.props.ordeal.interfaithServiceLeader } className="form-control"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="form-group">
              <InputGroup inputName="brotherhoodChairman" ref="brotherhoodChairman" label="Brotherhood Chairman" inputType="text" defaultValue={ this.props.ordeal.brotherhoodChairman } className="form-control"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="form-group">
              <InputGroup inputName="specialNeedsClan" ref="naspecialNeedsClanme" label="Special Needs Clan" inputType="text" defaultValue={ this.props.ordeal.specialNeedsClan } className="form-control" placeholder="ex: Goat"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="form-group">
              <InputGroup inputName="lateArrivalClan" ref="lateArrivalClan" label="Late Arrival Clan" inputType="text" defaultValue={ this.props.ordeal.lateArrivalClan } className="form-control" placeholder="ex: Falcon"/>
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
