import { useState } from 'react'
import styled from 'styled-components'
const menuColors = [
    ["Red","Rojo"],
    ["Green","Verde"],
    ["Blue","Azul"],
    ["Magenta","Magenta"],
    ["Cyan","Cian"],
    ["Yellow","Amarillo"],
    ["Brown","Cafe"],
    ["Violet","Violeta"],
    ["Orange","Naranja"],
    ["White Gray Black","Blanco Gris Negro"]
    
    
 ]
const colors = {
    Red: [
        ["#FF0000", "rojo", "red"],
        ["#DC143C","carmesí", "crimson" ],
        ["#E34234", "bermellón","bermellón"],
        ["#FF2400","escarlata","scarlet",],
        ["#800000", "granate","garnet"],
        ["#960018", "carmín","carmine"],
        ["#960018", "amaranto","amaranth"],
    ],
    Green:  [  
        ["#00FF00", "verde", "green"],
        ["#7FFF00", "chartreuse", "chartreuse"],
        ["#4CBB17", "verde Kelly", "Kelly green"],
        ["#50C878", "esmeralda", "emerald"],
        ["#738678", "xanadu", "xanadu"],
        ["#00A86B", "jade", "jade"],
        ["#40826D", "verde veronés", "Veronese green"],
        ["#44944A", "arlequín", "harlequin"],
        ["#7BA05B", "espárrago", "asparagus"],
        ["#6B8E23", "verde oliva", "olive green"],
        ["#355E3B", "verde militar", "military green"],
        ["#ABE0B0", "verde celedón", "celadon green"]
  ],
    Blue: [
        ["#0000FF", "azul", "blue"],
        ["#0047AB", "azul cobalto", "cobalt blue"],
        ["#120A8F", "azul marino", "navy blue"],
        ["#014663", "azul petróleo", "petroleum blue"],
        ["#0000FA", "azur, azul francia", "azure, French blue"],
        ["#0131B4", "zafiro", "sapphire"],
        ["#4B0082", "índigo", "indigo"],
        ["#008080", "turquí", "teal"],
        ["#003153", "azul de Prusia", "Prussian blue"],
        ["#6050DC", "azul majorelle", "Majorelle blue"],
        ["#002FA7", "azul Klein", "Klein blue"],
        ["#B0C4DE", "azul acero claro", "light steel blue"]
    ],
    Magenta: [
        ["#FF00FF", "magenta", "magenta"],
        ["#FD3F92", "fucsia", "fuchsia"],
        ["#C54B8C", "morado", "purple"],
        ["#E0B0FF", "malva", "mauve"],
        ["#C8A2C8", "lila", "lilac"],
        ["#FEC3AC", "salmón", "salmon"],
        ["#E6E6FA", "lavanda", "lavender"],
        ["#FFC0CB", "rosa", "pink"]
    ],
    Cyan: [
        ["#00FFFF", "cian", "cyan"],
        ["#30D5C8", "turquesa", "turquoise"],
        ["#87CEFF", "celeste", "sky blue"],
        ["#9BC4E2", "cerúleo", "cerulean"],
        ["#7FFFD4", "aguamarina", "aquamarine"]
    ],
    Yellow: [
        ["#FFFF00", "amarillo", "yellow"],
        ["#FDE80F", "amarillo limón o lima", "lemon yellow or lime"],
        ["#FFD700", "oro, dorado", "gold"],
        ["#FFC005", "ámbar", "amber"],
        ["#E3A857", "amarillo indio, topacio", "indian yellow, topaz"],
        ["#FFBA00", "amarillo selectivo", "selective yellow"]
    ],
    Brown: [
        ["#964B00", "marrón", "brown"],
        ["#94812B", "caqui", "khaki"],
        ["#CC7722", "ocre", "ochre"],
        ["#B87333", "siena", "sienna"],
        ["#DA8A5F", "siena pálido", "pale sienna"],
        ["#800020", "borgoña", "burgundy"]
    ],
    Violet: [
        ["#8B00FF", "violeta", "violet"],
        ["#B57EDC", "lavanda floral", "floral lavender"],
        ["#9966CC", "amatista", "amethyst"],
        ["#660099", "púrpura", "purple"],
        ["#66023C", "púrpura de Tiro", "Tyrian purple"]
    ],
    Orange: [
        ["#FF7028", "naranja", "orange"],
        ["#FF7F50", "cara de luz", "coral"],
        ["#ED9121", "zanahoria", "carrot"],
        ["#FF8C69", "sésamo", "Sesame"],
        ["#FBCEB1", "albaricoque", "apricot"],
        ["#F5DEB3", "beis", "beige"],
        ["#FFC8A0", "durazno", "peach"]
    ],
    "White Gray Black": [
        ["#fff", "blanco", "white"],
        ["#FFFAFA", "nieve", "snow"],
        ["#FAFAFA", "nieve blanca", "white snow"],
        ["#FAF0E6", "lino", "linen"],
        ["#F5F5DC", "hueso", "bone"],
        ["#FFFDD0", "marfil", "ivory"],
        ["#C0C0C0", "plata", "silver"],
        ["#BAC4C8", "zinc", "zinc"],
        ["#808080", "gris", "gray"],
        ["#000000", "negro", "black"]
    ]
}


