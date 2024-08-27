import Title from '../components/AboutUs/Title'
import Section_1 from '../components/AboutUs/Mission'
import Section_2 from '../components/AboutUs/Vision'
import Section_3 from '../components/AboutUs/Values'
import Section_4 from '../components/AboutUs/Stats'

export default function AboutUS(){
    return(
        <div className=' bg-primary_bright'>
                <Title/>
                <Section_1/>
                <Section_2/>
                <Section_3/>
                <Section_4/>
        </div>
    )
}