PublicNavigation = React.createClass({
  render() {
    return (
      <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li className={FlowHelpers.currentRoute('login')}><a href={FlowHelpers.pathFor('/login')}>Login</a></li>
          <li className={FlowHelpers.currentRoute('signup')}><a href={FlowHelpers.pathFor('/signup')}>Sign Up</a></li>
        </ul>
      </div>
    );
  }
});
