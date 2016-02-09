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
  renderOrdealMasters() {
    return this.data.ordeal.ordealMasters.map((ordealMaster, index) => {
      return <OrdealMaster key={index} ordealMaster={ordealMaster} readOnly />;
    });
    // }
    // return <p>No ordeal masters</p>;
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

          {/* {this.renderOrdealMasters()}*/}

            {/* {{#if lateArrivals}} */}
              <h4>Late Arrivals</h4>
              {/* {{#each sortedLateArrivals lateArrivals}} */}
              <p>
                <strong>Name</strong>: {ordeal.name}<br/>
                <strong>ETA</strong>: {ordeal.eta}
              </p>
              {/* {{/each}} */}<br/>
            {/* {{/if}} */}
          </div>
          <div className="col-xs-12 col-sm-6">
          {/*  {{#if preOrdealTeams}}*/}
              <h4>Pre-Ordeal Teams</h4>
            {/*  {{#each preOrdealTeams}}*/}
              <p>
                <strong>Chapter</strong>: {ordeal.chapter}<br/>
                <strong>ETA</strong>: {ordeal.eta}<br/>
                <strong>Performed</strong>: {ordeal.performed}
              </p>
          {/*    {{/each}}*/}<br/>
          {/*  {{/if}}*/}

          {/*  {{#if ordealTeams}} */}
              <h4>Ordeal Teams</h4>
            {/*  {{#each ordealTeams}} */}
              <p>
                <strong>Chapter</strong>: {ordeal.chapter}<br/>
                <strong>ETA</strong>: {ordeal.eta}<br/>
                <strong>Performed</strong>: {ordeal.performed}
              </p>
            {/*  {{/each}}*/}<br/>
          {/*  {{/if}}*/}

            {/* {{#if brotherhoodTeams}} */}
              <h4>Brotherhood Teams</h4>
              {/* {{#each brotherhoodTeams}} */}
              <p>
                <strong>Chapter</strong>: {ordeal.chapter}<br/>
                <strong>ETA</strong>: {ordeal.eta}<br/>
                <strong>Performed</strong>: {ordeal.performed}
              </p>
            {/*  {{/each}}*/}<br/>
            {/* {{/if}}*/}

            {/* {{#if clans}}*/}
              <h4>Clans</h4>
            {/*  {{#each clans}}*/}
              <p>
                <strong>Name</strong>: {ordeal.name}<br/>
                <strong>Elangomat</strong>: {ordeal.elangomat}<br/>
                <strong>Candidates</strong>: {ordeal.numberOfCandidates}<br/>
                <strong>Poor Elangomat</strong>: {ordeal.poorElangomat}
              </p>
              {/* {{/each}} */}
            {/* {{/if}} */}
          </div>
        </div>
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
