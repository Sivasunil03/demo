import React, { useState } from 'react'

function Chef(props) {

    const req = ["Water","Spices","Oil"];
    const [visible,setVisible] = useState(false);

    const finishOrder = () =>{
        setVisible(true);
    }

  return (
    <div >
        {!visible ?
        <>
        <div className='flex items-center justify-center'>
            <p className='text-3xl font-bold'>
                Chef is Cooking Something Delicious...
            </p>
        </div>
        <div className='flex items-center justify-center mt-5'>
            <p className='mr-3 border-2 rounded-md px-2'>
                Idly x {props.idly}
            </p>
            <p className='mr-3 ml-3 border-2 rounded-md px-2'>
                Pongal x {props.pongal}
            </p>
            <p className='ml-3 border-2 rounded-md px-2'>
                Chappathi x {props.chappathi}
            </p>
        </div>
        <div className='text-center mt-10 text-2xl'>
            <h2 className='text-black-400'>
                Ingredients Required
                </h2>
                {req.map((item) => {
                    return(
                        <ul className='flex items-center justify-center'>
                            <li className='font-semibold text-xl'>
                                {item}
                            </li>
                        </ul>
                    )
                })}
           
        </div>
        <div className='flex items-center justify-center mt-5'>
        <button className='border-2 rounded-md
        px-3 py-2 bg-green-400 hover:bg-green-800
        text-white font-semibold' onClick={finishOrder}>Finish Order</button>
        </div>
        </>
        :
        <div className='flex items-center justify-center text-5xl font-semibold text-green-400'>
            <p>
                Waiter is Ready to Deliver Your Order
            </p>
        </div>
        }
    </div>
  )
}

export default Chef