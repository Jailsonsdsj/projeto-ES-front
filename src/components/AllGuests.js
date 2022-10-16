import React, { useState, useEffect} from 'react'
import { getAllGuests } from '../api/user';

const AllGuests = () => {
    const [ guestList, setGuestList ] = useState()

    useEffect(()=>{
        (async ()=>{
            const response = await getAllGuests();  
            // setGuestList(response.data.data);
            console.log(response)
        })();
      }, []); 


  return (
    <div>AllGuests</div>
  )
}

export default AllGuests