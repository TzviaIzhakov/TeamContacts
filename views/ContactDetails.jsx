const { useEffect, useState } = React;
const { useParams, useNavigate, Link } = ReactRouterDOM;

import { contactService } from '../services/contact.service.js';
import { showErrorMsg } from '../services/event-bus.service.js';

export function ContactDetails() {
  const [contact, setContact] = useState(null);
  const { contactId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadContact();
  }, [contactId]);

  function loadContact() {
    // console.log('pp');
    contactService
      .getById(contactId)
      .then((contact) => {
        setContact(contact);
      })
      .catch((err) => {
        console.log('Had issues in contact details', err);
        showErrorMsg('Cannot load contact');
        navigate('/contact');
      });
  }

  // const { firstName, lastName, email, phone, desc } = contact;
  if (!contact) return <div>Loading...</div>;
  return (
    <section className="contact-details">
      <h1>
        name:{contact.firstName} {contact.lastName}
      </h1>
      <h5>email:{contact.email}</h5>
      <h5>phone: {contact.phone} </h5>
      <p>about:{contact.desc}</p>

      <Link to="/contact">Back</Link>
    </section>
  );
}
