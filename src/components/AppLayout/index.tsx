import Head from 'next/head'
import Navbar from '../Navbar';


const AppLayout = ({ children }: { children: JSX.Element }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Food-Ecommerce</title>
                <meta name="description" content="Food-Ecommerce" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default AppLayout;