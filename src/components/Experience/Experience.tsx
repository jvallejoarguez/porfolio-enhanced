import { FC, useState } from 'react';

interface Job {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  logo?: string;
}

const jobData: Job[] = [
  {
    id: 1,
    
    position: "Full Stack Developer",
    company: "DigitalBeat LTD",
    period: "May 2025 - Present",
    logo: "/digibeat.jpg",
    description: [
      "Developing and improving the company's custom games grid with Svelte.",
      "Developing and improving 888casino's android app with Kotlin.", 
      "Building a new app for Spinday using React Native.",
      "Creating and improving custom JavaScript scripts for 888casino, NorthStarsBet and more."
    ]
  },
  {
    id: 2,
    
    position: "CMS Executive",
    company: "DigitalBeat LTD",
    period: "Apr 2024 - Apr 2025",
    logo: "/digibeat.jpg",
    description: [
      "Developing and optimizing HTML, CSS, and JavaScript to enhance brand performance and user experience",
      "Collaborating with designers to create responsive and visually compelling web pages",
      "Building fresh new content based on mockups using HTML, CSS, and JavaScript",
      "Developing reusable components and libraries to streamline the development process",
      "Working with RESTful APIs to integrate backend services",
      "Ensuring cross-browser compatibility and responsive design"
    ]
  },
  {
    id: 3,
    
    position: "Web Developer",
    company: "The Rock Hotel Gibraltar",
    period: "Feb 2024 - Apr 2024",
    logo: "/the-rock-hotel.jpg",
    description: [
      "Spearheaded the 'Wall of Fame' digital transformation project, converting a physical exhibit into an engaging web platform",
      "Developed a local touchscreen-compatible version to integrate with on-site digital displays",
      "Integrated AI-powered enhancements, including voice interaction and facial recognition for an immersive experience",
      "Delivered a user-friendly solution that celebrates The Rock Hotel's rich history while leveraging cutting-edge technology"
    ]
  },
  {
    id: 4,
    
    position: "Web Developer",
    company: "Informática CR",
    period: "Sep 2023 - Dec 2023",
    logo: "/informatica-cr.png",
    description: [
      "Developed a Digital Printing Service Management System for handling print requests and managing customer receipts",
      "Created secure customer portal with login, account management, and interactive interface for submitting print requests",
      "Implemented document management features including PDF generation with custom styling and branding",
      "Built automated receipt generation and secure document storage with version control"
    ]
  }
];

const Experience: FC = () => {
  const [activeJob, setActiveJob] = useState<number>(1);
  
  return (
    <section className="py-24 px-6 md:px-12 w-full relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute left-0 top-24 w-72 h-72 bg-primary-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-24 w-72 h-72 bg-purple-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-white mb-4 relative">
            <span className="relative z-10">Work Experience</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My professional journey and the companies I've had the privilege to work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop timeline navigation */}
          <div className="hidden lg:flex lg:col-span-3 flex-col border-l-2 border-gray-800 pl-6 space-y-12 relative">
            {jobData.map((job) => (
              <button
                key={job.id}
                className={`flex flex-col items-start text-left transition-all duration-300 relative ${
                  activeJob === job.id 
                    ? 'text-primary-400' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setActiveJob(job.id)}
              >
                {/* Timeline dot */}
                <span 
                  className={`absolute -left-[29px] w-4 h-4 rounded-full transition-all duration-300 ${
                    activeJob === job.id 
                      ? 'bg-primary-500 ring-4 ring-primary-500/20' 
                      : 'bg-gray-700'
                  }`}
                ></span>
                
                <span className="text-sm font-medium mb-1">{job.period}</span>
                <span className="font-bold text-lg">{job.position}</span>
                <span className={activeJob === job.id ? 'text-gray-300' : 'text-gray-500'}>
                  {job.company}
                </span>
              </button>
            ))}
          </div>
          
          {/* Mobile timeline selector */}
          <div className="lg:hidden mb-8 flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {jobData.map((job) => (
              <button
                key={job.id}
                className={`flex-shrink-0 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeJob === job.id 
                    ? 'bg-primary-600/20 text-primary-400 border border-primary-500/30' 
                    : 'bg-dark-800 text-gray-400 hover:text-gray-200 border border-gray-800'
                }`}
                onClick={() => setActiveJob(job.id)}
              >
                {job.position}
              </button>
            ))}
          </div>
          
          {/* Job details */}
          <div className="lg:col-span-9">
            {jobData.map((job) => (
              <div 
                key={job.id} 
                className={`transition-all duration-500 ${
                  activeJob === job.id 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 absolute -z-10 transform translate-y-8'
                }`}
              >
                <div className="bg-dark-900/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-800/50">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                    {job.logo && (
                      <div className="w-32 h-20 rounded-xl overflow-hidden bg-white flex items-center justify-center p-2 border border-gray-800">
                        <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{job.position}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <span className="text-primary-400 font-medium">{job.company}</span>
                        <span className="hidden sm:block text-gray-500">•</span>
                        <span className="text-gray-400">{job.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 text-gray-300">
                    {job.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-400 mr-3 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 