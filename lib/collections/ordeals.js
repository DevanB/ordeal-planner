Ordeals = new Meteor.Collection('ordeals');

Ordeals.allow({
  insert() {
    if (Meteor.user()) { return true; }
    return false;
  },
  update() {
    if (Roles.userIsInRole(Meteor.userId(), ['admin']) || (Meteor.user() && (this.createdBy === Meteor.userId()))) { return true; }
    return false;
  },
  remove() {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) { return true; }
    return false;
  }
});

Ordeals.deny({
  insert() {
    if (Meteor.user()) { return false; }
    return true;
  },
  update() {
    if (Roles.userIsInRole(Meteor.userId(), ['admin']) || (Meteor.user() && (this.createdBy === Meteor.userId()))) { return false; }
    return true;
  },
  remove() {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) { return false; }
    return true;
  }
});


Meteor.methods({
  createOrdeal(ordealAttributes) {
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
  updateOrdeal(ordealId, ordealAttributes) {
    if (!Meteor.user()) {
      throw new Meteor.Error('access-denied', 'You are not authorized to update this Ordeal.');
    }
    user = Meteor.userId();
    check(ordealId, String);
    check(ordealAttributes, {
      vcInductions: Match.Optional(String),
      vcInductionsAdviser: Match.Optional(String),
      name: Match.Optional(String),
      location: Match.Optional(String),
      date: Match.Optional(String),
      lodgeChief: Match.Optional(String),
      lodgeAdviser: Match.Optional(String),
      lodgeStaffAdviser: Match.Optional(String),
      candidatesPreRegistered: Match.Optional(String),
      candidatesAnticipated: Match.Optional(String),
      membersAnticipated: Match.Optional(String),
      medic: Match.Optional(String),
      interfaithServiceLeader: Match.Optional(String),
      brotherhoodChairman: Match.Optional(String),
      specialNeedsClan: Match.Optional(String),
      lateArrivalClan: Match.Optional(String),
      preOrdealTeams: Match.Optional(Array),
      ordealTeams: Match.Optional(Array),
      brotherhoodTeams: Match.Optional(Array),
      ordealMasters: Match.Optional(Array),
      lateArrivals: Match.Optional(Array)
    });

    const updateOrdealAttributes = _.extend(ordealAttributes, {
      updatedAt: new Date(),
      updatedBy: user
    });

    try {
      const ordeal = Ordeals.update(ordealId, { $set: updateOrdealAttributes });
      return ordeal;
    } catch (exception) {
      return exception;
    }
  },
  postOrdealUpdate(ordealId, ordealAttributes) {
    if (!Meteor.user()) {
      throw new Meteor.Error('access-denied', 'You are not authorized to update this Ordeal.');
    }
    user = Meteor.userId();
    check(ordealId, String);
    check(ordealAttributes, {
      name: Match.Optional(String),
      location: Match.Optional(String),
      date: Match.Optional(String),
      candidates: Match.Optional(String),
      members: Match.Optional(String),
      brotherhoods: Match.Optional(String),
      preOrdealTeams: Match.Optional(Array),
      ordealTeams: Match.Optional(Array),
      brotherhoodTeams: Match.Optional(Array),
      ordealMasters: Match.Optional(Array),
      clans: Match.Optional(Array),
      roses: Match.Optional(String),
      thorns: Match.Optional(String),
      adviserComments: Match.Optional(String),
      additionalComments: Match.Optional(String)
    });

    const postOrdealUpdateAttributes = _.extend(ordealAttributes, {
      updatedAt: new Date(),
      updatedBy: user
    });

    try {
      const ordeal = Ordeals.update(ordealId, { $set: postOrdealUpdateAttributes });
      return ordeal;
    } catch (exception) {
      return exception;
    }
  },
  deleteOrdeal(ordealId) {
    check(ordealId, String);
    if (Meteor.user() && Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      try {
        const deletedOrdeal = Ordeals.remove({ _id: ordealId });
        return deletedOrdeal;
      } catch (exception) {
        return exception;
      }
    } else {
      throw new Meteor.Error('access-denied', 'You are not authorized as an admin and therefore can\'t remove this Ordeal.');
    }
  }
});
