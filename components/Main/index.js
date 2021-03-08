import React, {useState, useEffect} from "react";

import fetch from "isomorphic-unfetch";
import Slider from './slider'

const Index = () => {
    const [sliderDataPopular, setSliderDataPopular] = useState(null);
    const [sliderDataTopRated, setSliderDataTopRated] = useState(null);
    const [sliderDataNowPlaying, setsliderDataNowPlaying] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=36c96c73055653c1821b00447d2b2722&language=en-US");
            let data = await res.json();
            setSliderDataPopular(data)

            res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=36c96c73055653c1821b00447d2b2722&language=en-US");
            data = await res.json();
            setSliderDataTopRated(data)

            res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=36c96c73055653c1821b00447d2b2722&language=en-US");
            data = await res.json();
            setsliderDataNowPlaying(data)
        }

        fetchData()
    }, [])

    return (
        <div className="container-fluid mt-4">
            <div className="row mb-3">
                <div className="col">
                    <div className="Title1">
                        Popular
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <div className="Slider1">
                        <Slider sliderData={sliderDataPopular}/>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="Title1">
                        Top Rated
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <div className="Slider1">
                        <Slider sliderData={sliderDataTopRated}/>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="Title1">
                        Now Playing
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="Slider1">
                        <Slider sliderData={sliderDataNowPlaying}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
