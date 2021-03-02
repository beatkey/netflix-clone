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
            </Head>
            <Header/>
            <main>
                <Main />
            </main>
        </div>
    )
}

export default Index;
