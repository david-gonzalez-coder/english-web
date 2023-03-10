const WebPresentation = ({title = "", description = "", link = "#"}) =>{
    return (
        <a href={link} target="_blank" className="rounded-md card-effect col-span-8 bg-[#FFFFFF] flex flex-col flex-wrap">
            <div className=" rounded-t-md p-1 px-4 flex bg-[#E7E7E7] justify-between items-center">
                <div className="flex ">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FE6167] mr-2"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FEC537] mr-2"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#22C832] mr-2"></div>
                </div>
                <span>{title}</span>
                <div></div>
            </div>
            <div className="p-2 md:p-6">{description}</div>
        </a>
    )
}

const ExternalResources = () => {
    return (
      <section className='content-container'>
        <article>
          <h1 className='title'>Rercursos Externos</h1>
          <p >
            En esta seccion te presentamos opciones y recursos externos a
            nuestro contenido que podrian serte de gran utilidad. Te
            compartimos paginas web, aplicaciones, canales de youtube y mas.
          </p>
        </article>
          
        <nav className="general-grid gap-8">
          <WebPresentation
            title='DeepL'
            link='https://www.deepl.com/en/translator'
            description={
              <p>
                Un poderoso traductor. DeepL es un servicio en línea de
                traducción automática que utiliza técnicas avanzadas de
                inteligencia artificial para traducir textos de un idioma a
                otro.
              </p>
            }
          />
          <WebPresentation
            title='Youglish'
            link='https://es.youglish.com/'
            description={
              <p>
                YouGlish es un servicio en línea que permite buscar y reproducir
                videos de YouTube que contienen una palabra o frase específica
                en un contexto real. La idea detrás de YouGlish es que los
                usuarios puedan escuchar cómo se pronuncia una palabra o frase
                en diferentes situaciones, lo que les ayuda a entender mejor su
                uso, pronunciación y contexto.
              </p>
            }
          />
          <WebPresentation
            title='Reverso'
            link='https://www.reverso.net/'
            description={
              <>
                <p>
                  Reverso es un servicio en línea que ofrece una variedad de
                  herramientas y recursos para ayudar a los usuarios a mejorar
                  su comprensión y uso de idiomas extranjeros.
                </p>
                <br />
                <p>
                  Las herramientas y recursos que ofrece Reverso incluyen un
                  diccionario en línea que permite buscar palabras y frases en
                  múltiples idiomas, un traductor automático que permite
                  traducir texto y voz de un idioma a otro, un conjugador de
                  verbos que proporciona las formas verbales en diferentes
                  tiempos y modos gramaticales, y un corrector ortográfico y
                  gramatical que ayuda a los usuarios a evitar errores comunes.
                </p>
                <br />
                <p>
                  Además de estas herramientas básicas, Reverso también ofrece
                  una serie de características avanzadas, como la capacidad de
                  buscar sinónimos y antónimos, escuchar la pronunciación de las
                  palabras en varios acentos, buscar expresiones idiomáticas y
                  frases comunes, y ver ejemplos de uso en contextos reales.
                </p>
              </>
            }
          />
        </nav>
      </section>
    )
}
export default ExternalResources