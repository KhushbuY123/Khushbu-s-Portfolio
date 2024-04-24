import html from '../Skill/html.png'
import css from '../Skill/css.png'
import js from '../Skill/js.png'
import tailwind from '../Skill/tailwind.png';
import git from '../Skill/git.png'
import figma from '../Skill/figma.png'
import canva from '../Skill/canva.png'
import python from '../Skill/python.png'
import mui from '../Skill/mui.png'
import netlify from '../Skill/netlify.png';
import react from '../Skill/react.png';
import bootstrap from '../Skill/bootstrap.png';
import ThreeDTextEffect from '../../3-D Text/ThreeDTextEffect';
export default function Skill(){
    return(
       <>
        <div className="bg-slate-900" style={{backgroundColor: 'var(--bg-clr)'}}>
            <div className="pt-16 mb-32" data-aos="fade-right">
                <ThreeDTextEffect title="Skills"/>
            </div>
            <div className="flex flex-wrap bg-slate-900 min-h-[400px] gap-28 justify-center mt-8 p-3" style={{backgroundColor: 'var(--bg-clr)'}}>
                    <div style={{border:'1px solid var(--main-heading)'}} className="shadow-lg hover:shadow-full hover:shadow-blue-700 w-full sm:w-1/3  bg-slate-600 rounded-lg bg-opacity-25 border border-x-white hover:rotate-3" data-aos="fade-up">
                        <p style={{color: 'var(--main-heading)'}} className="text-white text-center pt-6 text-lg">Technical Skills</p>
                        <div className="flex flex-wrap flex-row justify-center  mt-20 gap-5 pb-7">
                        <div className="w-20 h-20 rounded-full border border-indigo-500 flex justify-center items-center">
                            <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-n-one">
                                <div className="bg-tertiary rounded-full p-1 flex justify-center items-center">
                                    <img src={html} alt="html" className="w-13 h-11"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-20 h-20 rounded-full border border-indigo-500 flex justify-center items-center">
                            <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-n-one">
                                <div className="bg-tertiary rounded-full p-1 flex justify-center items-center">
                                    <img src={css} alt="css" className="w-11 h-15"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-20 h-20 rounded-full border border-indigo-500 flex justify-center items-center">
                            <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-n-one">
                                <div className="bg-tertiary rounded-full p-1 flex justify-center items-center">
                                    <img src={js} alt="js" className="w-11 h-11"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-20 h-20 rounded-full border border-indigo-500 flex justify-center items-center">
                            <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-n-one">
                                <div className="bg-tertiary rounded-full p-1 flex justify-center items-center">
                                    <img src={python} alt="python" className="w-11 h-11"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-20 h-20 rounded-full border border-indigo-500 flex justify-center items-center">
                            <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-n-one">
                                <div className="bg-tertiary rounded-full p-1 flex justify-center items-center">
                                    <img src={tailwind} alt="tailwind" className="w-11 h-11"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-20 h-20 rounded-full border border-indigo-500 flex justify-center items-center">
                            <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-n-one">
                                <div className="bg-tertiary rounded-full p-1 flex justify-center items-center">
                                    <img src={bootstrap} alt="bootstrap" className="w-11 h-11"/>
                                </div>
                            </div>
                        </div>   
                        <div className="w-20 h-20 rounded-full border border-indigo-500 flex justify-center items-center">
                            <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-n-one">
                                <div className="bg-tertiary rounded-full p-1 flex justify-center items-center">
                                    <img src={react} alt="react" className="w-11 h-11"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-20 h-20 rounded-full border border-indigo-500 flex justify-center items-center">
                                <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-n-one">
                                    <div className="bg-tertiary rounded-full p-1 flex justify-center items-center">
                                        <img src={mui} alt="mui" className="w-11 h-11"/>
                                    </div>
                                </div>
                        </div>    
                    </div>
                </div>
                <div style={{border:'1px solid var(--main-heading)'}} className="shadow-lg hover:shadow-full hover:shadow-blue-700 w-full sm:w-1/3  bg-slate-600 rounded-lg bg-opacity-25 border border-x-white pb-8 hover:rotate-3" data-aos="fade-up">
                    <p style={{color: 'var(--main-heading)'}} className="text-white text-center pt-6 text-lg">Developer Tools</p>
                    <div className="flex flex-wrap flex-row justify-center  mt-20 gap-5">
                        <div className="w-20 h-20 rounded-full border border-indigo-500 flex justify-center items-center">
                            <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-n-one">
                                <div className="bg-tertiary rounded-full p-1 flex justify-center items-center">
                                    <img src={figma} alt="figma" className="w-11 h-11"/>
                                </div>
                            </div>
                        </div> 
                        <div className="w-20 h-20 rounded-full border border-indigo-500 flex justify-center items-center">
                            <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-n-one">
                                <div className="bg-tertiary rounded-full p-1 flex justify-center items-center">
                                    <img src={canva} alt="canva" className="w-13 h-11"/>
                                </div>
                            </div>
                        </div> 
                        <div className="w-20 h-20 rounded-full border border-indigo-500 flex justify-center items-center">
                            <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-n-one">
                                <div className="bg-tertiary rounded-full p-1 flex justify-center items-center">
                                    <img src={netlify} alt="netlify" className="w-11 h-11"/>
                                </div>
                            </div>
                        </div> 
                        <div className="w-20 h-20 rounded-full border border-indigo-500 flex justify-center items-center">
                            <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card select-n-one">
                                <div className="bg-tertiary rounded-full p-1 flex justify-center items-center">
                                    <img src={git} alt="git" className="w-11 h-11"/>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
