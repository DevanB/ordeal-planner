Ordeals = new Meteor.Collection('ordeals');

Meteor.methods({
  createOrdeal: function(ordealAttributes) {
    user = Meteor.userId();
    check(ordealAttributes, {
      vcInductions: String,
      vcInductionsAdviser: String,
      name: String,
      location: String,
      date: String
    });

    var ordeal = _.extend(ordealAttributes, {
      createdAt: new Date(),
      createdBy: user
    });

    try {
      var ordealId = Ordeals.insert(ordeal);
      return ordealId;
    } catch( exception ) {
      return exception;
    }
  },
  updateOrdeal: function(ordealId, ordealAttributes) {
    user = Meteor.userId();
    check(ordealId, String);
    check(ordealAttributes, {
      vcInductions: String,
      vcInductionsAdviser: String,
      name: String,
      location: String,
      date: String,
      lodgeChief: String,
      lodgeAdviser: String,
      lodgeStaffAdviser: String,
      candidatesPreRegistered: String,
      candidatesAnticipated: String,
      membersAnticipated: String,
      medic: String,
      interfaithServiceLeader: String,
      brotherhoodChairman: String,
      specialNeedsClan: String,
      preOrdealTeams: Array,
      ordealTeams: Array,
      brotherhoodTeams: Array,
      ordealMasters: Array,
      lateArrivals: Array
    });

    var ordealAttributes = _.extend(ordealAttributes,{
      updatedAt: new Date(),
      updatedBy: user
    });

    try {
      var ordeal = Ordeals.update(ordealId, {$set: ordealAttributes});
      return ordeal;
    } catch (exception) {
      return exception
    }
  },
  deleteOrdeal: function(ordealId) {
    check(ordealId, String);
    if (Roles.userIsInRole(this.userId, ['admin'])) {
      try {
        var deletedOrdeal = Ordeals.remove({"_id": ordealId});
        return deletedOrdeal;
      } catch(exception) {
        return exception
      }
    } else {
      throw new Meteor.Error("user-not-admin", "You are not authorized as an admin and therefore can't remove this Ordeal.");
    }
  }
});

/*
  Ordeal: {
    //Pre-Ordeal
    Name: String
    Date: Date
    Time: String
    Location: String
    VCInductions: String
    VCInductionsAdviser: String
    LodgeChief: String
    LodgeAdviser: String
    StaffAdviser: String
    CandidatesPreRegistered: String
		CandidatesAnticipated: Number
    MembersAnticipated: Number
    Medic: String
    BrotherhoodChairman: String
		SpecialNeedsClan: String
		PreOrdealTeams: [
      {Chapter: String, ETA: String, Performed: Boolean}
    ]
    OrdealTeams: [
      {Chapter: String, ETA: String, Performed: Boolean}
    ]
    BrotherhoodTeams: [
      {Chatper: String, ETA: String, Performed: Boolean}
    ]
    OrdealMasters: [
      {Name: String, Rating: Number}
    ]
    LateArrivals: [
      {Name: String, ETA: String}
    ]
	  //Post Ordeal Details/Inputs:
		Candidates: Number
    Brotherhoods: Number
    Members: Number
		Clans: [
      {Name: String, Candidates: Number, Elangomat: String, Poor: Boolean}
    ]
		Roses: String
		Thorns: String
		AdditionalComments: String
    AdviserComments:String
    createdBy: String
    createdAt: Date/time
    updatedBy: String
    updatedAt: Date/time
  }
*/
