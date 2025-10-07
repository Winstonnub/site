const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-start justify-start text-left bg-grey px-8 pt-20"
    >
      {/* Flex row: Left text and right image */}
      <div className="w-full flex flex-row items-start justify-between">
        <div className="flex flex-col items-start max-w-xl">
          <h1 className="text-5xl font-extrabold mb-4 text-white">Hey, I'm Winston 👋🏻</h1>
          <p className="text-xl text-white-500 mb-6">Software Engineer. <br></br> Toronto. Hong Kong.</p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View My Work
          </a>
        </div>
        {/* Right side: Image */}
        <div className="flex-shrink-0 ml-8">
          <img
            src="/site/myself.jpeg"
            alt="Winston"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
      {/* Education Section BELOW the flex row */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-white mb-2">Education</h2>
        <ul className="text-lg text-gray-200 list-disc list-inside">
          <li className="text-1xl flex flex-row font-bold">          
            <img
            src="/site/uoft.jpeg"
            alt="uoft"
            className="w-16 h-16 object-cover rounded shadow-lg mr-4"
          />
          <div className="flex flex-col">
          <p>B.Sc. in Computer Science, University of Toronto</p>
          <p className="text-sm">Double Specialist in Data Science and Computer Science</p>
          <p className="text-sm">2024 - Present: cGPA 4.0 Dean's List Scholar</p>
          </div>
          </li>
          
          {/* Add more education items as needed */}
        </ul>
      </div>
    
    </section>
  );
};

export default Hero;
