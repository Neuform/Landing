import Title from '../components/ContactUs/Title'
import ContactDetails from '../components/ContactUs/ContactDetails'
import ContactForm from '../components/ContactUs/ContactForm'
import Quote from '../components/ContactUs/Quote'

export default function ContactUs(){
    return(
        <div className='bg-primary_bright'>
            <Title/>
            <ContactDetails/>
            <ContactForm/>
            <Quote/>
        </div>
    )
}