import { ContactDetails } from '../views/ContactDetails.jsx';

export function ContactPreview({ contact }) {
  return (
    <article>
      <h1>{contact.firstName}</h1>
      <h2>email: {contact.email}</h2>
      <h2>phone: {contact.phone}</h2>
    </article>
  );
}
