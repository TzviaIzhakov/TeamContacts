import { ContactPreview } from '../cmps/ContactPreview.jsx';

export function ContactList({ contacts }) {
  return (
    <section>
      {contacts.map((c) => (
        <ContactPreview contact={c} />
      ))}
    </section>
  );
}
