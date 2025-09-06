function About() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-10 bg-gray-50 min-h-screen">
      
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
              <li>🛠️ Believe in a <span className="font-medium">project-based learning approach</span></li>
              <li>💻 Built projects using <span className="font-medium">C++, DBMS, OOP & MERN stack</span></li>
            </ul>
          </div>

          {/* Beyond Academics */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">🌟 Beyond Academics</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>🔎 Problem solver & continuous learner</li>
              <li>🌍 Open to exploring real-world applications of tech</li>
              <li>📂 Check out my <span className="font-medium">Projects section</span> for more!</li>
            </ul>
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
            "Data Structures & Algorithms",
            "Competitive Programming",
            "JavaScript",
            "Java",
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
