import React from 'react'

const Footer = () => {
    return (
        <>
            <div className=' bg-slate-400 mt-10 h-fit w-full text-lg font-bold'>

                <div className='grid grid-cols-1   sm:grid-cols-1 m-10  md:grid-cols-3 '>
                    
                    <div className='mt-4 md:ml-10'>
                        <div>
                            <div className='font-bold text-2xl cursor-pointer flex font-[Poppins] text-gray-800 ' >
                                <span className='text-3xl text-indigo-600  '><ion-icon name="logo-ionic"></ion-icon></span>
                                <span className=' text-indigo-700'>FUNDLY</span>
                            </div>
                        </div>
                        <div className='grid justify-items-center items-center h-40  ' >Fundly is dedicated to providing you with the tools you need to raise money for whatever your cause may be.</div>
                    </div>

                    <div className='mt-4 md:ml-10'>

                        <div className='  font-bold text-2xl font-[Poppins] text-indigo-700 ' >
                            ABOUT US
                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-1 md:h-auto md:w-auto lg:grid-cols-2 mt-6 xl:h-40  '>
                            <div>
                                <a href='#'><div className=' hover:text-indigo-700'>Fundraising Ideas</div></a>
                                <a href='#'><div className=' hover:text-indigo-700'>Pricing</div></a>
                                <a href='#'><div className=' hover:text-indigo-700'>Privacy Policy</div></a>
                                <a href='#'><div className=' hover:text-indigo-700'>About Us</div></a>
                                <a href='#'><div className=' hover:text-indigo-700'>Support</div></a>

                            </div>
                            <div>
                                <a href='#'><div className=' hover:text-indigo-700'>Blog</div></a>
                                <a href='#'><div className=' hover:text-indigo-700'>Terms of Use</div></a>
                                <a href='#'><div className=' hover:text-indigo-700'>FAQ</div></a>
                                <a href='#'><div className=' hover:text-indigo-700'>Sales</div></a>
                                <a href='#'><div className=' hover:text-indigo-700'>Press</div></a>
                            </div>
                        </div>

                    </div>
                    <div className='mt-4 md:ml-10'>

                        <div className=' text-indigo-700 font-bold text-2xl font-[Poppins] ' >
                            FOLLOW US
                        </div>


                        <div className=' grid grid-cols-2 md:grid-cols-1 md:h-auto md:w-auto lg:grid-cols-2 h-48 mt-6 '>
                            <div className='mr-2'>
                                <div className=' inline-flex'>
                                    <div className='mt-1 mr-1 text-indigo-700'><ion-icon name="logo-facebook" ></ion-icon></div>
                                    <div><a href='#' className=' text-lg font-bold'>Facebook</a></div>
                                </div>
                                <br></br>
                                <div className=' inline-flex'>
                                    <div className='mt-1 mr-1 text-indigo-700'><ion-icon name="logo-instagram"></ion-icon></div>
                                    <div className='text-lg font-bold'><a href='#'>Instagram</a></div>
                                </div>
                                <br></br>
                                <div className=' inline-flex'>
                                    <div className='mt-1 mr-1 text-indigo-700'><ion-icon name="logo-pinterest"></ion-icon></div>
                                    <div className='text-lg font-bold'><a href='#'>Pinterest</a></div>
                                </div>


                            </div>
                            <div>
                                <div className=' inline-flex'>
                                    <div className='mt-1 mr-1 text-indigo-700'><ion-icon name="logo-google"></ion-icon></div>
                                    <div className='text-lg font-bold'><a href='#'>Google</a></div>
                                </div>
                                <div>
                                    <div className=' inline-flex'>
                                        <div className='mt-1 mr-1 text-indigo-700'><ion-icon name="chatbubbles-outline"></ion-icon></div>
                                        <div className='text-lg font-bold'><a href='#'>Blog</a></div>
                                    </div>

                                </div>
                                <div>
                                    <div className=' inline-flex'>
                                        <div className='mt-1 mr-1 text-indigo-700'><ion-icon name="logo-twitter"></ion-icon></div>
                                        <div className='text-lg font-bold'><a href='#'>Twitter</a></div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <hr className=' gridw-96 border border-dotted justify-items-center items-center mt-10'></hr>
                <div className='grid justify-items-center items-center mt-4'>
                    <strong>Copyright © Fundly 2023</strong>
                </div>

            </div>
        </>
    )
}

export default Footer