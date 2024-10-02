import Title from '../components/Extras/BlogTitle'
import BlogDetailsCard from '../components/Extras/BlogDetailsCard'
import {data} from '../components/Extras/blogData'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getBlogById } from '../state/Blog/Action'

export default function Blog(){
    const params = useParams()
    const id = params.id
    console.log(id)
    const {blog} = useSelector(store=>store)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBlogById(id))
    },[id])

    console.log(blog)

    return(
        <div className='bg-primary_bright pb-10 pt-20'>
           <div className='bg-white m-5  md:m-10 border border-2 p-8 rounded-2xl shadow-md cursor-pointer pt-10'  >
            <p className='text-md md:text-2xl text-accent_red font-semibold'>{blog?.blog?.title}</p>
            <br />
            <div className=" border border-2 rounded-lg overflow-hidden  mt-4 mb-6">
                    <img src={blog?.blog?.thumbnail} alt="" className=' w-full'/>
                </div>
                <div
        className='text-sm md:text-lg font-medium'
        dangerouslySetInnerHTML={{ __html: blog?.blog?.content }}
      />
    
        </div>
   

        
        </div>
    )
}