import React, { useState } from 'react';
import {BsDownload} from 'react-icons/bs';
const Header = () => {
    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "About", path: "javascript:void(0)" },
        { title: "Skill", path: "javascript:void(0)" },
        { title: "Portfolio", path: "javascript:void(0)" },
        { title: "Blog", path: "javascript:void(0)" },
        { title: "Contact", path: "javascript:void(0)" }
    ]
    return (
        <nav className="bg-accent w-full border-b border-primary md:border-0 md:static">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <h1 className='text-2xl text-primary font-semibold'>MD Faysal Dev.</h1>
                    <div className="md:hidden duration-500 transition-all">
                        <button className="text-primary outline-none p-2 rounded-md focus:border-primary focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center duration-500 transition-all pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-white hover:text-primary font-semibold">
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="hidden md:inline-block">
                    <button className='btn btn-sm btn-primary text-white'><a href="md-faysal-resume.pdf" download="md-faysal-resume.pdf" className='flex'><BsDownload className='mr-1'></BsDownload> Download Resume</a></button>
                </div>
            </div>
        </nav>
    );
};

export default Header;