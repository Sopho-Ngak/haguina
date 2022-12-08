import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from "./slices/sidebar.slice";
const Store=configureStore({
    reducer:{
        sidebar:sidebarSlice,
    }
});
export default Store;