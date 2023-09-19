const { NavLink, Link, useNavigate, useParams } = ReactRouterDOM;
export function AppHeader() {
  <header className="app-header">
    <span></span>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contacts</NavLink>
    </nav>
  </header>;
}
