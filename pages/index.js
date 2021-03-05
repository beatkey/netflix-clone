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
                <Main/>
            </main>
        </div>
    )
}

export default Index;
