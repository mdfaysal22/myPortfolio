import React from 'react';
import { BsDownload } from 'react-icons/bs';
import img1 from '../../../Assets/myImage1.JPG';
const Banner = () => {
    return (
        <div className="hero min-h-[89vh] bg-accent">
            <div className="hero-content">
                <div className='text-center'>
                <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                        <img src={img1} alt="" />
                    </div>
                </div>

                <div className='text-white'>
                    <h1 className='text-6xl font-semibold '>Hello, I'm Faysal</h1>
                    <h1 className='text-4xl font-light text-primary'>A Junior MERN Stack Web Developer.</h1>

                    <button className="btn text-white mt-3 md:hidden btn-primary btn-sm"><a href="md-faysal-resume.pdf" download="md-faysal-resume.pdf" className='flex'><BsDownload className='mr-1'></BsDownload> Download Resume</a></button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;