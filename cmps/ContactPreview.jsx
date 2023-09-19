const { Link } = ReactRouterDOM;
export function ContactPreview({ contact }) {
  return (
    <tr key={contact._id}>
      <td>{contact.firstName}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        <button>
          <Link to={`/contact/${contact._id}`}>Details</Link>
        </button>
      </td>
    </tr>
  );
}
