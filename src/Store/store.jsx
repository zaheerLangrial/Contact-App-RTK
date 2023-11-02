import {configureStore} from '@reduxjs/toolkit'
import ContactSlice from './Slices/ContactSlice'
import EditContactSlice from './Slices/EditContactSlice'

const store = configureStore({
    reducer : {
        contacts : ContactSlice , 
        editContact : EditContactSlice
    }
})
export default store