HeaderContainer = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
    };
  },
  currentUserEmail() {
    return this.data.user.emails[0].address;
  },
  handleLogout() {
    Meteor.logout();
    Bert.alert('Successfully logged out.', 'success');
  },
  navigationItems() {
    if (!this.data.user) {
      return <PublicNavigation />;
    }
    return (
      <AuthenticatedNavigation
        currentUserEmail={ this.currentUserEmail() }
        handleLogout={ this.handleLogout }
      />
    );
  },
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href={ FlowRouter.path('index') }>Ordeal Planner</a>
          </div>
          { this.navigationItems() }
        </div>
      </nav>
    );
  }
});
