import React, { useRef } from 'react';
import {useReactToPrint} from 'react-to-print';




const ReactPdf = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: ()=> componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: ()=>alert('print success')
    });

    return (
        <>
         <div className='d-flex justify-content-center gap-5 mt-4 '>
         <div ref={componentRef} style={{width: 'auto', height: window.innerHeight}} >
            <h1 className='text-center'>data of blog</h1>
            </div>  
            <button className='h-75 ' onClick={handlePrint}>Print this out</button>
         </div>
        </>
    );
};

export default ReactPdf;