Template.ordealsEdit.helpers({
  ordeal: function(){
    return Ordeals.findOne();
  }
});

Template.ordealsEdit.events({
  'click #addPreOrdealTeamBtn': function(e) {
    e.preventDefault();
    $('#preOrdealTeams').append('<div class="row"><div class="col-xs-6"><label for="preOrdealTeamChapter">Chapter</label><input type="text" class="form-control" name="preOrdealTeamChapter" placeholder="Chapter"></div><div class="col-xs-6"><label for="preOrdealTeamETA">ETA</label><input type="time" class="form-control" name="preOrdealTeamETA" placeholder="ETA"></div></div>');
  },
  'click #addOrdealTeamBtn': function(e) {
    e.preventDefault();
    $('#ordealTeams').append('<div class="row"><div class="col-xs-6"><label for="ordealTeamChapter">Chapter</label><input type="text" class="form-control" name="ordealTeamChapter" placeholder="Chapter"></div><div class="col-xs-6"><label for="ordealTeamETA">ETA</label><input type="time" class="form-control" name="ordealTeamETA" placeholder="ETA"></div></div>');
  },
  'click #addBrotherhoodTeamBtn': function(e) {
    e.preventDefault();
    $('#brotherhoodTeams').append('<div class="row"><div class="col-xs-6"><label for="brotherhoodTeamChapter">Chapter</label><input type="text" class="form-control" name="brotherhoodTeamChapter" placeholder="Chapter"></div><div class="col-xs-6"><label for="brotherhoodTeamETA">ETA</label><input type="time" class="form-control" name="brotherhoodTeamETA" placeholder="ETA"></div></div>');
  },
  'click #addOrdealMasterBtn': function(e) {
    e.preventDefault();
    $('#ordealMasters').append('<div class="row"><div class="col-xs-12"><label for="ordealMasterName">Name</label><input type="text" class="form-control" name="ordealMasterName" placeholder="Name"></div></div>');
  },
  'click #addLateArrivalBtn': function(e) {
    e.preventDefault();
    $('#lateArrivals').append('<div class="row"><div class="col-xs-6"><label for="lateArrivalName">Name</label><input type="text" class="form-control" name="lateArrivalName" placeholder="Name"></div><div class="col-xs-6"><label for="lateArrivalETA">ETA</label><input type="time" class="form-control" name="lateArrivalETA" placeholder="ETA"></div></div>');
  },
  'submit form': function(e) {
    e.preventDefault();
    var ordealId = this._id;

    var preOrdealTeams = [];
    $("[name='preOrdealTeamChapter']").each(function(index, e){
      preOrdealTeams[index] = {"chapter": e.value, "eta": "", performed: false};
    });
    $("[name='preOrdealTeamETA']").each(function(index, e){
      preOrdealTeams[index].eta = e.value;
    });

    var ordealTeams = [];
    $("[name='ordealTeamChapter']").each(function(index, e){
      ordealTeams[index] = {"chapter": e.value, "eta": "", performed: false};
    });
    $("[name='ordealTeamETA']").each(function(index, e){
      ordealTeams[index].eta = e.value;
    });

    var brotherhoodTeams = [];
    $("[name='brotherhoodTeamChapter']").each(function(index, e){
      brotherhoodTeams[index] = {"chapter": e.value, "eta": "", performed: false};
    });
    $("[name='brotherhoodTeamETA']").each(function(index, e){
      brotherhoodTeams[index].eta = e.value;
    });

    var ordealMasters = [];
    $("[name='ordealMasterName']").each(function(index, e){
      ordealMasters[index] = {"name": e.value, "rating": ""};
    });

    var lateArrivals = [];
    $("[name='lateArrivalName']").each(function(index, e){
      lateArrivals[index] = {"name": e.value, "eta": ""};
    });
    $("[name='lateArrivalETA']").each(function(index, e){
      lateArrivals[index].eta = e.value;
    });

    var ordeal = {
      vcInductions: e.target.vcInductions.value,
      vcInductionsAdviser: e.target.vcInductionsAdviser.value,

      name: e.target.name.value,
      location: e.target.location.value,
      date: e.target.date.value,
      time: e.target.time.value,

      lodgeChief: e.target.lodgeChief.value,
      lodgeAdviser: e.target.lodgeAdviser.value,
      lodgeStaffAdviser: e.target.lodgeStaffAdviser.value,

      candidatesPreRegistered: e.target.candidatesPreRegistered.value,
      candidatesAnticipated: e.target.candidatesAnticipated.value,
      membersAnticipated: e.target.membersAnticipated.value,

      medic: e.target.medic.value,
      interfaithServiceLeader: e.target.interfaithServiceLeader.value,
      brotherhoodChairman: e.target.brotherhoodChairman.value,
      specialNeedsClan: e.target.specialNeedsClan.value,

      preOrdealTeams: preOrdealTeams,
      ordealTeams: ordealTeams,
      brotherhoodTeams: brotherhoodTeams,
      ordealMasters: ordealMasters,
      lateArrivals: lateArrivals
    };

    Meteor.call('updateOrdeal', ordealId, ordeal, function(error, response){
      if (error) {
        Bert.alert(error.reason, "danger");
      } else {
        Router.go("/");
      };
    });
  }
});
