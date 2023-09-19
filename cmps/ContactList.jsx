import { ContactPreview } from '../cmps/ContactPreview.jsx';

export function ContactList({ contacts }) {
  return (
    <table>
      <thead>
        <tr>
          <th>firstname</th>
          <th>email</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <ContactPreview contact={c} key={c._id} />
        ))}
      </tbody>
    </table>
  );
}
