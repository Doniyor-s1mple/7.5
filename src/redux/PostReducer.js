import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "./Actions";

const slice = createSlice({
    name: 'PostReducer',
    initialState: {
        posts: [
            { id: 1, title: 'adawfda', body: 'adfwafa' },
            { id: 2, title: 'baedavf', body: 'aegbva' },
        ]
    },
    reducers: {
        getFromResponse: (state, actions) => {
            state.posts = actions.payload
        },
        PostSaved: (state, action) => {
            state.posts.unshift(action.payload)
        },
        postEdit: (state, action) => {
            state.posts.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                    item.body = action.payload.body
                }
            })
        },
        postDel: (state, action) => {
            state.posts.splice(action.payload, 1)
        }
    }
})

export const getPosts = () => apiCall({
    url: '/posts',
    method: 'get',
    onSuccess: getFromResponse.type
})

export const savePosts = (data) => apiCall({
    url: '/posts',
    method: 'post',
    data,
    onSuccess: PostSaved.type
})

export const editPosts = (data) => apiCall({
    url: '/posts/' + data.id,
    method: 'put',
    data,
    onSuccess: postEdit.type
})


export const DeletePosts = (data) => apiCall({
    url: '/posts/' + data.id,
    method: 'delete',
    data,
    onSuccess: postDel.type
})





export const { getFromResponse, PostSaved, postEdit, postDel } = slice.actions
export default slice.reducer