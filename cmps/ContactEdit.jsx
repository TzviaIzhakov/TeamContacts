const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { contactService } from "../services/contact.service.js"
import { showErrorMsg } from "../services/event-bus.service.js"
import { saveContact } from "../store/actions/contact.actions.js"



export function ContactEdit() {
    const [contact, setContact] = useState(null)
    const { contactId } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        loadcontact()
    }, [contactId])

    function loadcontact() {
        contactService.getById(contactId)
            .then((contact) => setContact(contact))
            .catch((err) => {
                console.log('Had issues in contact details', err)
                showErrorMsg('Cannot load contact')
                navigate('/contact')
            })
    }

    function onUpdateContact() {
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
    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        setContact(prevContact => ({ ...prevContact, [field]: value }))
    }


    const { firstName, lastName, email, phone, desc } = contact

    if (!contact) return <div> loading</div>

    return (
        <section>
            <form onSubmit={onUpdateContact}>
                <input onChange={handleChange} value={firstName} type="text" name="firstName" id="firstName" />
                <input onChange={handleChange} value={lastName} type="text" name="lastName" id="lastName" />
                <input onChange={handleChange} value={email} type="text" name="email" id="email" />
                <input onChange={handleChange} value={phone} type="text" name="phone" id="phone" />
                <input onChange={handleChange} value={desc} type="text" name="desc" id="desc" />
                <button>submit</button>
            </form>

        </section>

    )

}