import Slider from './slider'

const Index = (props) => {
    return (
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col">
                    <div className="Title1">
                        Top Pick For you
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Slider/>
                </div>
            </div>
        </div>
    )
}

export default Index;
