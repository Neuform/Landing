import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"


export default function BlogCard({blogData}){
    const navigate = useNavigate()

    return(
        <div className='bg-white m-2 md:m-4 border border-2 p-8 rounded-2xl shadow-md'>
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
            <Button className="mt-4" variant="contained" sx={{ backgroundColor: '#ff362e' }} onClick={() => navigate(`/blog/details/${blogData._id}`)}>Read More</Button>
        </div>
        </div>
    </div>
</div>

    )
}