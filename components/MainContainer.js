import Head from "next/head";
import A from "./A";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'next/react test' + keywords}></meta>
            </Head>
            <div className="navbar">
                    <A href={'/'} text='Home'></A>
                    <A href={'/users'} text='Users'></A>          
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: grey;
                        padding: 15px;
                    }
                    
                `}
            </style>
        </>
    );
};

export default MainContainer;