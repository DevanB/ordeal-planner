Template.preOrdealEdit.onRendered(function() {
    $('.datetimepicker').datetimepicker();
});

Template.preOrdealEdit.helpers({
  sortedLateArrivals: function(lateArrivals) {
    return _.sortBy(lateArrivals, function(lateArrival) { return Date.parse(lateArrival.eta) });
  }
});

Template.preOrdealEdit.events({
  'click #addPreOrdealTeamBtn': function(e) {
    e.preventDefault();
    $('#preOrdealTeams').append('<div class="row"><div class="col-xs-6"><label for="preOrdealTeamChapter">Chapter</label><input type="text" class="form-control" name="preOrdealTeamChapter" placeholder="Chapter"></div><div class="col-xs-5"><label for="preOrdealTeamETA">ETA</label><div class="input-group datetimepicker"><input class="set-due-date form-control" type="text" name="preOrdealTeamETA" placeholder="ETA"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></div><div class="col-xs-1"><label for="removeBtn">&nbsp;</label><br/><a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a></div></div>');
    $('.datetimepicker').datetimepicker();
  },
  'click #addOrdealTeamBtn': function(e) {
    e.preventDefault();
    $('#ordealTeams').append('<div class="row"><div class="col-xs-6"><label for="ordealTeamChapter">Chapter</label><input type="text" class="form-control" name="ordealTeamChapter" placeholder="Chapter"></div><div class="col-xs-5"><label for="ordealTeamETA">ETA</label><div class="input-group datetimepicker"><input class="set-due-date form-control" type="text" name="ordealTeamETA" placeholder="ETA"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></div><div class="col-xs-1"><label for="removeBtn">&nbsp;</label><br/><a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a></div></div>');
    $('.datetimepicker').datetimepicker();
  },
  'click #addBrotherhoodTeamBtn': function(e) {
    e.preventDefault();
    $('#brotherhoodTeams').append('<div class="row"><div class="col-xs-6"><label for="brotherhoodTeamChapter">Chapter</label><input type="text" class="form-control" name="brotherhoodTeamChapter" placeholder="Chapter"/></div><div class="col-xs-5"><label for="brotherhoodTeamETA">ETA</label><div class="input-group datetimepicker"><input class="set-due-date form-control" type="text" name="brotherhoodTeamETA" placeholder="ETA"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></div><div class="col-xs-1"><label for="removeBtn">&nbsp;</label><br/><a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a></div></div>');
    $('.datetimepicker').datetimepicker();
  },
  'click #addOrdealMasterBtn': function(e) {
    e.preventDefault();
    $('#ordealMasters').append('<div class="row"><div class="col-xs-11"><label for="ordealMasterName">Name</label><input type="text" class="form-control" name="ordealMasterName" placeholder="Name"></div><div class="col-xs-1"><label for="removeBtn">&nbsp;</label><br/><a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a></div></div>');
  },
  'click #addLateArrivalBtn': function(e) {
    e.preventDefault();
    $('#lateArrivals').append('<div class="row"><div class="col-xs-6"><label for="lateArrivalName">Name</label><input type="text" class="form-control" name="lateArrivalName" placeholder="Name"/></div><div class="col-xs-5"><label for="lateArrivalETA">ETA</label><div class="input-group datetimepicker"><input class="set-due-date form-control" type="text" name="lateArrivalETA" placeholder="ETA"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></div><div class="col-xs-1"><label for="removeBtn">&nbsp;</label><br/><a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a></div></div>');
    $('.datetimepicker').datetimepicker();
  },
  'click .removeBtn': function(e) {
    e.preventDefault();
    $(e.target).closest(".row").remove();
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
      lateArrivalClan: e.target.lateArrivalClan.value,

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
        FlowRouter.go("/");
      };
    });
  }
});
