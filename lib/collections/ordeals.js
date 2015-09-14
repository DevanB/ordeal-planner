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
      lateArrivalClan: String,
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
  postOrdealUpdate: function(ordealId, ordealAttributes) {
    user = Meteor.userId();
    check(ordealId, String);
    check(ordealAttributes, {
      name: String,
      location: String,
      date: String,
      candidates: String,
      members: String,
      brotherhoods: String,
      preOrdealTeams: Array,
      ordealTeams: Array,
      brotherhoodTeams: Array,
      ordealMasters: Array,
      clans: Array,
      roses: String,
      thorns: String,
      adviserComments: String,
      additionalComments: String
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
