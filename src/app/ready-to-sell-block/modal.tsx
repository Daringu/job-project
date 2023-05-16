import Image from "next/image";
import { useState } from "react";

export default function Modal({handleClose,src}:{handleClose:any,src:any}) {
    return (
        <div  onClick={handleClose} className={`modalWrapper modalActive` }>
            <div className="modalOverflow">
                <div style={{width:'600px',height:'400px'}} className="modalContent">
                    <img style={{width:'600px',height:'400px'}} alt="1" src={src.src}/>
                </div>
            </div>
        </div>
    )
}