Template.postOrdealEdit.onRendered(function(){
  $('.datetimepicker').datetimepicker();
});

Template.postOrdealEdit.events({
  'click #addPreOrdealTeamBtn': function(e) {
    e.preventDefault();
    $('#preOrdealTeams').append('<div class="row"><div class="col-xs-12 col-sm-4"><label for="preOrdealTeamChapter">Chapter</label><input type="text" class="form-control" name="preOrdealTeamChapter" placeholder="Chapter"></div><div class="col-xs-12 col-sm-4"><label for="preOrdealTeamETA">ETA</label><input type="time" class="form-control" name="preOrdealTeamETA" placeholder="ETA"></div><div class="col-xs-12 col-sm-4"><label for="preOrdealTeamPerformed">Performed<input type="checkbox" class="form-control" name="preOrdealTeamPerformed"></label></div></div>');
  },
  'click #addOrdealTeamBtn': function(e) {
    e.preventDefault();
    $('#ordealTeams').append('<div class="row"><div class="col-xs-12 col-sm-4"><label for="ordealTeamChapter">Chapter</label><input type="text" class="form-control" name="ordealTeamChapter" placeholder="Chapter"></div><div class="col-xs-12 col-sm-4"><label for="ordealTeamETA">ETA</label><input type="time" class="form-control" name="ordealTeamETA" placeholder="ETA"></div><div class="col-xs-12 col-sm-4"><label for="ordealTeamPerformed">Performed<input type="checkbox" class="form-control" name="ordealTeamPerformed"></label></div></div>');
  },
  'click #addBrotherhoodTeamBtn': function(e) {
    e.preventDefault();
    $('#brotherhoodTeams').append('<div class="row"><div class="col-xs-12 col-sm-4"><label for="brotherhoodTeamChapter">Chapter</label><input type="text" class="form-control" name="brotherhoodTeamChapter" placeholder="Chapter"></div><div class="col-xs-12 col-sm-4"><label for="brotherhoodTeamETA">ETA</label><input type="time" class="form-control" name="brotherhoodTeamETA" placeholder="ETA"></div><div class="col-xs-12 col-sm-4"><label for="brotherhoodTeamPerformed">Performed<input type="checkbox" class="form-control" name="brotherhoodTeamPerformed"></label></div></div>');
  },
  'click #addOrdealMasterBtn': function(e) {
    e.preventDefault();
    $('#ordealMasters').append('<div class="row"><div class="col-xs-6"><label for="ordealMasterName">Name</label><input type="text" class="form-control" name="ordealMasterName" placeholder="Name"></div><div class="col-xs-6"><label for="ordealMasterRating">Rating</label><input type="text" class="form-control" name="ordealMasterRating" placeholder="Rating"></div></div>');
  },
  'click #addClanBtn': function(e) {
    e.preventDefault();
    $('#clans').append('<div class="row"><div class="col-xs-12 col-sm-3"><label for="clanName">Name</label><input type="text" class="form-control" name="clanName" placeholder="Name"></div><div class="col-xs-12 col-sm-3"><label for="elangomat">Elangomat</label><input type="text" class="form-control" name="elangomat" placeholder="Elangomat Name"></div><div class="col-xs-12 col-sm-3"><label for="numberOfCandidates">Candidates</label><input type="text" class="form-control" name="numberOfCandidates" placeholder="Number of Candidates"></div><div class="col-xs-12 col-sm-3"><label for="poorElangomat">Poor Elangomat<input type="checkbox" class="form-control" name="poorElangomat"></label></div></div>');
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
    $("[name='preOrdealTeamPerformed']").each(function(index, e){
      preOrdealTeams[index].performed = e.checked;
    });

    var ordealTeams = [];
    $("[name='ordealTeamChapter']").each(function(index, e){
      ordealTeams[index] = {"chapter": e.value, "eta": "", performed: false};
    });
    $("[name='ordealTeamETA']").each(function(index, e){
      ordealTeams[index].eta = e.value;
    });
    $("[name='ordealTeamPerformed']").each(function(index, e){
      ordealTeams[index].performed = e.checked;
    });

    var brotherhoodTeams = [];
    $("[name='brotherhoodTeamChapter']").each(function(index, e){
      brotherhoodTeams[index] = {"chapter": e.value, "eta": "", performed: false};
    });
    $("[name='brotherhoodTeamETA']").each(function(index, e){
      brotherhoodTeams[index].eta = e.value;
    });
    $("[name='brotherhoodTeamPerformed']").each(function(index, e){
      brotherhoodTeams[index].performed = e.checked;
    });

    var ordealMasters = [];
    $("[name='ordealMasterName']").each(function(index, e){
      ordealMasters[index] = {"name": e.value, "rating": ""};
    });
    $("[name='ordealMasterRating']").each(function(index, e){
      ordealMasters[index].rating = e.value;
    });

    var clans = [];
    $("[name='clanName']").each(function(index, e){
      clans[index] = {"name": e.value, "elangomat": "", "numberOfCandidates": "", "poorElangomat": false};
    });
    $("[name='elangomat']").each(function(index, e){
      clans[index].elangomat = e.value;
    });
    $("[name='numberOfCandidates']").each(function(index, e){
      clans[index].numberOfCandidates = e.value;
    });
    $("[name='poorElangomat']").each(function(index, e){
      clans[index].poorElangomat = e.checked;
    });

   var ordeal = {
      name: e.target.name.value,
      location: e.target.location.value,
      date: e.target.date.value,

      candidates: e.target.candidates.value,
      brotherhoods: e.target.brotherhoods.value,
      members: e.target.members.value,

      preOrdealTeams: preOrdealTeams,
      ordealTeams: ordealTeams,
      brotherhoodTeams: brotherhoodTeams,
      ordealMasters: ordealMasters,
      clans: clans,
      roses: e.target.roses.value,
      thorns: e.target.thorns.value,
      adviserComments: e.target.adviserComments.value,
      additionalComments: e.target.additionalComments.value
    };

    Meteor.call('postOrdealUpdate', ordealId, ordeal, function(error, response){
      if (error) {
        Bert.alert(error.reason, "danger");
      } else {
        Router.go("/");
      };
    });
  }
});
