import Section_1 from '../components/Home/intro'
import Section_2 from '../components/Home/services'
import Section_3 from '../components/Home/aboutUs'
import Section_4 from '../components/Home/statistics'
import Section_5 from '../components/Home/benefits'
import Section_6 from '../components/Home/ourFriends'
import Section_7 from '../components/Home/testimonials'
import Section_8 from '../components/Home/CTAsection'
export default function Home(){
    return(
        <div className=' bg-primary_bright'>
            <Section_1/>
            <Section_2/>
            <Section_3 />
            <Section_4/>
            <Section_5/>
            <Section_6/>
            <Section_7/>
            <Section_8/>
        </div>
    )
}