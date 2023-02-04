import { useContext } from "react";
import CodeEditer from "./CodeEditer";
import { Alldata } from "../App";

const AllCode = () => {
    const datasa = useContext(Alldata);
    const { html, edithtml, css, js, setcss, setjs } = datasa;

    return (
        < div className=" flex justify-around flex-col md:flex-row w-screen  align-middle "  >
            <CodeEditer name="HTML" symbole="/" color="red" value={html} onChange={edithtml} />
            <CodeEditer name="CSS" symbole="*" color="blue" value={css} onChange={setcss} />
            <CodeEditer name="JS" symbole="()" color="yellow" value={js} onChange={setjs} />
        </ div>
    )
}

export default AllCode;