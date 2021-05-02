import Head from "next/head";
import Header from '../components/Header';
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

const videoSrc = {
    type: "video",
    sources: [
        {
            src: "306208798",
            provider: "vimeo"
        }
    ]
};

const Player = (props) => {
    console.log(props)
    return (
        <div>
            <Head>
                <meta charSet="UTF-8"/>

                <meta property="og:title" content="articles"/>
                <meta property="og:description" content="desc"/>
                <meta property="og:keywords" content="key, words"/>

                <meta name="title" content="articles"/>
                <meta name="description" content="desc"/>
                <meta name="keywords" content="key, words"/>

                <title>Player</title>

                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <style>{`
              body {
                padding: 0;
              }
            `}</style>

            <div className="Player">
                <Plyr
                    source={videoSrc}
                />
            </div>
        </div>
    )
}

export default Player;
