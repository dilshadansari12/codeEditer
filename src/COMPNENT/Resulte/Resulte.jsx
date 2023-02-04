import { useContext, useEffect, useRef, useState } from "react";
import { Alldata } from "../../App";

const Resulte = () => {

    const datats = useContext(Alldata)
    const { html, css, js } = datats;
    const [sdset, editset] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const dark = useRef();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        sdset ? dark.current.style.backgroundColor="white" : dark.current.style.backgroundColor="black" 
      };


    useEffect(() => {
        const timeo = setTimeout(() => {
            editset(srcCode)
        }, 1 * 1000);

        return () => clearTimeout(timeo)

    }, [html, css, js])


    const srcCode = `
    
        <html>
             <body>${html}</body>
             <style>${css}</style>
             <script>${js}</script>
        </html>
    `


    return (
        <section className="w-screen min-h-full border"  style={{backgroundColor: darkMode ? '#333' : '#fff'}} >
            <span className="pl-2 bg-slate-600 pb-2 pr-2 pt-1" onClick={toggleDarkMode} style={{ fontSize: "28px" }}  >
                {darkMode ?
                    <i class="fa-solid fa-moon"></i>
                    :
                    <i class="fa-solid fa-sun"></i>
                }
            </span>


            <iframe
                srcDoc={sdset}
                tittle="Output"
                sandbox="allow-scripts allow-modals"
                frameBorder={0}
                width="100%"
                height="100%"
            />

        </section>
    )
}

export default Resulte;  