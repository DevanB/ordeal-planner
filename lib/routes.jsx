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
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    FlowRouter.go('login');
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [authenticatedRedirect]
});

Accounts.onLogin( () => {
  const currentRoute = FlowRouter.current();
  if (currentRoute && currentRoute.route.group.name === 'public') {
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
  name: 'notFound',
  action() {
    ReactLayout.render(Layout, { yield: <NotFound /> } );
  }
};

FlowRouter.route('/', {
  name: 'index',
  action() {
    ReactLayout.render(Layout, {yield: <OrdealsList />});
  }
});

publicRoutes.route('/signup', {
  name: 'signup',
  action() {
    ReactLayout.render(Layout, {yield: <Signup />});
  }
});

publicRoutes.route('/login', {
  name: 'login',
  action() {
    ReactLayout.render(Layout, {yield: <Login />});
  }
});

publicRoutes.route('/recover-password', {
  name: 'recover-password',
  action() {
    ReactLayout.render(Layout, {yield: <RecoverPassword />});
  }
});

publicRoutes.route('/reset-password/:token', {
  name: 'reset-password',
  action(params) {
    ReactLayout.render(Layout, {yield: <ResetPassword token={params.token}/>});
  }
});

authenticatedRoutes.route('/ordeals/create', {
  name: 'ordeals-create',
  action() {
    ReactLayout.render(Layout, {yield: <OrdealCreate />});
  }
});

authenticatedRoutes.route('/ordeals/edit/:_id', {
  name: 'ordeals-edit',
  action(params) {
    ReactLayout.render(Layout, {yield: <OrdealEdit ordeal={params._id}/>});
  }
});

FlowRouter.route('/ordeals/:_id', {
  name: 'ordeals-view',
  action(params) {
    ReactLayout.render(Layout, {yield: <OrdealView ordeal={params._id}/>});
  }
});
