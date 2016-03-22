const urlFor = (path, params) => {
  return Meteor.absoluteUrl(pathFor(path, params));
};

const currentRoute = (route) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
};

FlowHelpers = {
  urlFor,
  currentRoute
};
