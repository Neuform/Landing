import { Button } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser, logout } from "../state/Auth/Action"

import { useNavigate } from "react-router-dom"
import { deleteBlog, getUserBlogs } from "../state/Blog/Action"



const BlogAuthor = () =>{
    
    const dispatch = useDispatch()
    const jwt = localStorage.getItem('jwt')
    
    const {auth} = useSelector(store=>store)
    console.log(auth?.user_data)

    const userId = auth?.user_data?._id

    const navigate = useNavigate();
    
    useEffect(()=>{
        if(jwt){
     dispatch(getUser(jwt))
     
        }
    },[jwt,auth.jwt])

    const {blog} = useSelector(store=>store)

    useEffect(() => {
        dispatch(getUserBlogs(userId))
    }, [userId]);


    const handleLogout =()=>{
        dispatch(logout())
         // Redirect or refresh
         window.location.href = "/blog"; // Redirect to login page
    }

    
    const handleDelete = (id) => {
        dispatch(deleteBlog(id)).then(() => {
            // Refresh the blogs after deletion
            dispatch(getUserBlogs(userId));
        });
    };
    return(
        <>
        <div className="pt-16 pb-2 bg-primary_bright">
            <div className=" p-5 bg-white">
        <h1 className="text-xl md:text-6xl font-semibold  pr-4 pl-5" >Welcome, <span className="text-accent_red text-md md:text-4xl">{auth?.user_data?.username}</span></h1>
            
            </div>
        </div>
        <div className="p-4 md:p-12 pt-0 bg-primary_bright ">
        <div className="grid grid-cols-2">
        <div>

        <div className=" mt-10 "><h1 className="text-md md:text-4xl font-semibold mb-4">Blogging Dashboard</h1>
        <div className=" bg-white p-5 border rounded-lg inline-block mt-5 mr-4 w-[9rem] text-center hover:shadow-lg" >
            <p className="font-semibold text-8xl text-accent_red ">{blog?.blogs.length}</p>  
        <p className=" font-semibold">Blogs</p>
        </div>
        <div className=" bg-white p-5 border rounded-lg inline-block mt-5 mr-4 w-[9rem] text-center hover:shadow-lg cursor-pointer" onClick={()=>navigate('/blog')}>
        <img src="https://ik.imagekit.io/th3ofwc2g9/COMNET%20(27).png?updatedAt=1727530213955" className="ml-1 h-24 w-22" alt="" />          
        <p className=" font-semibold">See All</p>
        </div>
        <div className=" bg-white p-5 border rounded-lg inline-block mt-5 mr-4 w-[9rem] cursor-pointer hover:shadow-lg" onClick={()=>navigate(`/blog/author/create`)} >
            <img src="https://www.svgrepo.com/show/348549/add.svg" className="ml-3 h-20 w-20" alt="" />          
        <p className=" font-semibold ml-1 mt-4">Create New</p>
        </div>
        <div className=" bg-white p-5 border rounded-lg inline-block mt-5 w-[9rem] cursor-pointer hover:shadow-lg" onClick={handleLogout} >
            <img src="https://static.vecteezy.com/system/resources/previews/000/574/782/original/vector-logout-sign-icon.jpg" className=" h-20 w-20" alt="" />          
        <p className=" font-semibold mt-4 ml-4">Log Out</p>
        </div>
         </div>
         </div>

         <div className="hidden lg:block">
            <img src="https://ik.imagekit.io/th3ofwc2g9/COMNET%20(29).png?updatedAt=1727530987579" className="h-[20rem] w-[20rem] absolute right-40 " alt="" />
         </div>

         </div>   


        <div>
         <h1 className=" text-4xl font-semibold mt-10 mb-10">Your <span className="text-accent_red text-4xl">Blogs :</span></h1>
        
        {/* Blogs List  */}
         <div >
         <div>
            {blog?.blogs?.map((blogData)=>{
               return   <div className='bg-white m-2 md:m-4 border border-2 p-4  md:p-8 rounded-2xl shadow-md'>
               <p className='text-md md:text-xl text-accent_red font-semibold'>{blogData.title}</p>
               <div className="flex flex-col md:flex-row justify-between items-start mt-6 space-y-4 md:space-y-0 md:space-x-6">
                   <div className="overflow-hidden">
                       <img src={blogData.thumbnail} alt="" className="w-[18rem] h-[11rem] object-cover border border-2 rounded-lg" />
                   </div>
   
                   <div className="flex flex-col justify-between mt-4 md:mt-0 pb-10 w-full pl-0 md:pl-6 pr-0 md:pr-10">
                       <div className='text-sm md:text-lg font-medium'>
                           <div dangerouslySetInnerHTML={{ __html: blogData.content.slice(0, 350) + "....." }} />
                       </div>
                       {/* Added margin top to the button container instead of the button itself */}
                       <div className="mt-4">
                           <Button variant="contained" sx={{ backgroundColor: '#ff362e' }} onClick={()=>handleDelete(blogData._id)}>
                               Delete
                           </Button>
                       </div>
                       <p className="mt-4 text-gray-800 opacity-45">Created at : {blogData.createdAt.slice(0,10)}</p>
                   </div>
               </div>
           </div>
            })}
        </div>
         </div>

        </div>

        </div>
        </>
    )

}

export default BlogAuthor