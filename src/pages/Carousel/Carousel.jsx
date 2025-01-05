import { useCallback, useEffect, useState } from "react";
import img1 from '../../../public/images/Carousel/1.jpg'
import img2 from '../../../public/images/Carousel/2.jpg'
import img3 from '../../../public/images/Carousel/3.jpg'
import img4 from '../../../public/images/Carousel/4.jpg'

const Carousel = () => {
    return (
        <div className='mt-7'>
            <div className="carousel lg:mx-20 sm:mx-10 rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={img1}
                        className="w-full h-[500px] bg-cover" />
                    <div className="absolute bg-gradient-to-r from-black to-black-50 h-full w-[463px] p-20 transform justify-between">
                        <div className="space-y-5 ">
                            <h1 className="text-white text-4xl font-bold ">We are qualified & of experience in this field</h1>
                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-active btn-primary mr-4">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute right-4 gap-10 bottom-3 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={img2}
                        className="w-full h-[500px] bg-cover" />
                    <div className="absolute bg-gradient-to-r from-black to-black-50 h-full w-[463px] p-20 transform justify-between">
                        <div className="space-y-5 ">
                            <h1 className="text-white text-4xl font-bold ">We are qualified & of experience in this field</h1>
                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-active btn-primary mr-4">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute right-4 gap-10 bottom-3 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={img3}
                        className="w-full h-[500px] bg-cover" />
                    <div className="absolute bg-gradient-to-r from-black to-black-50 h-full w-[463px] p-20 transform justify-between">
                        <div className="space-y-5 ">
                            <h1 className="text-white text-4xl font-bold ">We are qualified & of experience in this field</h1>
                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-active btn-primary mr-4">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute right-4 gap-10 bottom-3 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={img4}
                        className="w-full h-[500px] bg-cover" />
                    <div className="absolute bg-gradient-to-r from-black to-black-50 h-full w-[463px] p-20 transform justify-between">
                        <div className="space-y-5 ">
                            <h1 className="text-white text-4xl font-bold ">We are qualified & of experience in this field</h1>
                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-active btn-primary mr-4">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute right-4 gap-10 bottom-3 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Carousel;