const { NavLink, Link, useNavigate, useParams } = ReactRouterDOM;
export function AppHeader() {
  return (
    <header className="app-header">
      <span>dsadfdsfsd</span>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
      </nav>
    </header>
  );
}
