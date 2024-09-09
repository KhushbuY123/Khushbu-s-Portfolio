import html from '../Skill/html.png';
import css from '../Skill/css.png';
import js from '../Skill/js.png';
import tailwind from '../Skill/tailwind.png';
import git from '../Skill/git.png';
import figma from '../Skill/figma.png';
import canva from '../Skill/canva.png';
import python from '../Skill/python.png';
import mui from '../Skill/mui.png';
import netlify from '../Skill/netlify.png';
import react from '../Skill/react.png';
import bootstrap from '../Skill/bootstrap.png';
import node from '../Skill/node.png';
import mongodb from "../Skill/mongodb.png";
import mysql from "../Skill/mysql.png";
import sql from "../Skill/sql.png";
import npm from "../Skill/npm.png";
import vite from "../Skill/vite.png";
import ThreeDTextEffect from '../../3-D Text/ThreeDTextEffect';

const front = [html, css, js, tailwind, mui, bootstrap, react,vite];
const back=[node];
const tools=[git,figma,canva,netlify,npm];
const Programming=[python,sql]
const database=[mongodb,mysql]

export default function Skill() {
    return (
        <div style={{ backgroundColor: 'var(--bg-clr)' }}>
            <div className="pt-16 mb-24" data-aos="fade-right">
                <ThreeDTextEffect title="Skills" />
            </div>
            <div className='pl-6 mb-7'>
                <p className="text-white text-2xl font-semibold pb-6 ">Front-End</p>
                <div className="flex flex-wrap gap-6">
                    {front.map((item, index) => (
                        <div key={index} className="w-12 h-12 p-2 flex justify-center items-center bg-gray-800 rounded-lg overflow-hidden">
                            <img src={item} alt={`Skill ${index}`} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='pl-6 mb-7'>
                <p className="text-white text-2xl font-semibold pb-6">Tools</p>
                <div className="flex flex-wrap gap-6">
                    {tools.map((item, index) => (
                        <div key={index} className="w-12 h-12 p-2 flex justify-center items-center bg-gray-800 rounded-lg overflow-hidden">
                            <img src={item} alt={`Skill ${index}`} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='pl-6 mb-7'>
                <p className="text-white text-2xl font-semibold pb-6 ">Back-End</p>
                <div className="flex flex-wrap gap-6">
                    {back.map((item, index) => (
                        <div key={index} className="w-12 h-12 p-2 flex justify-center items-center bg-gray-800 rounded-lg overflow-hidden">
                            <img src={item} alt={`Skill ${index}`} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='pl-6 mb-7'>
                <p className="text-white text-2xl font-semibold pb-6">Programming</p>
                <div className="flex flex-wrap gap-6">
                    {Programming.map((item, index) => (
                        <div key={index} className="w-12 h-12 p-2 flex justify-center items-center bg-gray-800 rounded-lg overflow-hidden">
                            <img src={item} alt={`Skill ${index}`} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='pl-6 mb-7'>
                <p className="text-white text-2xl font-semibold pb-6 ">Database</p>
                <div className="flex flex-wrap gap-6">
                    {database.map((item, index) => (
                        <div key={index} className="w-12 h-12 p-2 flex justify-center items-center bg-gray-800 rounded-lg overflow-hidden">
                            <img src={item} alt={`Skill ${index}`} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
