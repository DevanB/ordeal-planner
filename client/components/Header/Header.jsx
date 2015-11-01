Header = React.createClass({
  navigationItems() {
    if (!Meteor.loggingIn() && Meteor.user()) {
      return <AuthenticatedNavigation />;
    }

    return <PublicNavigation />;
  },
  render() {
    return (
    	<nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href={FlowHelpers.pathFor('index')}>Ordeal Planner</a>
          </div>
          {this.navigationItems()}
        </div>
    	</nav>
    );
  }
});
