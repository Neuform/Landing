import { useNavigate } from "react-router-dom"

export default function BlogCard({blog}){
    const navigate = useNavigate()
    return(
        <div className='bg-white m-5 md:m-10 border border-2 p-8 rounded-2xl shadow-md cursor-pointer' onClick={()=>navigate('/blog/details')} >
            <p className='text-md md:text-xl text-accent_red font-semibold'>{blog.title}</p>
            <br />
            <p className='text-sm md:text-lg font-medium'>
            {blog.body}
            </p>
        </div>
    )
}