import React, {useState, useEffect} from "react";
import AwesomeSlider from "react-awesome-slider";
import fetch from "isomorphic-unfetch";
// https://api.themoviedb.org/3/movie/popular?api_key=36c96c73055653c1821b00447d2b2722&language=en-US

const Index = () => {
    const [sliderData, setSliderData] = useState([]);

    useEffect(async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=36c96c73055653c1821b00447d2b2722&language=en-US");
        const data = await res.json();
        setSliderData(data)
    }, [])

    return (
        <AwesomeSlider>
            {
                console.log(sliderData)
            }
        </AwesomeSlider>
    )
}

export default Index;
