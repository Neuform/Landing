import React from "react";
import "../../App.css";

// Import your local images here
import experienceImage from "../../assets/experience.png";
import supportImage from "../../assets/experience.png";
import researchImage from "../../assets/experience.png";
import teamImage from "../../assets/experience.png";
import deliveryImage from "../../assets/experience.png";
import designImage from "../../assets/experience.png";
import resultsImage from "../../assets/experience.png";
import approachImage from "../../assets/experience.png";

const BenefitCard = ({ number, title, content, image }) => (
    <figure className="shape-box shape-box_half">
        <img src={image} alt={title} />
        <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
        <figcaption>
            <div className="show-cont">
                <h3 className="card-no">{number}</h3>
                <h4 className="card-main-title">{title}</h4>
            </div>
            <p className="card-content">{content}</p>
        </figcaption>
        <span className="after"></span>
    </figure>
);

const BenefitSection = () => {
    const benefits = [
        {
            number: "01",
            title: "Experience",
            content:
                "With over two years of experience, Neuform consistently delivers high-quality results. Our extensive experience ensures we handle each project effectively, bringing expertise and reliability to every client we serve.",
            image: experienceImage,
        },
        {
            number: "02",
            title: "24/7 Support",
            content:
                "Neuform provides round-the-clock customer support to assist you whenever needed. Our team is always available to address your questions and ensure you receive prompt, reliable assistance.",
            image: supportImage,
        },
        {
            number: "03",
            title: "Market Research",
            content:
                "Neuform performs thorough market research to guide our strategies. This approach helps us understand your audience and craft effective solutions that connect with the right people.",
            image: researchImage,
        },
        {
            number: "04",
            title: "Expert Team",
            content:
                "Our expert team brings diverse skills and deep knowledge to every project. With a wealth of experience in digital marketing, web development, and app development, we deliver top-notch results tailored to your needs.",
            image: teamImage,
        },
        {
            number: "05",
            title: "Fast Delivery",
            content:
                "We understand the importance of timely results. Neuform works efficiently to deliver high-quality work on schedule, helping you meet your deadlines without compromising on quality.",
            image: deliveryImage,
        },
        {
            number: "06",
            title: "Creative Design",
            content:
                "Neuform creates unique and engaging designs that make your brand stand out. Our creative team ensures every project has a distinct look and feel that captures your audience's attention.",
            image: designImage,
        },
        {
            number: "07",
            title: "Proven Results",
            content:
                "Neuform consistently delivers results that speak for themselves. Our track record of successful projects and satisfied clients demonstrates our ability to drive meaningful outcomes and support your business growth.",
            image: resultsImage,
        },
        {
            number: "08",
            title: "Approach",
            content:
                "Neuform maintains a high standard of professionalism in all our interactions. We handle each project with care and precision, ensuring clear communication and a commitment to delivering quality results.",
            image: approachImage,
        },
    ];

    return (
        <section className="py-9 bg-primary_bright">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl decoration-4  font-bold mb-14 text-center animated-underline">
                    What Makes Us the Best <span className=" text-accent_red">?</span>
                </h2>
                <div className="box-wrapper flex flex-wrap justify-center">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </div>
            <style jsx>{`
                .animated-underline {
                    position: relative;
                    display: inline-block;
                }

                .animated-underline::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    transform: scaleX(0);
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #FF362E;
                    transform-origin: bottom right;
                    transition: transform 0.25s ease-out;
                }

                .animated-underline:hover::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                }

                .shape-box {
                    display: inline-block;
                    position: relative;
                    z-index: 1;
                    max-width: 500px;
                    height: 430px;
                    margin: 30px 10px;
                    box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.12);
                    overflow: hidden;
                    border-radius: 12px;
                }

                .shape-box_half {
                    overflow: hidden;
                    text-align: left;
                }

                .shape-box_half:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    transform: skewY(53.5deg);
                    transform-origin: top left;
                    transition: transform 0.4s;
                    background-color: #FFFFFF;
                    z-index: 1;
                }

                .shape-box > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .bg-black {
                    background-color: #000;
                }

                .shape-box_half figcaption {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    padding: 0 30px 30px;
                    transition: transform 0.4s;
                    transform: translateY(100%);
                    z-index: 3;
                }

                .shape-box_half figcaption .show-cont {
                    position: absolute;
                    bottom: calc(100% + 30px);
                    left: 30px;
                    right: 30px;
                    transition: bottom 0.4s;
                }

                .card-no {
                    font-size: 50px;
                    color: #FF362E;
                    margin: 10px 0;
                    font-weight:600;
                }

                .card-main-title {
                    margin-top: 8px;
                    font-weight: 700;
                    font-size: 24px;
                    text-transform: uppercase;
                    color: #292b2c;
                }

                .card-content {
                    color: #9f9f9f;
                    margin-top: 20px;
                    line-height: 22px;
                    font-size: 20px;
                }

                .shape-box_half > .after {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: #FFFFFF;
                    opacity: 0;
                    transition: opacity 0.4s;
                }

                .shape-box_half:hover:before {
                    transform: skewY(20deg);
                }

                .shape-box_half:hover figcaption {
                    transform: translateY(0);
                }

                .shape-box_half:hover figcaption .show-cont {
                    bottom: 100%;
                }
                   

                .shape-box_half:hover > .after {
                    opacity: 1;
                }

                @media (max-width: 768px) {
                    .shape-box {
                        width: 100%;
                        height: auto;
                        margin: 15px 0;
                    }

                    .card-no {
                        font-size: 28px;
                    }

                    .card-main-title {
                        font-size: 20px;
                    }

                    .card-content {
                        font-size: 16px;
                    }
                }

                @media (min-width: 769px) and (max-width: 1024px) {
                    .shape-box {
                        width: 45%;
                        height: auto;
                    }

                    .card-no {
                        font-size: 32px;
                    }

                    .card-main-title {
                        font-size: 22px;
                    }

                    .card-content {
                        font-size: 18px;
                    }
                }

                @media (min-width: 1025px) {
                    .shape-box {
                        width: 23.333%;
                    }
                }
            `}</style>
        </section>
    );
};

export default BenefitSection;
