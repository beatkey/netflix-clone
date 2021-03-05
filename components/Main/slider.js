import React, {useState, useEffect, useRef} from "react";
import fetch from "isomorphic-unfetch";

import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

import Slider from "react-slick";

// https://api.themoviedb.org/3/movie/popular?api_key=36c96c73055653c1821b00447d2b2722&language=en-US

const Index = () => {
    const [sliderData, setSliderData] = useState(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=36c96c73055653c1821b00447d2b2722&language=en-US");
            const data = await res.json();
            setSliderData(data)
        }

        fetchData()
    }, [])

    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 6,
        arrows: false,
        slidesToScroll: 3
    };

    return (
        <Slider {...settings}>
            {sliderData && sliderData.results.map((value, index) =>
                <div onMouseOver={() => videoRef.current.play()} onMouseLeave={() => videoRef.current.pause()}
                     className="Item" key={index}>
                    <div className="Content">
                        <div className="Video">
                            <video ref={videoRef}>
                                <source src="heisenberg.mp4" type="video/mp4"></source>
                            </video>
                        </div>
                        <div className="Image">
                            <img src={"https://image.tmdb.org/t/p/w500/" + value.backdrop_path} alt=""/>
                        </div>
                        <div className="Info">
                            <div className="Icons mb-2">
                                <div className="Icon">
                                    <i className="fa fa-play"></i>
                                </div>
                                <div className="Icon">
                                    <i className="fa fa-check"></i>
                                </div>
                                <div className="Icon">
                                    <i className="fa fa-thumbs-up"></i>
                                </div>
                                <div className="Icon">
                                    <i className="fa fa-thumbs-down"></i>
                                </div>
                                <div className="Icon ms-auto">
                                    <i className="fa fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="Details">
                                <div className="Title">
                                    {value.title}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Slider>
    )
}

export default Index;
