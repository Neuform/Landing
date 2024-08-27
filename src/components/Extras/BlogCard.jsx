export default function BlogCard({blog}){
    return(
        <div className='bg-white m-5 md:m-10 border border-2 p-8 rounded-2xl shadow-md ' >
            <p className='text-md md:text-xl text-accent_red font-semibold'>{blog.title}</p>
            <br />
            <p className='text-sm md:text-lg font-medium'>
            {blog.body}
            </p>
        </div>
    )
}