import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { getPosts, savePosts, editPosts, DeletePosts } from '../redux/PostReducer'
import PostsModal from './PostsModal'

const Posts = ({ getPosts, savePosts, editPosts, DeletePosts }) => {

    const posts = useSelector(state => state.PostReducer.posts)
    const [Active, setActive] = useState(false)
    const [currentItem, setCurrentItem] = useState('')

    const Toggle = () => {
        setActive(prev => !prev)
    }

    useEffect(() => {
        getPosts()
    }, [])


    var SubmitForm = (event, values) => {
        if (currentItem) {
            editPosts({ ...values, id: currentItem.id })
        } else {
            savePosts(values)
        }
        Toggle()
    }

    var HandleEdit = (item) => {
        setActive(true)
        setCurrentItem(item)
    }

    var del = (index) => {
        DeletePosts(index)
    }

    return (
        <div className="container">
            <button className='btn btn-outline-light' onClick={Toggle}>+add</button>
            <div className='row my-3'>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((item, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td >
                                        <div className="d-flex">
                                            <button className='btn btn-sm btn-outline-info' onClick={() => HandleEdit(item)}>edit</button>
                                            <button className='btn btn-sm btn-outline-danger mx-1' onClick={() => del(index)}>delete</button>
                                        </div>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
                <PostsModal Active={Active} Toggle={Toggle} SubmitForm={SubmitForm} currentItem={currentItem} />
            </div>
        </div>
    )
}

export default connect(null, { getPosts, savePosts, editPosts, DeletePosts })(Posts)