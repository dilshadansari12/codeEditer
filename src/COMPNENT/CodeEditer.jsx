import { useRef, useState } from 'react';
import { Controlled as ControledEditer } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../index.css"



const CodeEditer = ({ name, symbole, color, value, onChange }) => {

    const [spen, editspen] = useState(true);
    const change =useRef()

    const MyChange = (editor, data, value) => {
        onChange(value)
    }


    return (
        <div className=' md:w-1/3  border-r-2' style={{ background: "hsl(0deg 0% 2%)", height: "400px" }}  ref={change} >
            <div className=' flex justify-between items-center ' >
                <div className='w-20 h-12 ml-7 pl-2 flex items-center justify-arounds' style={{ background: "rgb(38 50 56)" }} >
                    <span className='pl-2 pr-2 pb-1 rounded-sm ' style={{ background: color }} >{symbole}</span>
                    <span>{name}</span>
                </div>

                <div>
                    <span className='p-1' style={{ background: "hsl(0deg 0% 2%)", color: "white" }} >
                        <i className="fa-solid fa-up-right-and-down-left-from-center" onClick={() => { spen ? editspen(false) : editspen(true)  
                        }}  ></i>
                    </span>
                </div>

            </div>
            <div >
                <ControledEditer
                    className='controlled-editor'
                    value={value}
                    onBeforeChange={MyChange}
                    options={{
                        mode: 'xml',
                        theme: 'material',
                        lineNumbers: true
                    }}
                />
            </div>
        </div>
    )
}

// className='w-full h-full ' style={{ background: "hsl(228deg 8% 12%)", color: "white" }}

export default CodeEditer;