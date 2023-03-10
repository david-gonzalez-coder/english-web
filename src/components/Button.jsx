import styled from 'styled-components'


const subtypes = {
    info: "#85C1E9",
    danger: "#F1948A",
    warning: "#F8C471"
}
const Btn = styled.button`
    ${({rounded})=> rounded ? "border-radius: 200px" : ""} ;
    ${({type, subtype})=>{

        return `color: #fff; background: ${subtypes[subtype]};`
    }}

`
const Button = ({type = "smooth", subtype = "info", color = "", bg= "", rounded, children}) => {
    return (
        <Btn className='p-2 px-4 rounded' rounded={rounded} subtype={subtype}>
            {children}
        </Btn>
    )
}
export default Button