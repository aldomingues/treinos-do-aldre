import { StyledHeader, LogoImage } from "./style"
import { useState, useEffect } from "react"
import pkg from "package.json"
import Image from "next/image"
// import { useWindowDimensions } from "@helpers/windowDimensions"


const Header = () => {
    const [src, setSrc] = useState<"header-text-responsive" | "header-text">("header-text")
    // console.log(pkg.version) // usar isso no footer
    return (
        <StyledHeader>  
            <LogoImage/>
        </StyledHeader>
    )
}

export default Header