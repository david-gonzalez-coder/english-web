import { Table, Note, Hangman, Button } from "../../../components"
const TABLE1 = {
    columns: ["Frecuencia", "Adverbio", "Ejemplo"],
    rows: [
        ["90%", "usually", "I usually have cereal for breakfast."],
        ["80%", "normally / generally", "I normally go to the gym."],
        ["70%", "often* / frequently", "I often surf the internet."],
        ["50%", "sometimes", "I sometimes forget my wife's birthday."],
        ["30%", "occasionally", "I occasionally eat junk food."],
        ["10%", "seldom", "I seldom read the newspaper."],
        ["5%", "hardly ever / rarely", "I hardly ever drink alcohol."],
        ["0%", "never", "I never swim in the sea."]
    ]
}

const TABLE2 = {
    columns: ["Sujeto + adverbio + verbo principal"],
    rows:[
        ["I always remember to do my homework."],
        ["He normally gets good marks in exams."]
    ]
}
const TABLE3 = {
    columns: ["Sujeto + To be + adverbio"],
    rows:[
        ["They are never pleased to see me."],
        ["She isn't usually bad tempered."]
    ]
}

const TABLE4 = {
    columns: ["Sujeto + auxiliar + adverbio + verbo principal"],
    rows:[
        ["She can sometimes beat me in a race."],
        ["I would hardly ever be unkind to someone."],
        ["They might never see each other again."],
        ["They could occasionally be heard laughing."] 
    ]
}
let words = [
    ["red apple", "What is the color of the apples?"],
]

const AdverbsOfFrequency = () => {
    return (
        <article className="content-container">
            <h1 className="title">Adverbios de frecuencia</h1>
            <article>
                <p>
                    Para describir la frecuencia con la que realizamos una actividad como comer, dormir o ir al Gimnasio en Ingles utilizamos 
                    <span className="highlighted"> adverbios de frecuencia </span>tales como: 
                </p>
                <Table content={TABLE1}/>
                <Note>
                    <p>Algunas personas pronuncian la "T" en "often", pero muchas otras no.</p>
                </Note>
                <p>
                También se conocen como adverbios de frecuencia <span className="highlighted">indefinida</span>, ya que la frecuencia exacta no está definida.
                </p>
            </article>
            
            <article>
                <h2 className="sub-title">La posición del adverbio en una oracion</h2>
                <p>Un adverbio de frecuencia va antes de un verbo principal (excepto con To Be).</p>
                <Table 
                    content={TABLE2}
                /> 
            </article>

            <article>
                <p>Un adverbio de frecuencia va después del verbo To be.</p>
                <Table 
                    content={TABLE3}
                /> 
            </article>
            <article>
                <p>Cuando utilizamos un verbo auxiliar (have, will, must, might, could, would, can, etc.), el adverbio se coloca entre el auxiliar y el verbo principal. Lo mismo ocurre con to be.</p>
                <Table 
                     content={TABLE4}
                />
            </article>
            <article>
                <p>También podemos utilizar los siguientes adverbios al principio de una frase:</p>
                <ul className="list-disc list-inside ml-4 mb-6">
                    <li>Usually</li>
                    <li>normally</li>
                    <li>often</li>
                    <li>frequently</li>
                    <li>sometimes</li>
                    <li>occasionally</li>
                </ul>
                
                <p>Pero no podemos utilizar los siguientes al principio de una frase:</p>
                <ul className="list-disc list-inside ml-4 mb-6">
                    <li>Always</li>
                    <li>seldom</li>
                    <li>rarely</li>
                    <li>hardly</li>
                    <li>ever</li>
                    <li>never</li>
                </ul>
                
                <p>Usamos hardly ever y never con verbos positivos, no negativos:</p>
                <ul className="list-disc list-inside ml-4 mb-6">
                    <li>She hardly ever comes to my parties.</li>
                    <li>They never say 'thank you'.</li>
                </ul>
                
                <p>Utilizamos ever en preguntas y enunciados negativos:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Have you ever been to New Zealand?</li>
                    <li>I haven't ever been to Switzerland. </li>
                </ul>
            </article>
            <article>
                <h2 className="sub-title">Adverbios de frecuencia definida</h2>
                <p>También podemos utilizar las siguientes expresiones cuando queramos ser más específicos sobre la frecuencia:</p>
                <ul className="list-disc list-inside ml-4 mb-6">
                    <li>every day</li>
                    <li>once a month</li>
                    <li>twice a year</li>
                    <li>four times a day</li>
                    <li>every other week</li>
                    <li>daily</li>
                    <li>monthly</li>
                </ul>
            </article>
            <article>
                <h2 className="sub-title">Actividades</h2>
                <Hangman words={words}/>
            </article>
            
            
        </article>
    )
}
export default AdverbsOfFrequency