// sortedLateArrivals: function(lateArrivals) {
//   return _.sortBy(lateArrivals, function(lateArrival) { return Date.parse(lateArrival.eta); });
// }
OrdealView = React.createClass({
  propTypes: {
    ordeal: React.PropTypes.string.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    const subscription = Meteor.subscribe('ordeal', this.props.ordeal);
    return {
      isLoading: !subscription.ready(),
      ordeal: Ordeals.findOne()
    };
  },
  renderLateArrivals() {
    if (this.data.ordeal && this.data.ordeal.lateArrivals) {
      this.data.ordeal.lateArrivals.map((lateArrival, index) => {
        return (<LateArrival lateArrival={ lateArrival } key={ index } readOnly/>);
      });
    }
    return (<p>No Late Arrivals</p>);
  },
  renderOrdealMasters() {
    if (this.data.ordeal && this.data.ordeal.ordealMasters) {
      this.data.ordealMasters.map((ordealMaster, index) => {
        return (<OrdealMaster ordealMaster={ ordealMaster } key={ index } readOnly/>);
      });
    }
    return (<p>No Ordeal Masters</p>);
  },
  renderPreOrdealTeams() {
    if (this.data.ordeal && this.data.ordeal.preOrdealTeams) {
      this.data.preOrdealTeams.map((preOrdealTeam, index) => {
        return (<Team team={ preOrdealTeam } key={ index } readOnly/>);
      });
    }
    return (<p>No Pre Ordeal Teams</p>);
  },
  renderOrdealTeams() {
    if (this.data.ordeal && this.data.ordeal.ordealTeams) {
      this.data.ordealTeams.map((ordealTeam, index) => {
        return (<Team team={ ordealTeam } key={ index } readOnly/>);
      });
    }
    return (<p>No Ordeal Teams</p>);
  },
  renderBrotherhoodTeams() {
    if (this.data.ordeal && this.data.ordeal.brotherhoodTeams) {
      this.data.brotherhoodTeams.map((brotherhoodTeam, index) => {
        return (<Team team={ brotherhoodTeam } key={ index } readOnly/>);
      });
    }
    return (<p>No Brotherhood Teams</p>);
  },
  renderClans() {
    if (this.data.ordeal && this.data.ordeal.clans) {
      this.data.clans.map((clan, index) => {
        return (<Clan clan={ clan } key={ index } readOnly/>);
      });
    }
    return (<p>No Clans</p>);
  },
  render() {
    const ordeal = this.data.ordeal ? this.data.ordeal : '';
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h4>{ordeal.name} – {ordeal.location}</h4>
          <h5>{ordeal.date}</h5>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <strong>Vice-Chief of Inductions</strong>: {ordeal.vcInductions}<br/>
            <strong>Vice-Chief of Inductions Adviser</strong>: {ordeal.vcInductionsAdviser}<br/><br/>

            <strong>Lodge Chief</strong>: {ordeal.lodgeChief}<br/>
            <strong>Lodge Adviser</strong>: {ordeal.lodgeAdviser}<br/>
            <strong>Lodge Staff Adviser</strong>: {ordeal.lodgeStaffAdviser}<br/><br/>

            <strong>Candidates Pre-Registered</strong>: {ordeal.candidatesPreRegistered}<br/>
            <strong>Candidates Anticipated</strong>: {ordeal.candidatesAnticipated}<br/>
            <strong>Members Anticipated</strong>: {ordeal.membersAnticipated}<br/><br/>

            <strong>Candidates Inducted</strong>: {ordeal.candidates}<br/>
            <strong>Brotherhoods Converted</strong>: {ordeal.brotherhoods}<br/>
            <strong>Members In Attendance</strong>: {ordeal.members}<br/><br/>

            <strong>Medic</strong>: {ordeal.medic}<br/>
            <strong>Interfaith Service Leader</strong>: {ordeal.interfaithServiceLeader}<br/>
            <strong>Brotherhood Chairman</strong>: {ordeal.brotherhoodChairman}<br/>
            <strong>Special Needs Clan</strong>: {ordeal.specialNeedsClan}<br/>
            <strong>Late Arrival Clan</strong>: {ordeal.lateArrivalClan}<br/><br/>

            { this.renderOrdealMasters() }
            { this.renderLateArrivals() }
          </div>
          <div className="col-xs-12 col-sm-6">
            { this.renderPreOrdealTeams() }
            { this.renderOrdealTeams() }
            { this.renderBrotherhoodTeams() }
            { this.renderClans() }
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <p><strong>Roses</strong>: {ordeal.roses}</p>
            <p><strong>Thorns</strong>: {ordeal.thorns}</p>
            <p><strong>Additional Comments</strong>: {ordeal.additionalComments}</p>
            <p><strong>Adviser Comments</strong>: {ordeal.adviserComments}<br/></p>
          </div>
        </div>
      </div>
    );
  }
});
