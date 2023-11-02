import {createSlice} from '@reduxjs/toolkit'

export const EditContactSlice = createSlice({
    name: 'Edit Contacts',
    initialState: [{
        id : '',
        email : '',
        name : '',
    }],
    reducers : {
        editContact (state , action) {
            state.push(action.payload)
            console.log(action.payload)
        }
    }
})
export default EditContactSlice.reducer
export const {editContact} = EditContactSlice.actions