Ordeals = new Meteor.Collection('ordeals');

Meteor.methods({
  createOrdeal: function(ordealAttributes) {
    if (!Meteor.user()) {
      throw new Meteor.Error('access-denied', 'You are not authorized to create an Ordeal.');
    }
    user = Meteor.userId();
    check(ordealAttributes, {
      vcInductions: String,
      vcInductionsAdviser: String,
      name: String,
      location: String,
      date: String
    });

    const ordeal = _.extend(ordealAttributes, {
      createdAt: new Date(),
      createdBy: user
    });

    try {
      const ordealId = Ordeals.insert(ordeal);
      return ordealId;
    } catch (exception) {
      return exception;
    }
  },
  updateOrdeal: function(ordealId, ordealAttributes) {
    if (!Meteor.user()) {
      throw new Meteor.Error('access-denied', 'You are not authorized to update this Ordeal.');
    }
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

    let ordealAttributes = _.extend(ordealAttributes, {
      updatedAt: new Date(),
      updatedBy: user
    });

    try {
      const ordeal = Ordeals.update(ordealId, {$set: ordealAttributes});
      return ordeal;
    } catch (exception) {
      return exception;
    }
  },
  postOrdealUpdate: function(ordealId, ordealAttributes) {
    if (!Meteor.user()) {
      throw new Meteor.Error('access-denied', 'You are not authorized to update this Ordeal.');
    }
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

    let ordealAttributes = _.extend(ordealAttributes, {
      updatedAt: new Date(),
      updatedBy: user
    });

    try {
      const ordeal = Ordeals.update(ordealId, {$set: ordealAttributes});
      return ordeal;
    } catch (exception) {
      return exception;
    }
  },
  deleteOrdeal: function(ordealId) {
    check(ordealId, String);
    if (Meteor.user() && Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      try {
        const deletedOrdeal = Ordeals.remove({'_id': ordealId});
        return deletedOrdeal;
      } catch (exception) {
        return exception;
      }
    } else {
      throw new Meteor.Error('access-denied', 'You are not authorized as an admin and therefore can\'t remove this Ordeal.');
    }
  }
});
