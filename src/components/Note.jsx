import styled from 'styled-components'

const NoteStyled = styled.div`
    background: ${({color}) => `rgba(${color}, .3)`} ;
`

const Note = ({color = "93, 173, 226", children}) => {
    return (
        <NoteStyled color={color} className='p-4 rounded-xl mb-[20px]'>
            <span className='highlighted'>Nota:</span>  {children}
        </NoteStyled>
    )
}
export default Note