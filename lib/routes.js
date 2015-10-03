//loading

const publicRedirect = () => {
  if (Meteor.userId()) {
    FlowRouter.go('index');
  }
};

const publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [publicRedirect]
});

const authenticatedRedirect = () => {
  if(!Meteor.loggingIn() && !Meteor.userId()) {
    FlowRouter.go('login');
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [authenticatedRedirect]
});

Accounts.onLogin( () => {
  let currentRoute = FlowRouter.current();
  if (currentRoute && currentRoute.route.group.name == 'public') {
    FlowRouter.go('index');
  }
});

if (Meteor.isClient) {
  Tracker.autorun( () => {
    if (!Meteor.userId() && FlowRouter.current().route) {
      FlowRouter.go('index');
    }
  });
}

FlowRouter.notFound = {
  action() {
    BlazeLayout.render( 'layout', { content: 'notFound' } );
  }
};

FlowRouter.route('/', {
  name: 'index',
  action() {
    BlazeLayout.render('layout', {content: 'ordealsList'});
  }
});

publicRoutes.route('/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render('layout', {content: 'signup'});
  }
});

publicRoutes.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('layout', {content: 'login'});
  }
});

publicRoutes.route('/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render('layout', {content: 'recoverPassword'});
  }
});

publicRoutes.route('/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render('layout', {content: 'resetPassword'});
  },
});

authenticatedRoutes.route('/ordeals/create', {
  name: 'ordeals-create',
  action() {
    BlazeLayout.render('layout', {content: 'ordealsCreate'});
  }
});

authenticatedRoutes.route('/ordeals/edit/:_id', {
  name: 'ordeals-edit',
  action() {
    BlazeLayout.render('layout', {content: 'ordealsEdit'});
  }
});

FlowRouter.route('/ordeals/:_id', {
  name: 'ordeals-view',
  action() {
    BlazeLayout.render('layout', {content: 'ordealsView'});
  }
});
