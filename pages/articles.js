import Head from "next/head";
import Header from '../components/Header';


const Index = () => {
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

                <title>Articles</title>

                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header />

            Articles
        </div>
    )
}

export default Index;
