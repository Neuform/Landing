import Globe from '../Extras/Globe'
import Tagline from '../Extras/Tagline'

export default function Intro() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-primary_bright'>
            <div className="left p-4 pb-10 md:p-10">
                <p className='font-semibold font-roboto text-md text-3xl md:text-4xl lg:text-5xl mt-5  md:mt-10'>
                    Welcome to,
                </p>
                <p className='font-semibold font-roboto text-5xl md:text-6xl lg:text-8xl  mt-4 md:mt-12'>
                    NEUFORM
                </p>
                <p className='font-semibold font-roboto text-xl md:text-2xl lg:text-3xl mt-6 md:mt-4 mb-4 md:mb-4 text-gray-700'>
                    ONE STOP SOLUTION FOR
                </p>
                <p className='font-semibold font-roboto text-2xl md:text-4xl lg:text-6xl'></p>
                <Tagline />
            </div>
            <div className="right flex justify-center items-center">
                <Globe />
            </div>
        </div>
    )
}
