import { Outlet } from "react-router-dom"
import styled from 'styled-components'
import SideMenu from "./SideMenu"

const LayoutStyled = styled.div`
    width:100% ;
    min-height:100vh ;
    display: grid ;
    grid-template-columns: 1fr ;
    grid-template-areas: "side-menu" "content" ;
    @media (min-width: 640px){
        grid-template-columns: 100px 1fr ;
        grid-template-areas: "side-menu content" ;
    }
`
const Layout = () => {
    return (
        <LayoutStyled>
            <SideMenu />
            <Outlet />
        </LayoutStyled>
    )
}
export default Layout