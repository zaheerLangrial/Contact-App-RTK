import {createSlice} from '@reduxjs/toolkit'
import { data } from './data'

export const ContactSlice = createSlice({
    name: 'Contacts',
    initialState : data,
    reducers : {
        addContact (state , action) {
            state.push(action.payload)
        },
        editContact (state , action) {
            console.log(action.payload)
        },
        deleteContact (state , action){
            state.pop(action.payload , 1)
        }
    }
})
export default ContactSlice.reducer
export const {addContact , editContact , deleteContact} = ContactSlice.actions