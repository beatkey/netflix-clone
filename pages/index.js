import Head from 'next/head'
import Header from '../components/Header';
import Main from '../components/Main';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
    return (
        <div>
            <Head>
                <title>Netflix Clone</title>
                <link rel="icon" href="/favicon.ico"/>

                <link rel="stylesheet" type="text/css" charSet="UTF-8"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            </Head>
            <Header/>
            <main>
                <Main sliderData={props.sliderData}/>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=36c96c73055653c1821b00447d2b2722&language=en-US");
    let data = await res.json();

    res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=36c96c73055653c1821b00447d2b2722&language=en-US");
    let data2 = await res.json();

    res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=36c96c73055653c1821b00447d2b2722&language=en-US");
    let data3 = await res.json();

    return {
        props: {
            sliderData: {
                sliderDataPopular: data,
                sliderDataTopRated: data2,
                sliderDataNowPlaying: data3,
            }
        }
    }
}

export default Index;
