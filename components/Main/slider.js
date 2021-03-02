import AwesomeSlider from "react-awesome-slider";

// This gets called on every request
export function getServerSideProps() {
    console.log("started")
    // Fetch data from external API
    const res = fetch('https://api.themoviedb.org/3/movie/popular?api_key=36c96c73055653c1821b00447d2b2722&language=en-US')
    const data = res.json()

    // Pass data to the page via props
    return {props: {data}}
}

const Index = ({posts}) => {
    console.log("cc", posts)
    return (
        <AwesomeSlider>
            <div>1</div>
        </AwesomeSlider>
    )
}


export default Index;
