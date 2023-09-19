const { NavLink, Link, useNavigate, useParams } = ReactRouterDOM;
export function AppHeader() {
  <header className="app-header">
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contacts</NavLink>
    </nav>
  </header>;
}
