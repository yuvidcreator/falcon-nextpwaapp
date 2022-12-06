import React, { ReactNode } from "react"
import Footer from "./footer"
import NewFooter from "./Footer1"
import Header from "./header"
import MobileBottomNav from "./MobileBottomNav"


interface Props {
    children: ReactNode
    // any props that come into the component
}


const Layout = ({children, ...props}: Props) => {
    return (
        <>
            <Header />
                {children}
            {/* <Footer /> */}
            <NewFooter />
            <MobileBottomNav />
        </>
    )
}

export default Layout