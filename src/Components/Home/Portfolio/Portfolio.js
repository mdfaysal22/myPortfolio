import React from 'react';
import goal from '../../../Assets/goal.png';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolio = () => {
    return (
        <div className='bg-accent text-center'>

            <h1 className='py-5 text-4xl font-semibold'>Working History</h1>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true
                  }}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="mySwiper bg-accent"
            >
                <SwiperSlide>
                    <div className='card bg-blue-900 max-w-lg mx-auto'>
                        <figure className='w-full h-56 '><img className='w-full duration-700 transition-all h-full object-cover object-top hover:object-bottom' src={goal} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Goal
                            </h2>
                            <p className='text-left'>The Best Football Player Calculate Website.</p>
                            <div className="card-actions">
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">SASS</div> 
                                <div className="badge badge-outline">JavaScript</div> 
                            </div>

                            <div className='text-left flex mt-3 gap-3'>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>
                                    <a href="/">Live Site</a>
                                </button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Code</button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card bg-blue-900 max-w-lg mx-auto'>
                        <figure className='w-full h-56 '><img className='w-full duration-700 transition-all h-full object-cover object-top hover:object-bottom' src={goal} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Goal
                            </h2>
                            <p className='text-left'>The Best Football Player Calculate Website.</p>
                            <div className="card-actions">
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">SASS</div> 
                                <div className="badge badge-outline">JavaScript</div> 
                            </div>

                            <div className='text-left flex mt-3 gap-3'>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>
                                    <a href="/">Live Site</a>
                                </button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Code</button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='card bg-blue-900 max-w-lg mx-auto'>
                        <figure className='w-full h-56 '><img className='w-full duration-700 transition-all h-full object-cover object-top hover:object-bottom' src={goal} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Goal
                            </h2>
                            <p className='text-left'>The Best Football Player Calculate Website.</p>
                            <div className="card-actions">
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">SASS</div> 
                                <div className="badge badge-outline">JavaScript</div> 
                            </div>

                            <div className='text-left flex mt-3 gap-3'>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>
                                    <a href="/">Live Site</a>
                                </button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Code</button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='card bg-blue-900 max-w-lg mx-auto'>
                        <figure className='w-full h-56 '><img className='w-full duration-700 transition-all h-full object-cover object-top hover:object-bottom' src={goal} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Goal
                            </h2>
                            <p className='text-left'>The Best Football Player Calculate Website.</p>
                            <div className="card-actions">
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">SASS</div> 
                                <div className="badge badge-outline">JavaScript</div> 
                            </div>

                            <div className='text-left flex mt-3 gap-3'>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>
                                    <a href="/">Live Site</a>
                                </button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Code</button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='card bg-blue-900 max-w-lg mx-auto'>
                        <figure className='w-full h-56 '><img className='w-full duration-700 transition-all h-full object-cover object-top hover:object-bottom' src={goal} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Goal
                            </h2>
                            <p className='text-left'>The Best Football Player Calculate Website.</p>
                            <div className="card-actions">
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">SASS</div> 
                                <div className="badge badge-outline">JavaScript</div> 
                            </div>

                            <div className='text-left flex mt-3 gap-3'>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>
                                    <a href="/">Live Site</a>
                                </button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Code</button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='card bg-blue-900 max-w-lg mx-auto'>
                        <figure className='w-full h-56 '><img className='w-full duration-700 transition-all h-full object-cover object-top hover:object-bottom' src={goal} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Goal
                            </h2>
                            <p className='text-left'>The Best Football Player Calculate Website.</p>
                            <div className="card-actions">
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">SASS</div> 
                                <div className="badge badge-outline">JavaScript</div> 
                            </div>

                            <div className='text-left flex mt-3 gap-3'>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>
                                    <a href="/">Live Site</a>
                                </button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Code</button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='card bg-blue-900 max-w-lg mx-auto'>
                        <figure className='w-full h-56 '><img className='w-full duration-700 transition-all h-full object-cover object-top hover:object-bottom' src={goal} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Goal
                            </h2>
                            <p className='text-left'>The Best Football Player Calculate Website.</p>
                            <div className="card-actions">
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">SASS</div> 
                                <div className="badge badge-outline">JavaScript</div> 
                            </div>

                            <div className='text-left flex mt-3 gap-3'>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>
                                    <a href="/">Live Site</a>
                                </button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Code</button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='card bg-blue-900 max-w-lg mx-auto'>
                        <figure className='w-full h-56 '><img className='w-full duration-700 transition-all h-full object-cover object-top hover:object-bottom' src={goal} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Goal
                            </h2>
                            <p className='text-left'>The Best Football Player Calculate Website.</p>
                            <div className="card-actions">
                                <div className="badge badge-outline">Bootstrap</div>
                                <div className="badge badge-outline">SASS</div> 
                                <div className="badge badge-outline">JavaScript</div> 
                            </div>

                            <div className='text-left flex mt-3 gap-3'>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>
                                    <a href="/">Live Site</a>
                                </button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Code</button>
                                <button className='btn btn-sm btn-outline hover:btn-primary'>Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Portfolio;