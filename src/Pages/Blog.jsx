import Title from '../components/Extras/BlogTitle'
import BlogCard from '../components/Extras/BlogCard'

import {data} from '../components/Extras/blogData'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllBlogs } from '../state/Blog/Action'


export default function Blog(){

    const dispatch = useDispatch()
    const {blog} = useSelector(store=>store)
   useEffect(()=>{
    dispatch(getAllBlogs());
   },[]) 
//    console.log(blog)
    return(
        <div className='bg-primary_bright pb-10'>
        <Title/>

{
    blog?.blogs.map((item)=>{
        return (<BlogCard blogData={item} />)

    })
}
        
        </div>
    )
}