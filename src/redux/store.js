import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./PostReducer";
import apiCall from "./middleWare/api";

export default configureStore({
    reducer: {
        PostReducer
    },
    middleware: () => [
        apiCall
    ]
})