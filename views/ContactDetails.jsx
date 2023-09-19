const { useEffect, useState } = React;
const { useParams, useNavigate, Link } = ReactRouterDOM;

import { contactService } from '../services/contact.service.js';
import { showErrorMsg } from '../services/event-bus.service.js';

export function ContactDetails() {
  const [contact, setContact] = useState(null);
  const { contactId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadcontact();
  }, [contactId]);

  function loadcontact() {
    contactService
      .getById(contactId)
      .then((contact) => setContact(contact))
      .catch((err) => {
        console.log('Had issues in contact details', err);
        showErrorMsg('Cannot load contact');
        navigate('/contact');
      });
  }
  const { firstName, lastName, email, phone, desc } = contact;
  if (!contact) return <div>Loading...</div>;
  return (
    <section className="contact-details">
      <h1>
        name:{firstName} {lastName}
      </h1>
      <h5>email:{email}</h5>
      <h6>phone: {phone} </h6>
      <p>about:{desc}</p>

      <Link to="/contact">Back</Link>
    </section>
  );
}
