import styled from 'styled-components'

const NotFound = styled.section`
    grid-area: "content" ;
    min-height:100vh ;
    padding: 1rem ;
`

const NotFoundPage = () => {
    return (
        <NotFound>
            Not found Page
        </NotFound>
    )
}
export default NotFoundPage