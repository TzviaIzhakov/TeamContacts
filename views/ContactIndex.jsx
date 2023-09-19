const { useState, useEffect, useRef } = React;
const { useSelector, useDispatch } = ReactRedux;
const { Link, NavLink } = ReactRouterDOM;
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js';
import { removeContactOptimistic } from '../store/actions/contact.actions.js';
import { loadContacts, saveContact } from '../store/actions/contact.actions.js';
import { ContactList } from '../cmps/ContactList.jsx';

export function ContantIndex() {
  const conts = useSelector((storeState) => storeState.contactModule.contacts);

  useEffect(() => {
    loadContacts().catch((err) => {
      console.log('err:', err);
      showErrorMsg('Cannot load cars');
    });
  }, []);


  if (!conts) return <div>loading...</div>;
  return (
    <section>
      <h1>Contacts:</h1>
      <ContactList
        contacts={conts}
        onUpdateContact={onUpdateContact}
        onRemoveContact={onRemoveContact}
      />
    </section>
  );
}
