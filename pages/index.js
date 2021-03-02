import Head from 'next/head'
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Netflix Clone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main>
                <Main/>
            </main>
        </div>
    )
}
