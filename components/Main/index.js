import React, {useState, useEffect} from "react";

import Slider from './slider'

const Main = (props) => {
    useEffect(() => {
        console.log(props.sliderData)
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
                        <Slider sliderData={props.sliderData.sliderDataPopular}/>
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
                        <Slider sliderData={props.sliderData.sliderDataTopRated}/>
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
                        <Slider sliderData={props.sliderData.sliderDataNowPlaying}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
