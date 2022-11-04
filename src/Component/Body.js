import React, { useState } from 'react';
import '../index.css'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


let Page = [
    {
        heading: 'MAKE MANAGING EVENTS A BREEZE',
        para: 'Built-in Event module. Create the event, customize the form, registration ticket types, add beneficiaries, sponsors, the whole 9 yards! Integrates with Eventbrite.',
        image: './Asset/page_img/fundly_embed_evets.jpg'
    },
    {
        heading: 'HEAT MAPS',
        para: 'Find out where your Donors are coming from. Target specific geographic areas based on Donor density. Embed the map on your site!',
        image: './Asset/page_img/fundly_forms.jpg'
    },
    {
        heading: 'CAUSE PAGES',
        para: 'Do you run multiple campaigns at the same time? Need a personalized domain? Need aggregate reporting across all your campaigns? Need customized look and feel?',
        image: './Asset/page_img/cause_page.jpg'
    },
    {
        heading: 'Giving Levels',
        para: 'Offer incentives to your donors by setting multiple donation levels and customize your perks.',
        image: './Asset/page_img/fundly_giving_levels.png'
    },

]
const Body = () => {
    const [item, setItem] = useState(Page);

    const SlideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 1300

    }

    const SlideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 1300

    }

    return (
        <>
            <div className=' img1 h-96 w-full grid grid-cols-1 justify-items-center items-center   font-bold' >
                <div >
                    <h1 className='  text-indigo-700 text-6xl text-center'>
                        A Little Care Can Change the World
                    </h1>
                    <div className='grid items-center justify-items-center m-8'>
                        <a href='#'><button className=' bg-indigo-700 text-2xl rounded-lg p-2  text-white border hover:bg-gray-700 hover:border-white'>START FUNDRAISER</button></a>
                    </div>
                    <div >
                        <h2 className='text-center text-indigo-700 text-2xl'>For Individuals and charities. No startup fees. No hidden fees.</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid text-center text-6xl font-bold text-gray-700 md:m-4 mt-4 shadow shadow-gray-800' >
                    <h1 >
                        Designed to Do Good
                    </h1>
                </div>

                <div className=' md:flex md:items-center '>
                    <MdChevronLeft onClick={SlideLeft} size={120} />
                    <div id='slider' className=' md:flex rounded-xl h-full  w-auto bg-gray-200  items-center  md:overflow-x-scroll   md:scroll-smooth  shadow-xl shadow-gray-800'  >
                        {
                            Page.map((item) => {
                                let { heading, image } = item;
                                return (
                                    <>
                                        <div className=' h md:inline-block md:h-full md:w-full  '>
                                            <div className='  md:flex   md:h-screen md:w-screen  text-center items-center justify-between  md:hover:scale-105 md:ease-in-out cursor-pointer md:duration-300 p-4 '>
                                                <div className=' shadow-md  shadow-gray-800  md:h-fit w-fit grid justify-items-center items-center md:ml-16'>
                                                    <h1 className=' text-gray-700 text-2xl font-bold h-fit w-fit mt-2 '>
                                                        {item.heading}
                                                    </h1>
                                                    <h2 className=' text-2xl  text-center'>
                                                        {item.para}
                                                    </h2>
                                                </div>
                                                <div className=' md: m-20 shadow-md shadow-gray-800 '>
                                                    <img src={item.image} className=' h-80 w-screen' />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })

                        }
                    </div>
                    <MdChevronRight onClick={SlideRight} size={120} />
                </div>
            </div>
        </>
    )
}

export default Body
































































































// import React, { useState } from 'react'
// import Button from './Button';

// let dishes = [
//     {
//         id: '1',
//         name: 'Cormaa',
//         image: 'Asset/Image/cormaa.jpg',
//         price: 'Price: 4$',
//         description: 'Best Dish Of Our Restaurent. Made By Special Respie. Hope You are Enjoyed. ',
//     },
//     {
//         id: '2',
//         name: 'Samosaa',
//         image: 'Asset/Image/maton.jpg',
//         price: 'Price: 4$',
//         description: 'Best Dish Of Our Restaurent. Made By Special Respie. Hope You are Enjoyed. ',
//     },
//     {
//         id: '3',
//         name: 'Beryani',
//         image: 'Asset/Image/salad.jpg',
//         price: 'Price: 4$',

//         description: 'Best Dish Of Our Restaurent. Made By Special Respie. Hope You are Enjoyed. ',
//     },
//     {
//         id: '4',
//         name: 'Meet',
//         image: 'Asset/Image/maton.jpg',
//         price: 'Price: 4$',
//         description: 'Best Dish Of Our Restaurent. Made By Special Respie. Hope You are Enjoyed. ',
//     },
//     {
//         id: '5',
//         name: 'Salad',
//         image: 'Asset/Image/cormaa.jpg',
//         price: 'Price: 4$',
//         description: 'Best Dish Of Our Restaurent. Made By Special Respie. Hope You are Enjoyed. ',
//     },
//     {
//         id: '5',
//         name: 'Salad',
//         image: 'Asset/Image/cormaa.jpg',
//         price: 'Price: 4$',
//         description: 'Best Dish Of Our Restaurent. Made By Special Respie. Hope You are Enjoyed. ',
//     },
// ]
// const Body = () => {

//     const [item, setItem] = useState(dishes);



//     return (
//         <>
//             {
//                 item.map((dish) => {
//                     const { id, name, image, price, description } = dish;
//                     return (
//                         <>
//                             <div className=' bg-indigo-600 m-8  inline-grid rounded-l-xl h-48 w-96 text-center hover:border shadow-xl shadow-white  '>
//                                 <div className=' flex '>
//                                     <div>
//                                         <img src={dish.image} className='h-48 w-64 border border-black rounded-l-xl' />
//                                     </div>
//                                     <div className=''>
//                                         <div className=' text-white font-bold text-2xl '>
//                                             {dish.name}
//                                             <hr></hr>
//                                         </div>
//                                         <div>
//                                             {dish.description}
//                                         </div>
//                                         <div className=' flex justify-between m-2'>
//                                             <div>{dish.price}</div>
//                                             <div><a><button>Click Me</button></a></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>



//                         </>



//                     )
//                 })
//             }

//         </>
//     )
// }

// export default Body