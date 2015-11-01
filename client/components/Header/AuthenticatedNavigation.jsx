AuthenticatedNavigation = React.createClass({
  currentUserEmail() {
    return Meteor.user().emails[0].address;
  },
  render() {
    return (
      <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">{this.currentUserEmail()}<span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
              <li onClick={Meteor.logout} className="logout"><a href={FlowHelpers.pathFor('index')}>Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
});
