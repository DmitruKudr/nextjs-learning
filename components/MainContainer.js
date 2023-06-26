import Head from "next/head";
import A from '../components/A'

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"nextjs" + keywords}></meta>
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text={'Main'}></A>
                <A href={'/users'} text={'Users'}></A>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: teal;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;