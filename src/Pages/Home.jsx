import { Navigate, useNavigate } from "react-router-dom"

function Home() {

  const navigate  =useNavigate();

  return (
<div className="flex flex-col items-center justify-center min-h-screen 
                bg-gray-50 text-gray-800 px-4
                bg-[radial-gradient(#dbeafe_1px,transparent_1px)] 
                [background-size:20px_20px]">

      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Hi, this is <span className="text-blue-600">Kavan</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-600"> 
          A man who believes in <span className="font-medium">Today ||  Tomorrow</span> philosophy.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button onClick={()=>navigate('/projects')} className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-md hover:bg-blue-700 transition cursor-pointer">
            My Professional Work
          </button>
          <a className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-2xl font-semibold shadow-md hover:bg-blue-50 transition cursor-pointer" 
          href="https://drive.google.com/file/d/1gp0jNHw7R9iBZShu-8-LLK3zcGhcFbGN/view?usp=drive_link"
          target="_blank"
          >
            View My CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
