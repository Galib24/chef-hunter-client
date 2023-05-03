import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import { useLoaderData, useParams } from 'react-router-dom';

const MoreInfo = () => {
    const {id} = useParams();
    // console.log(id);
    const INFO = useLoaderData()
    console.log(INFO);
    const [MoreInfoDetails,setMoreInfoDetails]= useState({})
    useEffect(()=>{
        if(INFO){
            const DetailsData = INFO.find(dt=>dt.id == id)
           console.log(DetailsData)
        }
    }, []);
    // const {id} = MoreInfoDetails;
    // console.log(MoreInfoDetails);
    return (
        <div>
            <Header></Header>
            <h1>this is more info</h1>

            
        </div>
    );
};

export default MoreInfo;