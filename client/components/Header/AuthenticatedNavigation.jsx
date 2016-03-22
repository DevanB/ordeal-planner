AuthenticatedNavigation = ({ currentUserEmail, handleLogout }) => (
  <div id="navbar-collapse" className="collapse navbar-collapse">
    <ul className="nav navbar-nav navbar-right">
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          { currentUserEmail }<span className="caret"></span>
        </a>
        <ul className="dropdown-menu" role="menu">
          <li onClick={ handleLogout } className="logout">
            <a href="#">Logout</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);
