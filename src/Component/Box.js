import React, { useState } from 'react'

let BoxItems =
    [
        {
            id: '1',
            heading: ' AICAF 11th Annual Powwow',
            image: '/Asset/box_img/img1.jpg',
            text: 'Minneapolis, MN Non-Profit and Charity',
            link: '#',
            button: 'DONATE'
        },
        {
            id: '2',
            heading: ' AICAF 11th Annual Powwow',
            image: '/Asset/box_img/img1.jpg',
            text: 'Minneapolis, MN Non-Profit and Charity',
            link: '#',
            button: 'DONATE'
        },
        {
            id: '3',
            heading: ' AICAF 11th Annual Powwow',
            image: '/Asset/box_img/img1.jpg',
            text: 'Minneapolis, MN Non-Profit and Charity',
            link: '#',
            button: 'DONATE'

        },

    ]







const Box = () => {
    const [box, setBox] = useState(BoxItems);
    const[val , setVal] = useState(0,100);
    return (
        <>
            <div className='md:grid md:grid-cols-2 md:justify-items-center md:items-center text-center '>
                <div>
                    <h1 className='font-bold text-6xl text-fuchsia-500 '>Trending Campaigns</h1>
                </div>
                <div className=' rounded-full h-fit w-fit flex  border border-gray-400 content-center p-2 mt-6 '>
                    <input type='search' alt='' className='rounded outline-none outline  ' placeholder='Search for a Campaign' />
                    <div className=' bg-green-600 rounded-full h-fit w-fit p-2 ml-1'><ion-icon name="play-outline"></ion-icon></div>
                </div>

            </div>

            {
                BoxItems.map((item) => {
                    const { id, heading, image, text, button } = item;
                    return (
                        <>
                            <div className=' md:inline-grid md:mt-6 md:h-96 md:w-96  h-full w-full  lg:w-[430px] lg:m-1 ' key={id} >
                                <div className=' m-4 h-80 sm:h-96 sm:m-4  grid  justify-items-center items-center border md:h-auto md:w-auto lg:h-full lg:w-full lg:m-2   border-black rounded-lg'>
                                    <div className='grid grid-cols-2'>
                                        <div className='h-32 w-24 grid text-center items-center text-2xl font-extrabold text-gray-700'>{item.heading}</div>
                                        <div><img src={item.image} className='h-48 w-48 rounded-lg' /></div>
                                    </div>
                                    <div><input type='range' min ="0" max="100" className=' w-72'/></div>
                                    <div>Minneapolis, MN
                                        Non-Profit and Charity</div>
                                    <a href='#' className='h-full w-full grid justify-items-center  items-center'><button className='   px-4 rounded-lg bg-green-600 h-8 w-80 hover:bg-indigo-700'>{item.button}</button></a>
                                </div>
                            </div>
                        </>
                    )
                })
            }





        </>
    )
}

export default Box