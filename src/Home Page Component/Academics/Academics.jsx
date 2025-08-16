import ThreeDTextEffect from "../../Components/3-D Text/ThreeDTextEffect";
import aith from "./aith.jpeg";
import ggpl from "./ggpl.jpeg";
import iee from "./iee.jpeg";
export default function TimelineWithAvatar() {
  return (
    <>
      <div className=" m-8 ">
        <div className=" mt-24" data-aos="fade-right">
          <ThreeDTextEffect title="Academics" />
        </div>
        <div className="p-20 " data-aos="fade-in">
          <ol className="relative border-s border-gray-200 dark:border-gray-700  ">
            {data.map((d, idx) => (
              <li
                key={d.year + d.clg + idx}
                className="mb-10 ms-6 shadow-lg hover:shadow-md hover:shadow-blue-700"
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <img
                    className="rounded-full shadow-lg"
                    src={d.img}
                    alt="Thomas Lean image"
                  />
                </span>
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                  <div className="items-center justify-between mb-3 sm:flex">
                    <time className="mb-1 text-xs font-normal text-gray-500 sm:order-last sm:mb-0">
                      {d.year}
                    </time>
                    <div className="text-sm font-normal text-gray-600 lex dark:text-gray-300">
                      {d.clg}
                    </div>
                  </div>
                  <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                    {d.stream}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
const data = [
  {
    year: "2022-2025",
    clg: "Dr Ambedkar Institute Of Technology For Handicapped , Kanpur",
    stream: "Btech. In Computer Science and Engineering",
    img: aith,
  },
  {
    year: "2020-2022",
    clg: "Government Girls PolyTechnic , Lucknow ",
    stream: "Diploma In Information Technology",
    img: ggpl,
  },
  {
    year: "Till 2020",
    clg: "Ishavashyam Inter College",
    stream: "Did My Schooling",
    img: iee,
  },
];
