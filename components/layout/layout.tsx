import Footer from "./footer"
import Header from "./header"

const Layout = ({
    children
}) => {
    return (
        <>
        <Header/>
        <div className={`flex-shrink-0 h-full px-20 text-main-text`}>
        {children}
        </div>
        <Footer/>
        </>
    )
}

export default Layout