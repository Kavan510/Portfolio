function About() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-10 bg-gray-50 min-h-screen">
      
      {/* Left Section */}
      <div className="md:w-1/2 w-full p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get to know me!!</h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Animi quas, et veniam debitis odio ex repudiandae ea amet, 
          earum ab eaque, aut minima deserunt corporis maxime consectetur 
          eligendi in. Itaque!
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full p-6">
        
        {/* Skills Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {[
            "C++",
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
