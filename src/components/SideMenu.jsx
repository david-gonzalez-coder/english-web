import styled from "styled-components"
import {COLORS} from "../constants"
import {AiFillHome, AiFillBook} from "react-icons/ai"
import {TbVocabulary} from "react-icons/tb"
import {MdWebAsset, MdWebStories} from "react-icons/md"
import { NavLink } from "react-router-dom"
const Menu = styled.header`
    grid-area: "side-menu" ;
    background: #fff;
    position:sticky;
    width:100% ;
    height:80px ;
    
    box-sizing: border-box ;
    padding: 1rem ;
    display: flex ;
    align-items:center ;
    justify-content:center ;

    nav{
        
        width:100% ;
        display: flex ;
        
        align-items:center ;
        justify-content: center ;
        a{
            margin-right:1.6rem;
            color: ${COLORS.link};
            font-size: 1.8rem ;
        }
        .active{
            color: ${COLORS.activeLink} ;
        }
    }
    @media (min-width: 640px){
        height:100vh ;
        width:100px ;
        position:fixed ;
        flex-direction: column ;
        justify-content: center;
        nav{
            justify-content: center;
            flex-direction:column ;
            a{
            margin: 0 ;
            margin-bottom:1.6rem;
            color: ${COLORS.link};
            font-size: 1.8rem ;
        }
        }
        
    }
`

const SideMenu = () => {
    return (
        <Menu >
            <nav>
                <NavLink to="/"><AiFillHome /></NavLink>
                <NavLink to="/lessons"><AiFillBook /></NavLink>
                <NavLink to="/vocabulary"><TbVocabulary /></NavLink>
                <NavLink to="/external-resources"><MdWebAsset /></NavLink>
            </nav>        
        </Menu>
    )
}
export default SideMenu