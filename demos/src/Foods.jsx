import React, { useState } from 'react'
import Chef from './Chef';

function Foods() {

    const foodItem = [{name:"Idly",price:10},{name:"Pongal",price:20},{name:"Chappathi",price:30}];
    const[Idly,setIdly] = useState(0);
    const[Pongal,setPongal] = useState(0);
    const[Chappathi,setChappathi] = useState(0);
    const[order,setOrder] = useState(false);
    const[cost,setCost] = useState(0);

    const handleClick = (item) =>{
        if(item === 'Idly')
        {
            setIdly(prev=>prev+1);
            setCost(prev=>prev+10);
        }
        else if(item === 'Pongal')
        {
            setPongal(prev=>prev+1);
            setCost(prev=>prev+20);
        }
        else
        {
            setChappathi(prev=>prev+1);
            setCost(prev=>prev+30);
        }
   }

   const handleDelete = (item) =>{
    if(item === 'Idly')
    {
        setIdly(prev=>prev-1);
        setCost(prev=>prev-10);
    }
    else if(item === 'Pongal')
    {
        setPongal(prev=>prev-1);
        setCost(prev=>prev-20);
    }
    else
    {
        setChappathi(prev=>prev-1);
        setCost(prev=>prev-30);
    }
}

   const handleOrder = () =>{
    setOrder(true);
   }

  return (
    <>
    {!order ?
    <div>
        <div className='text-center'>
            <h1 className='text-4xl text-green-700'>
                ORDER FOOD
            </h1>
        </div>
    <div>
        {foodItem.map((item) => {
            return(
                <div className='flex items-center justify-center mt-4 p-4'>
                <h2 className='text-3xl font-semibold text-gray-800'>{item.name} -</h2>
                <h3 className='text-3xl font-bold text-blue-400'>${item.price}</h3>
                <button className='border-2 rounded-md
                                    bg-green-500 hover:bg-green-700
                                    text-white font-bold
                                    px-5 py-2 ml-5
                                    ' 
                    onClick={() => handleClick(item.name)}>Add</button>
                                    <button className='border-2 rounded-md
                                    bg-red-500 hover:bg-red-700
                                    text-white font-bold
                                    px-5 py-2 ml-5
                                    ' 
                    onClick={() => handleDelete(item.name)}>Delete</button>
            </div>
            )
        })}
    </div>
    <div className='flex items-center justify-center'>
        <button className='px-4 py-2 text-white
        bg-blue-700 hover:bg-blue-300
        font-semibold rounded-lg shadow-md 
        border-2 border-blue-300 ml-4 mt-10' onClick={handleOrder}>Order Food</button>
    </div>

    <div className='flex items-center justify-center mt-10'>
        <p className='text-2xl ml-6 mb-6'>
             <h2>
                Idly x {Idly}
             </h2>
             <h2>
                Chappathi x {Chappathi}
             </h2>
             <h2>
                Pongal x {Pongal}
             </h2>
        </p>
    </div>
        <p className='text-center text-3xl'>Total Cost - {cost}</p>
    </div>
        :
    <div>
        <Chef idly={Idly} pongal={Pongal} chappathi={Chappathi}/>
        </div>
} 
    </>
  )
}

export default Foods