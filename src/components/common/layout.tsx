import React, { ReactNode } from "react"
import Footer from "./footer"
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
            <Footer />
            <MobileBottomNav />
        </>
    )
}

export default Layout