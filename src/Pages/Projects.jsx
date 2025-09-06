function Projects() {
  const projects = [
    {
      title: "Doctor Appointment System",
      description:
        "A full-stack MERN application to book and manage doctor appointments with authentication and real-time notifications.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Kavan510/DocEasy",
    },
    {
      title: "Event_Hub",
      description:
        "Event_Hub is event management system via which users can book movie and theatre shows seamlessly and pay fees online ",
      tech: ["DBMS","PostgreSQL"],
      link: "https://github.com/Kavan510/Event_Hub_DBMS",
    },
    {
      title: "Inventory Management System",
      description:
        "CLI based user focused Inventory Management system using concepts of object oriented programming.",
      tech: ["C++","OOPs"],
      link: "https://github.com/Kavan510/OOPs/tree/main/Inventory%20Management",
    },
    {
        title:"Database management system using C++",
        description:"Database management system using C++ file based system",
        tech: ["C++"],
        link: "https://github.com/Kavan510/DBMS-in-CPP",
    }
  ];

  return (
    <div className="p-10 bg-gray-50 min-h-screen   bg-[radial-gradient(#dbeafe_1px,transparent_1px)] 
                [background-size:20px_20px]">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Projects
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border 
                       hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
