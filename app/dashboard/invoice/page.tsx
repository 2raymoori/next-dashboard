"use client"
import {usePathname} from "next/navigation";

const Invoice = ()=>{
    return (
        <div>
            {usePathname()}
            <h1>This is the Invoice Section</h1>
        </div>
    )
}

export default Invoice;
