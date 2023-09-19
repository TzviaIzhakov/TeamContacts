import { utilService } from './util.service.js';
import { storageService } from './async-storage.service.js';

const CONTACT_KEY = 'contactDB';
_createContacts();

export const carService = {
  query,
  get,
  remove,
  save,
  getEmptyContact,
  //   getDefaultFilter,
};

function query(filterBy = {}) {
  return storageService.query(CONTACT_KEY).then((contacts) => {
    // if (filterBy.txt) {
    //   const regExp = new RegExp(filterBy.txt, 'i');
    //   cars = cars.filter((car) => regExp.test(car.vendor));
    // }

    // if (filterBy.minSpeed) {
    //   cars = cars.filter((car) => car.maxSpeed >= filterBy.minSpeed);
    // }

    return contacts;
  });
}

function get(contactId) {
  return storageService.get(CONTACT_KEY, contactId).then((contact) => {
    // contact = _setNextPrevCar_id(contact);
    return contact;
  });
}

function remove(contactId) {
  return storageService.remove(CONTACT_KEY, contactId);
}

function save(contact) {
  if (contact._id) {
    return storageService.put(CONTACT_KEY, contact);
  } else {
    return storageService.post(CONTACT_KEY, contact);
  }
}

function getEmptyContact(
  firstName = '',
  lastName = '',
  email = '',
  phone = '054',
  desc = ''
) {
  return { firstName, lastName, email, phone, desc };
}

// function getDefaultFilter() {
//   return { txt: '', minSpeed: '' };
// }

function _createContacts() {
  let contacts = utilService.loadFromStorage(CONTACT_KEY);
  if (!contacts || !contacts.length) {
    contacts = [];
    contacts.push(
      _createContact(
        'Tzvia',
        'Izhakov',
        'tzvia.izhakov@gmail.com',
        '0549875214',
        'pppp'
      )
    );
    contacts.push(
      _createContact(
        'Amir',
        'Shamia',
        'amir.shamia@gmail.com',
        '0549875235',
        'dusahduiu'
      )
    );
    contacts.push(
      _createContact(
        'Shoval',
        'Ben-Asuli',
        'shoval.ben@gmail.com',
        '0549875278',
        'duewrewr'
      )
    );
    utilService.saveToStorage(CONTACT_KEY, contacts);
  }
}

function _createContact(firstName, lastName, email, phone, desc) {
  const contact = getEmptyContact(firstName, lastName, email, phone, desc);
  contact._id = utilService.makeId();
  return contact;
}
