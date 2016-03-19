PreOrdealEditForm = React.createClass({
  propTypes: {
    ordeal: React.PropTypes.object.isRequired
  },
  saveOrdeal(event) {
    event.preventDefault();
    console.log(event);
    console.log(this);
  },
  addLateArrival() {
    this.props.ordeal.lateArrivals = ( typeof this.props.ordeal.lateArrivals !== 'undefined' && this.props.ordeal.lateArrivals instanceof Array ) ? this.props.ordeal.lateArrivals : [];
    this.props.ordeal.lateArrivals.push({});
  },
  render() {
    const { ordeal } = this.props;
    return (
      <form onSubmit={ this.saveOrdeal }>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <label htmlFor="vcInductions">Vice-Chief of Inductions</label>
            <input type="text" ref="vcInductions" defaultValue={ ordeal.vcInductions } className="form-control" id="vcInductions" placeholder="Vice-Chief of Inductions"/>
          </div>
          <div className="col-xs-12 col-sm-6">
            <label htmlFor="vcInductionsAdviser">Vice-Chief of Inductions Adviser</label>
            <input type="text" ref="vcInductionsAdviser" defaultValue={ ordeal.vcInductionsAdviser } className="form-control" id="vcInductionsAdviser" placeholder="Vice-Chief of Inductions Adviser"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" defaultValue={ ordeal.name } className="form-control" id="name" placeholder="ex: Spring Ordeal 2015"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="location">Location</label>
            <input type="text" ref="location" defaultValue={ ordeal.location } className="form-control" id="location" placeholder="ex: Camp Sequoyah"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="datetime">Ordeal Begins</label>
            <div className="input-group datetimepicker">
              <input className="set-due-date form-control" type="text" ref="date" defaultValue={ ordeal.date } id="date" placeholder="ex: 10/03/2015 06:00 PM"/>
              <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="lodgeChief">Lodge Chief</label>
            <input type="text" ref="lodgeChief" defaultValue={ ordeal.lodgeChief } className="form-control" id="lodgeChief" placeholder="Lodge Chief"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="lodgeAdviser">Lodge Adviser</label>
            <input type="text" ref="lodgeAdviser" defaultValue={ ordeal.lodgeAdviser } className="form-control" id="lodgeAdviser" placeholder="Lodge Adviser"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="lodgeStaffAdviser">Lodge Staff Adviser</label>
            <input type="text" ref="lodgeStaffAdviser" defaultValue={ ordeal.lodgeStaffAdviser } className="form-control" id="lodgeStaffAdviser" placeholder="Lodge Staff Adviser"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="candidatesPreRegistered">Candidates Pre-Registered</label>
            <input type="number" ref="candidatesPreRegistered" defaultValue={ ordeal.candidatesPreRegistered } className="form-control" id="candidatesPreRegistered" placeholder="Candidates Pre-Registered"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="candidatesAnticipated">Candidates Anticipated</label>
            <input type="number" ref="candidatesAnticipated" defaultValue={ ordeal.candidatesAnticipated } className="form-control" id="candidatesAnticipated" placeholder="Candidates Anticipated"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="membersAnticipated">Members Anticipated</label>
            <input type="number" ref="membersAnticipated" defaultValue={ ordeal.membersAnticipated } className="form-control" id="membersAnticipated" placeholder="Members Anticipated"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <label htmlFor="medic">Medic</label>
              <input type="text" ref="medic" defaultValue={ ordeal.medic } className="form-control" id="medic" placeholder="Medic"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="form-group">
              <label htmlFor="interfaithServiceLeader">Interfaith Service Leader</label>
              <input type="text" ref="interfaithServiceLeader" defaultValue={ ordeal.interfaithServiceLeader } className="form-control" id="interfaithServiceLeader" placeholder="Interfaith Service Leader"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="form-group">
              <label htmlFor="brotherhoodChairman">Brotherhood Chairman</label>
              <input type="text" ref="brotherhoodChairman" defaultValue={ ordeal.brotherhoodChairman } className="form-control" id="brotherhoodChairman" placeholder="Brotherhood Chairman"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="form-group">
              <label htmlFor="specialNeedsClan">Special Needs Clan</label>
              <input type="text" ref="specialNeedsClan" defaultValue={ ordeal.specialNeedsClan } className="form-control" id="specialNeedsClan" placeholder="ex: Goat"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="form-group">
              <label htmlFor="lateArrivalClan">Late Arrival Clan</label>
              <input type="text" ref="lateArrivalClan" defaultValue={ ordeal.lateArrivalClan } className="form-control" id="lateArrivalClan" placeholder="ex: Falcon"/>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <h3>Ceremony Teams</h3>
          </div>
        </div>
        <Teams teams={ ordeal.preOrdealTeams } type="PreOrdeal"/>
        <hr/>
        <Teams teams={ ordeal.ordealTeams } type="Ordeal"/>
        <hr/>
        <Teams teams={ ordeal.brotherhoodTeams } type="Broterhood"/>
        <hr/>
        <OrdealMasters ordealMasters={ ordeal.ordealMasters }/>
        <hr/>
        <LateArrivals lateArrivals={ ordeal.lateArrivals } addLateArrival={ this.addLateArrival }/>
        <hr/>
        <div claclassNamess="row">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    );
  }
});
