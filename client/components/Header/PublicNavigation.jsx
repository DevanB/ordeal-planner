PublicNavigation = () => (
  <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
    <ul className="nav navbar-nav navbar-right">
      <li className={ FlowHelpers.currentRoute('login') }>
        <a href={ FlowRouter.path('/login') }>Login</a>
      </li>
      <li className={ FlowHelpers.currentRoute('signup') }>
        <a href={ FlowRouter.path('/signup') }>Sign Up</a>
      </li>
    </ul>
  </div>
);
