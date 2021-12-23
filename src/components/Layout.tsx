import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (<div className="w-screen h-screen">
        <Head>
            <title>Abir Pal - Developer, Writer, Creator</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar />
        <main className="pl-4  md:pl-10 h-4/6 w-full border-2 border-rose-500">
            {children}
        </main>
        <Footer />
    </div>)
}

export default Layout;