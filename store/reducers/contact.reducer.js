import { contactService } from "../../services/contact.service.js"

export const SET_CONTACTS = 'SET_CONTACTS'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const ADD_CONTACT = 'ADD_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'




export const SET_FILTER_BY = 'SET_FILTER_BY'
export const SET_IS_LOADING = 'SET_IS_LOADING'

export const CONTACT_UNDO = 'CONTACT_UNDO'


const initialState = {
    contacts: [],

    // filterBy: contactService.getDefaultFilter(),
    isLoading: false
}

export function contactReducer(state = initialState, action = {}) {
    let contacts
    let lastcontacts
    switch (action.type) {
        // contacts
        case SET_CONTACTS:
            lastcontacts = [...action.contacts]
            return { ...state, contacts: action.contacts, lastcontacts }

        case REMOVE_CONTACT:
            lastcontacts = [...state.contacts]
            contacts = state.contacts.filter(contact => contact._id !== action.contactId)
            return { ...state, contacts, lastcontacts }

        case ADD_CONTACT:
            contacts = [...state.contacts, action.contact]
            return { ...state, contacts }

        case UPDATE_CONTACT:
            contacts = state.contacts.map(contact => contact._id === action.contact._id ? action.contact : contact)
            return { ...state, contacts }

        case CONTACT_UNDO:
            contacts = [...state.lastcontacts]
            return { ...state, contacts }


    

        case SET_FILTER_BY:
            return { ...state, filterBy: {...action.filterBy} }

        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }

        default:
            return state;
    }
}