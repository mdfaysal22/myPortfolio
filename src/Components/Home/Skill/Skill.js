import React from 'react';
import { TbMathSymbols } from 'react-icons/tb';
import { VscDebugAlt } from 'react-icons/vsc';
import { DiReact,DiNodejsSmall,DiJavascript1, DiMongodb,DiHtml5 } from 'react-icons/di';
import { BsCodeSlash } from 'react-icons/bs';
import { SiTypescript,SiExpress , SiDeno} from 'react-icons/si';
import { FiDatabase } from 'react-icons/fi';
import { GiCheckboxTree, GiInnerSelf, GiSandsOfTime } from 'react-icons/gi';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTeamLine } from 'react-icons/ri';
const Skill = () => {
    return (
        <div className='bg-accent pt-5 hero min-h-screen text-white'>
            <div className='hero-content'>
                <div>
                    <div className='text-center'>
                        <h1 className='text-4xl font-semibold'>My Professional Skill</h1>
                        <small>Let's Talk About My Professional Skills.</small>
                    </div>
                    <div className='grid md:grid-cols-3 gap-5 mt-3 grid-cols-1 '>
                        <div className="card hover:bg-secondary duration-500 transition-all bg-primary">
                            <div className="card-body text-center flex flex-col justify-center items-center">
                                <TbMathSymbols className='text-6xl'></TbMathSymbols>
                                <h2>Mathematical aptitude</h2>
                            </div>
                        </div>

                        <div className="card hover:bg-secondary duration-500 transition-all bg-primary">
                            <div className="card-body text-center flex flex-col justify-center items-center">
                                <VscDebugAlt className='text-6xl'></VscDebugAlt>
                                <h2>Problem-solving / Debugging</h2>
                            </div>
                        </div>


                        <div className="card hover:bg-secondary duration-500 transition-all bg-primary">
                            <div className="card-body text-center flex flex-col justify-center items-center">
                                <BsCodeSlash className='text-6xl'></BsCodeSlash>
                                <h2>Front-end & Back-end</h2>
                            </div>
                        </div>


                        <div className="card hover:bg-secondary duration-500 transition-all bg-primary">
                            <div className="card-body text-center flex flex-col justify-center items-center">
                                <FiDatabase className='text-6xl'></FiDatabase>
                                <h2>Database Management</h2>
                            </div>
                        </div>



                        <div className="card hover:bg-secondary duration-500 transition-all bg-primary">
                            <div className="card-body text-center flex flex-col justify-center items-center">
                                <IoLogoJavascript className='text-6xl'></IoLogoJavascript>
                                <h2>Programming Language</h2>
                            </div>
                        </div>

                        <div className="card hover:bg-secondary duration-500 transition-all bg-primary">
                            <div className="card-body text-center flex flex-col justify-center items-center">
                                <GiCheckboxTree className='text-6xl'></GiCheckboxTree>
                                <h2>Data structures</h2>
                            </div>
                        </div>

                        <div className="card hover:bg-secondary duration-500 transition-all bg-primary">
                            <div className="card-body text-center flex flex-col justify-center items-center">
                                <GiSandsOfTime className='text-6xl'></GiSandsOfTime>
                                <h2>Time Management</h2>
                            </div>
                        </div>

                        <div className="card hover:bg-secondary duration-500 transition-all bg-primary">
                            <div className="card-body text-center flex flex-col justify-center items-center">
                                <RiTeamLine className='text-6xl'></RiTeamLine>
                                <h2>Team work</h2>
                            </div>
                        </div>

                        <div className="card hover:bg-secondary duration-500 transition-all bg-primary">
                            <div className="card-body text-center flex flex-col justify-center items-center">
                                <GiInnerSelf className='text-6xl'></GiInnerSelf>
                                <h2>Self Developing</h2>
                            </div>
                        </div>

                    </div>

                    <div className='mt-5 text-center'>
                        <h2 className='text-2xl'>Core Knowledge of Programming</h2>

                        <div className='grid mt-3 sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-4 gap-3'>
                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiReact className='mr-2'></DiReact>
                                <h2>React.js</h2>
                            </div>
                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiNodejsSmall className='mr-2'></DiNodejsSmall>
                                <h2>Node.js</h2>
                            </div>

                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiJavascript1 className='mr-2'></DiJavascript1>
                                <h2>JavaScript & ES6</h2>
                            </div>

                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiMongodb className='mr-2'></DiMongodb>
                                <h2>MongoDB</h2>
                            </div>
                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <SiExpress className='mr-2'></SiExpress>
                                <h2>Express.js</h2>
                            </div>
                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <SiTypescript className='mr-2'></SiTypescript>
                                <h2>Typescript</h2>
                            </div>

                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiHtml5 className='mr-2'></DiHtml5>
                                <h2>HTML & CSS</h2>
                            </div>

                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <SiDeno className='mr-2'></SiDeno>
                                <h2>Deno</h2>
                            </div>



                        </div>
                    </div>

                    <div className='mt-5 text-center'>
                        <h2 className='text-2xl'>Tools & Technology that I uses</h2>


                        <div className='grid grid-cols-1 gap-3 mt-3 md:grid-cols-4'>
                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiReact className='mr-2'></DiReact>
                                <h2>Firebase</h2>
                            </div>
                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiReact className='mr-2'></DiReact>
                                <h2>Vercel</h2>
                            </div>
                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiReact className='mr-2'></DiReact>
                                <h2>VS Code</h2>
                            </div>
                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiReact className='mr-2'></DiReact>
                                <h2>Chrome Dev Tools</h2>
                            </div>
                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiReact className='mr-2'></DiReact>
                                <h2>Tailwind CSS</h2>
                            </div>
                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiReact className='mr-2'></DiReact>
                                <h2>Bootstrap</h2>
                            </div>
                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiReact className='mr-2'></DiReact>
                                <h2>React Query</h2>
                            </div>
                            <div className='flex justify-center duration-500 transition-all bg-primary hover:bg-secondary rounded-md p-5  items-center'>
                                <DiReact className='mr-2'></DiReact>
                                <h2>Axios</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;