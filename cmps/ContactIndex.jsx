const { useState, useEffect, useRef } = React;
const { useSelector, useDispatch } = ReactRedux;
const { Link, NavLink } = ReactRouterDOM;
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js';
import { removeContactOptimistic } from '../store/actions/contact.actions.js';
import { loadContacts, saveContact } from '../store/actions/contact.actions.js';
export function ContantIndex() {
  const conts = useSelector((storeState) => storeState.contactModule.contacts);

  useEffect(() => {
    loadContacts().catch((err) => {
      console.log('err:', err);
      showErrorMsg('Cannot load cars');
    });
  }, []);
}

function onUpdateContact(contact) {
  const contactToSave = contact;
  saveContact(contactToSave)
    .then((savedContact) => {
      showSuccessMsg(`Contact added (id: ${savedContact._id})`);
    })
    .catch((err) => {
      console.log('Cannot update contact', err);
      showErrorMsg('Cannot update contact');
    });
}

function onRemoveContact(contactId) {
  removeContactOptimistic(contactId)
    .then(() => {
      showSuccessMsg('Contact removed');
    })
    .catch((err) => {
      console.log('Cannot remove contact', err);
      showErrorMsg('Cannot remove contact');
    });

  if (!conts) return <div>loading...</div>;
  return (
    <section>
      <ContactList
        contacts={conts}
        onUpdateContact={onUpdateContact}
        onRemoveContact={onRemoveContact}
      />
    </section>
  );
}
