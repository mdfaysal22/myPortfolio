import React from 'react';

const About = () => {
    return (
        <div className='text-white hero min-h-screen  text-center bg-accent'>
            <div className='hero-content'>
            <div>
            <div>
                <h1 className='text-4xl font-semibold'>About Me</h1>
                <small>Let's talk about my self.</small>
            </div>
            <div className='mt-3 w-2/3 mx-auto'>
                <p> I'm Faysal, a MERN Stack web developer expert in Eye-catching design and develop web Application.
                    I'm a quick learner and I love to learn new technology. If you want to know What I'm doing, take a look at my Recently completed Project or better contact me and challenge me.
                    Thanks</p>
                    
            </div>

            <button className='btn btn-primary font-semibold btn-sm my-3 normal-case text-white'>Explore More</button>

            </div>
            </div>
        </div>
    );
};

export default About;