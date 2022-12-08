import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle: false,
};

const sidebarSlice = createSlice({
    name: "sidebar-toggle",
    initialState,
    reducers: {
        handleToggle: (state) => {
            state.toggle = !state.toggle;
        },
    },
});
 export const {handleToggle}=sidebarSlice.actions;
export default sidebarSlice.reducer;
