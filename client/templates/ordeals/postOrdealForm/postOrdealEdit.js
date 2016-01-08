Template.postOrdealEdit.onRendered(function() {
  $('.datetimepicker').datetimepicker();
});

Template.postOrdealEdit.helpers({
  adviser() {
    if (Roles.userIsInRole(Meteor.user(), ['admin'])) {
      return 'not-disabled';
    }
    return 'disabled';
  }
});

Template.postOrdealEdit.events({
  'click #addPreOrdealTeamBtn'(event) {
    event.preventDefault();
    $('#preOrdealTeams').append('<div class="row"><div class="col-xs-12 col-sm-5"><label for="preOrdealTeamChapter">Chapter</label><input type="text" class="form-control" name="preOrdealTeamChapter" placeholder="Chapter"></div><div class="col-xs-12 col-sm-5"><label for="preOrdealTeamETA">ETA</label><div class="input-group datetimepicker"><input class="set-due-date form-control" type="text" name="preOrdealTeamETA" placeholder="ETA"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></div><div class="col-xs-12 col-sm-1"><label for="preOrdealTeamPerformed">Performed<input type="checkbox" class="form-control" name="preOrdealTeamPerformed"></label></div><div class="col-xs-12 col-sm-1"><label for="removeBtn">&nbsp;</label><br/><a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a></div></div>');
    $('.datetimepicker').datetimepicker();
  },
  'click #addOrdealTeamBtn'(event) {
    event.preventDefault();
    $('#ordealTeams').append('<div class="row"><div class="col-xs-12 col-sm-5"><label for="ordealTeamChapter">Chapter</label><input type="text" class="form-control" name="ordealTeamChapter" placeholder="Chapter"></div><div class="col-xs-12 col-sm-5"><label for="ordealTeamETA">ETA</label><div class="input-group datetimepicker"><input class="set-due-date form-control" type="text" name="ordealTeamETA" placeholder="ETA"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></div><div class="col-xs-12 col-sm-1"><label for="ordealTeamPerformed">Performed<input type="checkbox" class="form-control" name="ordealTeamPerformed"></label></div><div class="col-xs-12 col-sm-1"><label for="removeBtn">&nbsp;</label><br/><a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a></div></div>');
    $('.datetimepicker').datetimepicker();
  },
  'click #addBrotherhoodTeamBtn'(event) {
    event.preventDefault();
    $('#brotherhoodTeams').append('<div class="row"><div class="col-xs-12 col-sm-5"><label for="brotherhoodTeamChapter">Chapter</label><input type="text" class="form-control" name="brotherhoodTeamChapter" placeholder="Chapter"></div><div class="col-xs-12 col-sm-5"><label for="brotherhoodTeamETA">ETA</label><div class="input-group datetimepicker"><input class="set-due-date form-control" type="text" name="brotherhoodTeamETA" placeholder="ETA"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></div><div class="col-xs-12 col-sm-1"><label for="brotherhoodTeamPerformed">Performed<input type="checkbox" class="form-control" name="brotherhoodTeamPerformed"></label></div><div class="col-xs-12 col-sm-1"><label for="removeBtn">&nbsp;</label><br/><a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a></div></div>');
    $('.datetimepicker').datetimepicker();
  },
  'click #addOrdealMasterBtn'(event) {
    event.preventDefault();
    const clone = $('#ordealMasters .row:last-child').clone().appendTo('#ordealMasters');
    clone.find('[type=text]').val('');
    clone.find('[id="ordealMasterRating"]').data('userrating', '5');
  },
  'click #addClanBtn'(event) {
    event.preventDefault();
    $('#clans').append('<div class="row"><div class="col-xs-12 col-sm-3"><label for="clanName">Name</label><input type="text" class="form-control" name="clanName" placeholder="Name"></div><div class="col-xs-12 col-sm-3"><label for="elangomat">Elangomat</label><input type="text" class="form-control" name="elangomat" placeholder="Elangomat Name"></div><div class="col-xs-12 col-sm-3"><label for="numberOfCandidates">Candidates</label><input type="text" class="form-control" name="numberOfCandidates" placeholder="Number of Candidates"></div><div class="col-xs-12 col-sm-2"><label for="poorElangomat">Poor Elangomat<input type="checkbox" class="form-control" name="poorElangomat"></label></div><div class="col-xs-12 col-sm-1"><label for="removeBtn">&nbsp;</label><br/><a href="#" class="removeBtn btn btn-default"><i class="fa fa-times"></i></a></div></div>');
  },
  'click .removeBtn'(event) {
    event.preventDefault();
    $(event.target).closest('.row').remove();
  },
  'click .stars'(event) {
    const stars = $(e.currentTarget).data('stars');
    $(event.currentTarget).parents('div.stars-rating').siblings("input[name='ordealMasterRating']").val(stars);
  },
  'submit form'(event) {
    event.preventDefault();
    const ordealId = this._id;

    let preOrdealTeams = [];
    $("[name='preOrdealTeamChapter']").each((index, event) => {
      preOrdealTeams[index] = {'chapter': event.value, 'eta': '', performed: false};
    });
    $("[name='preOrdealTeamETA']").each((index, event) => {
      preOrdealTeams[index].eta = event.value;
    });
    $("[name='preOrdealTeamPerformed']").each((index, event) => {
      preOrdealTeams[index].performed = event.checked;
    });

    let ordealTeams = [];
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

    const ordeal = {
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

  Meteor.call('postOrdealUpdate', ordealId, ordeal, function(error, response) {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      FlowRouter.go('/');
    };
  });
  }
});
