import Slider from "react-slick";

const Index = (props) => {
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
            {props.sliderData ? props.sliderData.results.map((value, index) =>
                <div className="Item" key={index}>
                    <div className="ContentContainer">
                        <div className="Content">
                            <div className="Image">
                                <img src={"https://image.tmdb.org/t/p/w500/" + value.backdrop_path} alt=""/>
                                <div className="Video">
                                    <video onMouseOver={event => event.target.play()}
                                           onMouseOut={event => event.target.pause()}
                                           src="heisenberg.mp4"/>
                                </div>
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
                </div>
            ) : <div><img style={{width: 50}} src="/loading.svg" alt=""/></div>}
        </Slider>
    )
}

export default Index;
