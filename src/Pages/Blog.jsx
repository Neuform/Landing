import Title from '../components/Extras/BlogTitle'
import BlogCard from '../components/Extras/BlogCard'

const data = [
    {
        title:"Why Your Business Needs a Custom Mobile App in Today’s Market",
        body:"In an increasingly mobile-first world, having a custom mobile app is no longer a luxury—it's a necessity. For businesses looking to enhance customer engagement and streamline operations, a custom mobile app offers unparalleled benefits. Delve into the advantages of custom mobile apps, such as tailored user experiences that cater to specific customer needs and preferences. Discuss how apps can be designed to integrate seamlessly with other business systems, providing a unified platform for operations and analytics. Highlight the potential for push notifications to keep users engaged and informed about new products, services, and promotions. Additionally, emphasize the value of data collection through apps, enabling businesses to gain deeper insights into user behavior and preferences, which can drive more targeted marketing strategies."
    },
    {
        title:"Maximizing ROI: The Power of Digital Marketing in 2024",
        body:" Digital marketing is one of the most cost-effective ways to reach a large and targeted audience. However, with the ever-changing landscape of online marketing, it’s crucial to stay updated on the strategies that deliver the highest return on investment (ROI). Start by discussing the importance of data-driven marketing, where decisions are made based on analytics and user behavior data. Highlight the effectiveness of search engine optimization (SEO) and content marketing in driving organic traffic and establishing authority in your industry. Explore how email marketing, when done right, can provide one of the highest ROI of any digital marketing strategy, thanks to its personalized nature and direct reach. Dive into the role of social media marketing in building brand awareness and engaging with customers on platforms where they spend their time. Finally, mention the growing importance of video marketing and how it can captivate audiences and convey messages more effectively than text or static images."
    },
]

export default function Blog(){
    return(
        <div className='bg-primary_bright pb-10'>
        <Title/>

{
    data.map((item)=>{
        return (<BlogCard blog={item} />)
    })
}
        
        </div>
    )
}