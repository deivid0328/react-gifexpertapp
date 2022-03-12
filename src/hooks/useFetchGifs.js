import { useState, useEffect } from 'react'
import { getGift } from '../helpers/getGifs';

export const useFethGifs = ( category ) =>{
    const [state, setState] = useState({
        data: [],
        loading:true
    });

    useEffect ( () =>{
        getGift( category )
        .then( imgs => {
        
            setTimeout (()=> {
                setState({
                    data:imgs,
                    loading: false
                });
       
            },3000)
            
   
        })
    }, [category])

    // setTimeout ( () => {
    //     setState({
    //         data:[1,2,3,4,5,6],
    //         loading: false
    //     })
    // }, 3000 );

    return state;
}