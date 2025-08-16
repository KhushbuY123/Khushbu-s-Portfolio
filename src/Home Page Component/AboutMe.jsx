import ThreeDTextEffect from "../Components/3-D Text/ThreeDTextEffect";
import me from "../Home Page Component/Header Section/me1.png";
export default function AboutMe() {
  return (
    <>
      <div className="mt-16 mb-32" data-aos="fade-right">
        <ThreeDTextEffect title="About Me" />
      </div>
      <div
        style={{ border: "1px solid var(--main-heading)" }}
        id="aboutme"
        className="xs:mx-0 lg:mx-28 shadow-lg hover:shadow-full hover:shadow-blue-700 flex flex-wrap min-h-[400px] bg-slate-500 m-10 rounded-lg bg-opacity-20 border border-gray-400 p-10"
      >
        <div className="w-full  text-gray-200 font-medium text-2xl leading-snug">
          <div className="rounded-fullw-[100px] h-[100px] content-center">
            <img
              src={me}
              alt="me"
              height="150px"
              width="100px"
              className="rounded-full"
            ></img>
          </div>
          <div className="space-y-200">
            <h2
              style={{ color: "var(--main-heading)" }}
              className="text-xl font-medium tracking-tighter sm:text-xl lg:text-2xl/none"
            >
              Khushbu Yadav
            </h2>
            <p
              style={{ color: "var(--para-clr)" }}
              className="text-gray-400 mt-2 text-lg"
            >
              Associate Software Engineer
            </p>
          </div>
        </div>
        <div>
          <p style={{ color: "var( --text-color)" }} className="text-md ">
            My name is Khushbu Yadav 🌸 , and I have recently completed my
            Bachelor’s degree in Computer Science and Engineering (CSE) 🎓 . I
            began my journey with a one-year full-time internship at Shunyity
            Tech Solution, where I worked as a 👩🏻‍💻 and gained strong hands-on
            experience in software development. Currently, I am working as an
            Associate Software Engineer at Shunyity Tech Solutions, contributing
            to the design, development, and implementation of innovative
            software solutions. I am also delighted to have been placed at Tata
            Consultancy Services (TCS) as an Associate System Engineer 💓 ,
            where I will be joining in the near future. I look forward to
            applying my technical expertise, problem-solving abilities, and
            eagerness to learn while contributing to impactful projects.
          </p>
        </div>
      </div>
    </>
  );
}
