Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  layoutTemplate: 'layout'
});

Router.route('index', {
  path: '/',
  template: 'ordealsList'
});

Router.route('signup');

Router.route('login');

Router.route('recover-password', {
  path: '/recover-password',
  template: 'recoverPassword'
});

Router.route('reset-password', {
  path: '/reset-password/:token',
  template: 'resetPassword',
  onBeforeAction: function() {
    Session.set('resetPasswordToken', this.params.token);
    this.next();
  }
});

Router.route('create-ordeal', {
  path: '/ordeals/create',
  template: 'ordealsCreate'
});

Router.route('edit-ordeal', {
  path: '/ordeals/edit/:_id',
  template: 'ordealsEdit'
});

Router.route('view-ordeal', {
  path: '/ordeals/:_id',
  template: 'ordealsView'
});

checkUserLoggedIn = function(){
  if (!Meteor.loggingIn() && !Meteor.user()) {
    Router.go('/login');
  } else {
    this.next();
  }
}

userAuthenticated = function(){
  if (!Meteor.loggingIn() && Meteor.user()) {
    Router.go('/');
  } else {
    this.next();
  }
}

Router.onBeforeAction(userAuthenticated, {
  only: ['signup', 'login', 'recover-password', 'reset-password']
});

Router.onBeforeAction(checkUserLoggedIn, {
  only: ['create-ordeal', 'edit-ordeal']
});
