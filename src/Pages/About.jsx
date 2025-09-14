import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-10 bg-gray-50 min-h-screen 
      bg-[radial-gradient(#dbeafe_1px,transparent_1px)] 
                [background-size:20px_20px]">
      
      {/* Left Section */}
      <div className="md:w-1/2 w-full p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get to know me!!</h2>
        
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p className="text-lg">
            👋 Hey there, I’m <span className="font-semibold text-gray-800">Kavan Kansodariya</span>  
          </p>
          <p>
            🎓 B.Tech student in <span className="font-medium">Information & Communication Technology</span> at  
            <span className="font-semibold text-gray-800"> Dhirubhai Ambani University, Gandhinagar</span>.
          </p>

          {/* What I Do */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">🚀 What I Do</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>💡 Passionate about <span className="font-medium">Data Structures & Algorithms</span></li>
              <li>📚 Strong foundation in <span className="font-medium">DBMS, OS, OOP, CN & Software Engineering</span></li>
              <li>💻 Built projects using <span className="font-medium">C++, DBMS, OOP & MERN stack</span></li>
              <li>😊 Refer My CV for more.</li>
            </ul>
          </div>

          {/* Coding profiles */}
         <div className="pt-6">
  <h3 className="text-xl font-semibold text-gray-700 mb-2">🌟 Coding Profiles</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
    {[
      {
        Profile: "LeetCode",
        Link: "https://leetcode.com/u/kavan07",
        Icon:<SiLeetcode />
      },
      {
         Profile:"Codeforces",
        Link:"https://codeforces.com/profile/KK7",
        Icon:<SiCodeforces />
      },
      {
        Profile:"Github",
        Link:"https://github.com/Kavan510",
        Icon:<FaGithub/>
      }
    ].map((skill, index) => (
     <a
  href={skill.Link}
  target="_blank"
  rel="noopener noreferrer"
  key={index}
  className="flex items-center justify-center gap-2 px-4 py-2 bg-white shadow rounded-lg 
             text-gray-700 font-medium border hover:bg-blue-100 
             hover:scale-105 transition-transform duration-200"
>
  {skill.Icon}
  <span>{skill.Profile}</span>
</a>

    ))}
  </div>
</div>

        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full p-6">
        
        {/* Skills Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {[
            "C++",
            "DSA",
            "CP",
            "JavaScript",
            "Java",
            "SQL",
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Git",
            "Postman",
          ].map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white shadow rounded-lg text-center 
                         text-gray-700 font-medium border hover:bg-blue-100 
                         hover:scale-105 transition-transform duration-200"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Coursework Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Coursework</h2>
        <div className="space-y-2">
          {[
            "Database Management System",
            "Operating System",
            "Object Oriented Programming",
            "Computer Networks",
            "Software Engineering",
          ].map((course, index) => (
            <div
              key={index}
              className="p-3 bg-white shadow rounded-lg border text-gray-600 hover:bg-green-100 transition duration-200"
            >
              {course}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
