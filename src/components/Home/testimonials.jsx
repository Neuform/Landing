import React, { useState, useEffect, useRef } from 'react';
import '../../App.css'
import { Star } from 'lucide-react';
import testi1 from '../../assets/avatar.png';
import testi2 from '../../assets/avatar_2.webp';
import testi3 from '../../assets/avatar_3.png';
import testi4 from '../../assets/testi4.png';
import testi5 from '../../assets/testi5.png';
import testi6 from '../../assets/testi6.png';
import testi7 from '../../assets/testi7.png';
import testi8 from '../../assets/testi8.png';
import testi9 from '../../assets/testi9.png';
import testi10 from '../../assets/testi10.png';


const testimonials = [
    { name: 'Harsh', text: 'Neuform delivered excellent results in less time than expected. Their efficiency and expertise are unmatched.', img: testi1, rating: 5 },
    { name: 'Pratham', text: "I've experienced good working relationships with Neuform. Their team is professional and always ready to help.", img: testi2, rating: 4 },
    { name: 'Sarah', text: "My business grew online very fast with Neuform's help. They know how to drive growth.", img: testi3, rating: 5 },
    { name: 'Jeet', text: 'With Neuform, I have more sales through Instagram compared to offline. Their social media management is top-notch.', img: testi4, rating: 5 },
    { name: 'Parag', text: 'Neuform offers great customer care. They are always attentive and responsive to my needs.', img: testi5, rating: 4 },
    { name: 'Krishna', text: 'I love to work with Neuform. Their team is dedicated, and the results speak for themselves.', img: testi6, rating: 5 },
    { name: 'Laura ', text: 'Neuform made my website in the shortest time compared to others. Their speed and quality are impressive.', img: testi7, rating: 5 },
    { name: 'Jay', text: 'Their good maintenance service keeps my website running smoothly. I can always count on Neuform.', img: testi8, rating: 5 },
    { name: 'Henry', text: 'I saw good results in less time with Neuform. They truly understand the digital landscape.', img: testi9, rating: 5 },
    { name: 'Rohit', text: 'Neuform provides good working solutions that are both innovative and effective.', img: testi10, rating: 4 },
];

const StarRating = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={16}
                    fill={i < rating ? "#FFD700" : "none"}
                    color={i < rating ? "#FFD700" : "#D3D3D3"}
                />
            ))}
        </div>
    );
};

const TestimonialCard = ({ testimonial, index, currentIndex, totalCards }) => {
    const position = (index - currentIndex + totalCards) % totalCards;

    let cardClass = "transition-all duration-300 rounded-lg p-4 mb-4 flex flex-col items-start space-y-2 text-black";
    if (position === 1) {
        cardClass += " transform scale-100 opacity-100 z-20 border-2 bg-white text-black shadow-md";
    } else if (position === 0 || position === 2) {
        cardClass += " transform scale-90 opacity-70 z-10 bg-white";
    } else {
        cardClass += " transform scale-80 opacity-50";
    }

    return (
        <div className={cardClass}>
            <div className="flex items-center space-x-4 w-full">
                <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-white" />
                <div className="text-black">
                    <h4 className={`font-bold ${position === 1 ? 'text-lg' : 'text-base'}`}>{testimonial.name}</h4>
                    <StarRating rating={testimonial.rating} />
                </div>
            </div>
            <p className={`text-black ${position === 1 ? 'text-base' : 'text-sm'}`}>{testimonial.text}</p>
        </div>
    );
};

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollPosition = container.scrollTop;
            const cardHeight = container.clientHeight / 3;
            const newIndex = Math.round(scrollPosition / cardHeight);
            setCurrentIndex(newIndex);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            const container = containerRef.current;
            const cardHeight = container.clientHeight / 3;
            container.scrollTo({
                top: (currentIndex + 1) * cardHeight,
                behavior: 'smooth',
            });

            if (currentIndex === repeatedTestimonials.length - 1) {
                setTimeout(() => {
                    container.scrollTo({ top: 0, behavior: 'smooth' });
                }, 500);
            }
        }, 6000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

    return (
        <div className="bg-primary_bright min-h-screen-80 flex items-center justify-center p-4 pt-16">
            <div className="max-w-8xl w-full flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
                <div className="md:w-1/2 text-black relative p-8">
                    <div className="absolute inset-0"></div>
                    {/* Add the circles here */}
                    <div className="absolute bottom-4 left-8 flex">
                        <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-4 h-4 rounded-full bg-black mr-2"></div>
                        <div className="w-4 h-4 rounded-full bg-white border border-black"></div>
                    </div>
                    <h2 className="text-5xl font-bold mb-4 relative z-10 text-accent_red mt-2">What Our Customers Say</h2>
                    <p className="mb-6 text-2xl relative z-10 font-semibold">
                        See how Neuform has helped businesses grow and succeed in the digital landscape.
                    </p>
                </div>
                <div
                    ref={containerRef}
                    className="md:w-1/2 h-[calc(100vh-16rem)] overflow-y-scroll mt-6 md:mt-0 pr-4 snap-y snap-mandatory"
                    style={{
                        scrollSnapType: 'y mandatory',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <style jsx>{`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    {repeatedTestimonials.map((testimonial, index) => (
                        <div key={index} className="h-1/3 font-axiforma snap-start flex items-center">
                            <TestimonialCard
                                testimonial={testimonial}
                                index={index}
                                currentIndex={currentIndex}
                                totalCards={testimonials.length}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;