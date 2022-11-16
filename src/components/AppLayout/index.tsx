import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../Navbar';
const logo = "/images/logo.png";

const AppLayout: NextPage = ({ children }: { children: JSX.Element }) => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <Head>
                <title>Food-Ecommerce</title>
                <meta name="description" content="Food-Ecommerce" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar logo = {logo}/>
            {/* <main> */}
                {children}
            {/* </main> */}
        </div>
    )
}

export default AppLayout;