const Color = styled.div`
    background: ${({color}) => color ? color : "#ccc"} ;
`

const ColorPresentation = ({nameEs = "", nameEn = "", color = "", color2 = ""}) =>{
    if(!color2) color2 = color
    return (
        <div className=' rounded-xl  p-2 col-span-4 md:col-span-2 flex flex-col gap-2 text-base'>
            <div className='grow w-full rounded-xl  aspect-video flex'>
            <Color color={color} className='grow w-full rounded-l-xl' />
            <Color color={color2} className='grow w-full rounded-r-xl' />
    
            </div>
            
            <span className='px-3 text-center'>{nameEs} - {nameEn}</span>
        </div>
    )
}
const AdjectivesColors = () => {
    const [selected, setSelected] = useState("Red")
    return (
        <section className='content-container'>
            <h1 className='title'>Colores - Colors</h1>
            <article>
                <h2 className='sub-title'>Colores Basicos - Basic Colors</h2>

                <div className="general-grid md:gap-8">
                    <ColorPresentation  nameEs="Rojo" nameEn="Red" color="#FF2929" color2="#F02121"/>
                    <ColorPresentation  nameEs="Naranja" nameEn="Orange" color="#FF7A29" color2="#E76414"/>
                    <ColorPresentation  nameEs="Cafe" nameEn="Brown" color="#964B00" color2="#633200"/>
                    <ColorPresentation  nameEs="Amarillo" nameEn="Yellow" color="#FAD02E" color2="#EEC423"/>
                    <ColorPresentation  nameEs="Verde" nameEn="Green" color="#01AA00" color2="#049903"/>
                    <ColorPresentation  nameEs="Turquoise" nameEn="Turquesa" color="#35D4B3" color2="#29C5A5"/>
                    <ColorPresentation  nameEs="Azul" nameEn="Blue" color="#3B8AFF" color2="#2E7BEE"/>
                    <ColorPresentation  nameEs="Morado" nameEn="Purple" color="#991EF9" color2="#8710E3"/>
                    <ColorPresentation  nameEs="Rosa" nameEn="Pink" color="#FFC0CB" color2="#FE93A6"/>
                    <ColorPresentation  nameEs="Blanco" nameEn="White" color="#fff" color2="#fbfbfb"/>
                    <ColorPresentation  nameEs="Gris" nameEn="Gray" color="#B3BAC1" color2="#ACAFB2"/>
                    <ColorPresentation  nameEs="Negro" nameEn="Black" color="#212121" color2="#000"/>
                    <ColorPresentation  nameEs="Plateado" nameEn="Silver" color="#C0C0C0" color2="#AFAFAF"/>
                    <ColorPresentation  nameEs="Dorado" nameEn="Gold" color="#D4AF37" color2="#C5A22F"/>
                </div>
            </article>
            
            <article>
                <h2 className='sub-title'>Tonalidad de color - Color shade</h2>
                <p>
                    Si deseas especificar la tonaliad de un color puedes agregar 
                    <span className='highlighted'> Claro - Light </span>,
                    <span className='highlighted'> Oscuro - Dark </span> o
                    <span className='highlighted'> Brillante - Bright </span>
                    al comienzo del color. Por Ejemplo:
                </p>
              
                <div className="general-grid gap-8">
                    <ColorPresentation  nameEs="Marron claro" nameEn="Light brown" color="#E18F47"/>
                    <ColorPresentation  nameEs="Azul claro" nameEn="Light blue" color="#5DADE2"/>
                    <ColorPresentation  nameEs="Verde oscuro" nameEn="Dark green" color="#005E00"/>
                    <ColorPresentation  nameEs="Rojo oscuro" nameEn="Dark red" color="#C50000"/>
                    <ColorPresentation  nameEs="Naranja brillante" nameEn="Bright orange" color="orange"/>
                    <ColorPresentation  nameEs="Dorado brillante" nameEn="Bright gold" color="#F3C83D"/>
                </div>
            </article>
            
            <article>
                <h2 className='sub-title'>Colores Avanzados - Advanced colors</h2>
                <div>
                    {menuColors.map(color => {
                        
                        return(
                            <button
                                className='m-2 bg-[#EDEDEE] rounded-md text-sm p-2 px-4'
                                key={color[0]} 
                                onClick={()=>{setSelected(color[0])}}
                            >
                                {color[0]} - {color[1]} 
                            </button>
                        )
                    })}

                </div>
                <div className="general-grid gap-8">
                    {colors[selected].map((color)=>{
                        let es = color[1][0].toUpperCase() + color[1].slice(1) 
                        let en = color[2][0].toUpperCase() + color[2].slice(1)
                        return (
                            <ColorPresentation key={color[1]} color={color[0]} nameEs={es} nameEn={en} />
                        )
                    })}
                </div>
            </article>
            
        </section>
            
    )
}
export default AdjectivesColors