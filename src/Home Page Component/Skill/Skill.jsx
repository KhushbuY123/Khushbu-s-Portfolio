import ThreeDTextEffect from "../../Components/3-D Text/ThreeDTextEffect";
import { FaCode } from "react-icons/fa6";
import { SiRobotframework } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";

const skillsData = [
  {
    category: "Programming Languages",
    icon: <FaCode className="w-5 h-5 text-blue-700" />,
    skills: [
      { name: "Javascript", icon: "🐹" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Python", icon: "🐍" },
    ],
  },
  {
    category: "Frameworks",
    icon: <SiRobotframework className="w-5 h-5 text-blue-700" />,
    skills: [
      { name: "Material UI", icon: "🍸" },
      { name: "NextJS", icon: "▲" },
      { name: "Tailwind", icon: "🎨" },
      { name: "React", icon: "⚛️" },
    ],
  },
  {
    category: "Database",
    icon: <FaDatabase className="w-5 h-5 text-blue-700" />,
    skills: [{ name: "MongoDB", icon: "🍃" }],
  },
  {
    category: "Tools",
    icon: <FaCloud className="w-5 h-5 text-blue-700" />,
    skills: [
      { name: "Git", icon: "☁️" },
      { name: "Figma", icon: "⚙️" },
      { name: "Vercel", icon: "🏗️" },
      { name: "Render", icon: "🐳" },
    ],
  },
];

export default function Skill() {
  return (
    <div className="flex flex-col justify-center">
      <div className="mb-6">
        <ThreeDTextEffect title="Skills" />
      </div>
      <div
        style={{ border: "1px solid var(--main-heading)" }}
        id="aboutme"
        className="xs:mx-0 lg:mx-28 shadow-lg hover:shadow-full hover:shadow-blue-700 flex flex-wrap min-h-[400px] bg-slate-500 m-10 rounded-lg bg-opacity-20 border border-gray-400 p-10 items-center"
      >
        <div className="space-y-6">
          {skillsData.map((category, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-12">
              <div className="flex items-center gap-2 min-w-[200px]">
                {category.icon}
                <span style={{ color: "var(--main-heading)" }}>
                  {category.category}:
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
