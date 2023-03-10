import { useState } from "react"
import hangmanSprite from "../assets/images/hangman"
import styled from 'styled-components'
const abc = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"
]

const Btn = ({children, ...rest}) => {
    return (
        <button className="hover:font-bold" {...rest}>
            {children}
        </button>
    )
}
const Box = styled.span`
    
`

const Hangman = ({words}) => {
    const [word, setWord] = useState(0)
    const [errors, setErrors] = useState(0)
    const [letter, setLetter] = useState("")

    const handleBtn = (e) => {
        
        console.log(e.target.value)
    }

    return (
        <div className="flex-col md:flex-row flex rounded-lg p-4 neo gap-8 ">
            <div className="w-full md:w-2/3 flex flex-col justify-between gap-4">
                <p>{words[word][1]}</p>
                <span className="flex justify-center ">{
                        words[word][0].split(" ").map(singleWord => {
                            let boxes = []
                            for(let letter of singleWord){
                                boxes.push(<Box className="border-b w-4 m-2 border-[#141414]"></Box>)
                            }
                            return (
                                <>
                                    {/* <Box className="border-b w-4 m-2 border-[#141414]"></Box>
                                    <Box className="border-b w-4 m-2 border-[#141414]"></Box> */}
                                    {boxes}
                                    <Box className=" w-4 m-2"></Box>
                                </>
                            )
                            
                            
                        })
                    }
                </span>
                <div className="grid grid-cols-10 gap-2 ">
                    {abc.map(letter=>{
                        return(
                            <Btn key={letter} onClick={(e)=>handleBtn(e)} value={letter}>{letter}</Btn>
                        )
                    })}
                </div>
                
            </div>
            <div  className="w-full md:w-1/3 rounded-lg flex items-center flex-col">
                <img src={hangmanSprite[errors]} alt="hangman game" className="w-full rounded-lg" />
                <button className="border rounded-full p-2 px-9 w-full border-[#C1C3C7]">Siguiente</button>
            </div>
        </div>
    )
}
export default Hangman

