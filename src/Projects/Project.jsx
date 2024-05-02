import todo from '../Projects/todo.png'
import ss from '../Projects/ss.png'
import pp from '../Projects/pp.png'
import aith from '../Projects/aith.png'
import h from '../Projects/h.png'
import ti from '../Projects/ti.png'
import cp from '../Projects/cp.png'
import tc from '../Projects/tc.png'
import ra from '../Projects/ra.png'
import w from '../Projects/w.png'
import khushi from '../Projects/khushi.png'
import meme from '../Projects/meme.png'
import ThreeDTextEffect from '../3-D Text/ThreeDTextEffect';
import Animatedbg from '../Animated Background/Animatedbg';
import { useState } from 'react';
export default function Project() {
    const [items, setItems] = useState(data);
    const filterItem = (cate) => {
      const updatedItems = data.filter((currentItem) => {
        return currentItem.category === cate;
      });
      setItems(updatedItems);
    };
    return (
      <>
        <Animatedbg/>
        <div className="container my-12 mx-auto md:px-3 content-center">
          <section className="mb-12 text-center">
            <div className="mb-16 pb-2 mt-12 " data-aos="fade-right">
              <ThreeDTextEffect title="Project" />
            </div>
              <div  style={{backgroundColor: 'var(--bg-color)'}} className='shadow-lg hover:shadow-full hover:shadow-blue-700 mb-20 h-14 bg-slate-900 py-2 border border-white sm:w-1/2 w-full m-auto rounded-xl' data-aos="fade-left"> 
              <button
                type="button"
                className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
                onClick={() => setItems(data)} style={(backgroundColor="red")}>All
              </button>
              <button
                type="button"
                className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
                onClick={() => filterItem('Python')}>Python
              </button>
              <button
                type="button"
                className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
                onClick={() => filterItem('HTML/CSS')}>HTML/CSS
              </button>
              <button
                type="button"
                className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
                onClick={() => filterItem('JS')}>JS
              </button>
              <button
                type="button"
                className="text-white focus:outline-none hover:bg-slate-300 hover:border-b-2 py-2 px-3.5 hover:bg-opacity-20 font-medium rounded-full text-sm text-center"
                onClick={() => filterItem('React')}>React
              </button>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-8 ml-24 " data-aos="fade-left">
              {items.map((d,index) => (
                <div key={index} className="mb-6 lg:mb-0 w-3/4 ">
                  <div style={{backgroundColor: 'var(--bg-clri)',color:'var(--font)'}} className="  hover:shadow-full hover:shadow-blue-700 mb-16 relative block rounded-lg text-gray-300 bg-slate-900 bg-opacity-20text-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="flex justify-center">
                      <div className="relative mx-2 -mt-2  h-[150px] overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]" data-te-ripple-init data-te-ripple-color="light">
                        <img src={d.img} className="w-full" />
                        <a href="#!">
                          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                      </div>
                    </div>
                    <div className="p-4">
                      <h5 className="mb-4 text-md font-bold">{d.title}</h5>
                      <p className="mb-8 text-sm">
                        {d.disc}
                      </p>
                      <a href={d.git} style={{color: 'var(--font)'}} target='_blank' data-te-ripple-init data-te-ripple-color="light" className="inline-block rounded-full bg-primary px-4 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        GITHUB
                      </a>&nbsp;&nbsp;&nbsp;
                      <a href={d.live} style={{color: 'var(--font)'}} target='_blank' data-te-ripple-init data-te-ripple-color="light" className="inline-block rounded-full bg-primary px-4 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </>
    );
  }
  const data = [
    {
      title: "To-Do List",
      disc:"A To-Do List is a Simple Yet Effective Tool Used to Organize Tasks and Manage One's Time more Efficiently , Which Helps to Improve Productivity. ",
      img:todo,
      git:"https://github.com/KhushbuY123/To-Do-List.github.io?tab=readme-ov-file",
      category:"JS",
      live:"https://khushbuy123.github.io/To-Do-List.github.io/"
    },
    {
      title:"Simon Says",
      disc:"Simon Says is a Logical Children's Game That Follows a Pattern to Play. It Helps Improve Students' Memory, Focus, and Remembering Skills.",
      img:ss,
      git:"https://github.com/KhushbuY123/Simon-Says.github.io?tab=readme-ov-file",
      category:"JS",
      live:"https://khushbuy123.github.io/Simon-Says.github.io/"
    },
    {
      title: "Audio-Book",
      disc: "An Audiobook is An Audio Recording of a Book Being Read Aloud. It Allows People to Listen To The Contents of a Book Rather Than Reading it Visually.",
      img: pp,
      git: "https://github.com/KhushbuY123/Pdf-Reader.github.io",
      category: "Python",
      live:"https://github.com/KhushbuY123/Pdf-Reader.github.io" 
    },    
    {
      title: "Wheather-App",
      disc:"Weather-App is a Software Application Designed to Provide Users With Up-To-Date Information About Current Weather Conditions, Forecasts.",
      img:w,
      git:"https://github.com/KhushbuY123/Weather-App",
      category:"React",
      live:'https://find-your-weather.vercel.app/'
    },
    {
      title: "E-Proximity",
      disc:"E-Proximity is a College Management Site Used To Oversee The Academic Tasks Of Students, Teachers, and Administrators.",
      img:aith,
      git:"https://github.com/madhukar0721/E-Proximity",
      category:"React",
      live:"https://github.com/madhukar0721/E-Proximity"
    },
    {
      title:"Color-Picker",
      disc:"A Color Picker is a Graphical User Interface Tool Used To Generate Random Colors From a Button , Which Makes Your Development Easy",
      img:cp,
      git:"https://github.com/KhushbuY123/Color-Picker.github.io?tab=readme-ov-file",
      category:"JS",
      live:" https://khushbuy123.github.io/Color-Picker.github.io/"
    },
    {
      title:"Random-API",
      disc:"This Project Considers Random APIs. The First API is For Random Cat Facts, The Second is For Cracking Jokes, and The Last is For Random Dog Images. ",
      img:ra,
      git:"https://github.com/KhushbuY123/Random-API-S.github.io?tab=readme-ov-file",
      category:"JS",
      live:"https://khushbuy123.github.io/Random-API-S.github.io/"
    },
    ,
    {
      title:"Temperature-Converter",
      disc:"A Temperature Converter is a Tool Used to Convert Temperatures Between Different Units of Measurement Such as Celsius, Fahrenheit, and Kelvin",
      img:tc,
      git:"https://github.com/KhushbuY123/Temperature-Converter.github.io?tab=readme-ov-file",
      category:"JS",
      live:"https://khushbuy123.github.io/Temperature-Converter.github.io/"
    },
    {
      title:"Tour-India",
      disc:"Tour India is Essentially The Front-End Part Of The Traveling Website Where Users Can Interact With The Travel Costs And The Beauty of Tourism Places.",
      img:ti,
      git:"https://github.com/KhushbuY123/Tour-India.github.io?tab=readme-ov-file",
      category:"HTML/CSS",
      live:"https://khushbuy123.github.io/Tour-India.github.io/"
    },
    {
      title:"Be Hunger",
      disc:"Be-hunger is Essentially the Front-End Interface of a Food Ordering Website",
      img:h,
      git:"https://github.com/KhushbuY123/Be-Hunger.github.io?tab=readme-ov-file",
      category:"HTML/CSS",
      live:" https://khushbuy123.github.io/Be-Hunger.github.io/"
    },
    {
      title:"Meme-Generator",
      disc:"A Meme Generator is an Online Tool or Application For Fun Activity That Allows Users To Create Custom Memes Easily.",
      img:meme,
      git:"https://github.com/KhushbuY123/Meme-Generator.github.io",
      category:"JS",
      live:"https://khushbuy123.github.io/Meme-Generator.github.io/"
    },
    {
      title:"My-Portfolio",
      disc:"It is a Personal Portfolio Website That Showcases My Skills, Education, Experience And Projects. It Helps Others To Get To Know Me Better.",
      img:khushi,
      git:"https://github.com/KhushbuY123/Khushbu-s-Portfolio",
      category:"React",
      live:"https://github.com/KhushbuY123/Khushbu-s-Portfolio"
    },
  ];
  