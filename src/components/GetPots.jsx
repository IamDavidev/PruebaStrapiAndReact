import React from 'react'
import {useQuery} from "@apollo/client";
import { GetPosts } from '../services/QueryPosts';

function ListBlogPosts() {
    const {data, error, loading} = useQuery(GetPosts)

    if(loading) return 'Loading...'
    if(error) return `Oops there has been an error: ${error}`
    if(data) console.log(data)
    return (
        <>
            <h1>
                List Blog Posts
            </h1>
        
            
        </>
    )

}

export default ListBlogPosts

