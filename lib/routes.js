Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  layoutTemplate: 'layout'
});

Router.route('index', {
  path: '/',
  template: 'ordealsList',
  onBeforeAction: function(){
    Session.set('currentRoute', 'index');
    this.next();
  }
});

Router.route('signup', {
  path: '/signup',
  template: 'signup',
  onBeforeAction: function(){
    Session.set('currentRoute', 'signup');
    this.next();
  }
});

Router.route('login', {
  path: '/login',
  template: 'login',
  onBeforeAction: function(){
    Session.set('currentRoute', 'login');
    this.next();
  }
});

Router.route('recover-password', {
  path: '/recover-password',
  template: 'recoverPassword',
  onBeforeAction: function(){
    Session.set('currentRoute', 'recover-password');
    this.next();
  }
});

Router.route('reset-password', {
  path: '/reset-password/:token',
  template: 'resetPassword',
  onBeforeAction: function() {
    Session.set('currentRoute', 'reset-password');
    Session.set('resetPasswordToken', this.params.token);
    this.next();
  }
});

Router.route('create-ordeal', {
  path: '/ordeals/create',
  template: 'ordealsCreate',
  onBeforeAction: function() {
    Session.set('currentRoute', 'create-ordeal');
    this.next();
  }
});

Router.route('edit-ordeal', {
  path: '/ordeals/edit/:_id',
  template: 'ordealsEdit',
  subscriptions: function() {
    return Meteor.subscribe('ordeal', this.params._id);
  },
  onBeforeAction: function() {
    Session.set('currentRoute', 'edit-ordeal');
    this.next();
  }
});

Router.route('view-ordeal', {
  path: '/ordeals/:_id',
  template: 'ordealsView',
  subscriptions: function() {
    return Meteor.subscribe('ordeal', this.params._id);
  },
  onBeforeAction: function() {
    Session.set('currentRoute', 'edit-ordeal');
    this.next();
  }
});

checkUserLoggedIn = function(){
  if( !Meteor.loggingIn() && !Meteor.user() ) {
    Router.go('/login');
  } else {
    this.next();
  }
}

userAuthenticated = function(){
  if( !Meteor.loggingIn() && Meteor.user() ){
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
