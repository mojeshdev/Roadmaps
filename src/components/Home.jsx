import {Link} from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const names = [

    {name: 'Frontend'},
    {name: 'Backend'},
    {name: 'Fullstack'},
    {name: 'Full Stack'},
    {name: 'AI Engineer'},
    {name: 'Data Analyst'},
    {name: 'Android'},
    {name: 'iOS'},
    {name: 'PostgreSQL'},
    {name: 'Blockchain'},
    {name: 'QA'},
    {name: 'Software Architect'},
    {name: 'Cyber Security'},
    {name: 'UX Design'},
    {name: 'Game Developer'},
    {name: 'AI and Data Scientist'},
    {name: 'Product Manager'},
    {name: 'Engineering Manager'},
]

const skills = [
    {name: 'JavaScript'},
    {name: 'React'},
    {name: 'Angular'},
    {name: 'Vue'},
    {name: 'Node.js'},
    {name: 'Typescript'},
    {name: 'Python'},
    {name: 'System Design'},
    {name: 'API Design'},
    {name: 'ASP.NEt Core'},
    {name: 'Java'},
    {name: 'C++'},
    {name: 'Flutter'},
    {name: 'Spring Boot'},
    {name: 'Go Roadmap'},
    {name: 'Rust'},
    {name: 'GraphQL'},
    {name: 'Design and Architecture'},
    {name: 'Design System'},
    {name: 'React Native'},
    {name: 'AWS'},
    {name: 'Docker'},
    {name: 'Kubernetes'},
    {name: 'Linux'},
    {name: 'MongoDB'},
    {name: 'Prompt Engineering'},
    {name: 'Git and GitHub'},
    {name: 'Redis'},
    {name: 'PHP'},
]

const ideas = [
    {name: 'Frontend'},
    {name: 'Backend'},
    {name: 'DevOps'},
]

const practices = [
    {name: 'Backend Performance'},
    {name: 'Frontend Performance'},
    {name: 'API Security'},
    {name: 'Code Reviews'},
    {name: 'AWS'},
]

const questions = [
    {name: 'JavaScript'},
    {name: 'Node.js'},
    {name: 'React'},
    {name: 'Backend'},
    {name: 'Data Analytics'},
    {name: 'Full Stack'},
    {name: 'Golang'},
    {name: 'Data Science'},
    {name: 'Frontend'},
    {name: 'DevOps'},
]

const guides = [
    {name: 'Data Analyst Career Path: My Pro Advice'},
    {name: 'TypeScript vs JavaScript: Which to Choose For Your Project'},
    {name: 'Top 30 JavaScript Interview Questions and Answers'},
    {name: 'How to Become a Data Analyst with No Experience: My Advice'},
    {name: 'Top 60+ Data Science Interview Questions and Answers'},
    {name: '50 Popular Golang Interview Questions (+ Quiz!)'},
    {name: '50 Popular Data Analyst Interview Questions (+ Quiz!)'},
    {name: 'Data Science vs. Cyber Security: Which Is Best for You?'},
    {name: 'Data Science vs Software Engineering: Which to Choose?'},
    {name: 'Data Science vs. AI: How I Would Choose My Path'},
    {name: 'Data Science vs Business Analytics: How Id Choose My Path'},
    {name: 'Top 50 Full Stack Developer Interview Questions'},
    {name: '50 Popular Backend Developer Interview Questions and Answers'},
    {name: 'Top 30 Popular Front End Developer Interview Questions'},
]

const videos = [
    {name: 'The Ultimate Frontend Developer Roadmap'},
    {name: 'Session Based Authentication'},
    {name: 'Basic Authentication'},
    {name: 'Basics of Authentication'},
    {name: 'Graph Data Structure'},
    {name: 'Heap Data Structure'},
    {name: 'Tree Data Structure'},
]

export default function Home(){
    return(
        <>
        <div className="bg-slate-950 min-h-screen bg-cover bg-no-repeat">
            <div className=''>
                <h1 className="text-5xl p-5 font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-center ">Developers Roadmaps</h1>
                <p className="text-center text-slate-400 p-2 text-xl font-sans font-semibold">
                    solutions is a community effort to create roadmaps, guides
                    and other educational content <br></br> to  help guide developers
                    in picking up a path and guide their learnings.
                </p>
            </div>

                 {/* Role based roadmaps */}
                
                    <div className="absolute w-48 h-9 rounded-xl border border-slate-500 ml-[12rem] md:ml-[41rem] mt-10 ">
                        <h1 className="text-slate-400 text-center py-1">Role-based Roadmaps</h1>
                    </div>

                <div className='grid grid-cols-1 mt-32 sm:grid-cols-2 md:grid-cols-3 gap-0  gap-y-4 mx-auto max-w-3xl'>
                    {names.map((name) => (
                        <div key={name} className='w-56 p-3   rounded-md border border-transparent bg-slate-800  hover:border-slate-500 transition '>
                            <h1 className='text-slate-400'>{name.name}</h1>
                        </div>
                    ))}
                </div>

                {/* Skill based roadmaps */}

                <div className="absolute w-48 h-9 rounded-xl border border-slate-500 ml-[12rem] md:ml-[41rem] mt-10 ">
                        <h1 className="text-slate-400 text-center py-1">Skill-based Roadmaps</h1>
                    </div>

                <div className='grid grid-cols-1 mt-32 sm:grid-cols-2 md:grid-cols-3 gap-0  gap-y-4 mx-auto max-w-3xl'>
                    {skills.map((skill) => (
                        <div key={skill} className='w-56 p-3   rounded-md border border-transparent bg-slate-800  hover:border-slate-500 transition '>
                            <h1 className='text-slate-400'>{skill.name}</h1>
                        </div>
                    ))}
                </div>

                {/* Project Ideas */}

                <div className="absolute w-48 h-9 rounded-xl border border-slate-500 ml-[12rem] md:ml-[41rem] mt-10 ">
                    <h1 className="text-slate-400 text-center py-1">Project Ideas</h1>
                </div>

                <div className='grid grid-cols-1 mt-32 sm:grid-cols-2 md:grid-cols-3 gap-0  gap-y-4 mx-auto max-w-3xl'>
                    {ideas.map((idea) => (
                        <div key={idea} className='w-56 p-3   rounded-md border border-transparent bg-slate-800  hover:border-slate-500 transition '>
                            <h1 className='text-slate-400'>{idea.name}</h1>
                        </div>
                    ))}
                </div>

                {/* Best Practices */}

                <div className="absolute w-48 h-9 rounded-xl border border-slate-500 ml-[12rem] md:ml-[41rem] mt-10 ">
                    <h1 className="text-slate-400 text-center py-1">Best Practices</h1>
                </div>

                <div className='grid grid-cols-1 mt-32 sm:grid-cols-2 md:grid-cols-3 gap-0  gap-y-4 mx-auto max-w-3xl'>
                    {practices.map((practice) => (
                        <div key={practice} className='w-56 p-3   rounded-md border border-transparent bg-slate-800  hover:border-slate-500 transition '>
                            <h1 className='text-slate-400'>{practice.name}</h1>
                        </div>
                    ))}
                </div>

                {/* Questions */}
                
                <div className="absolute w-48 h-9 rounded-xl border border-slate-500 ml-[12rem] md:ml-[41rem] mt-10 ">
                    <h1 className="text-slate-400 text-center py-1">Questions</h1>
                </div>

                <div className='grid grid-cols-1 mt-32 sm:grid-cols-2 md:grid-cols-3 gap-0  gap-y-4 mx-auto max-w-3xl'>
                    {questions.map((question) => (
                        <div key={question} className='w-56 p-3 rounded-md border border-transparent bg-slate-800  hover:border-slate-500 transition '>
                            <h1 className='text-slate-400'>{question.name}</h1>
                        </div>
                    ))}
                </div>
        </div>

        <div className='bg-white min-h-screen'>
                {/* Guides */}
                <h1 className='text-3xl font-sans font-bold ml-[20%] mt-10 mb-7'>Guides</h1>
                {guides.map((guide) => (
                    <div key={guide} className='ml-[20%] mt-4'>
                        
                        <Link  ><p className='hover:text-blue-600 text-bold '>{guide.name}</p></Link>
                        <div className='w-[38rem] h-[0.5px] mt-[2px] bg-gray-800'></div>
                    </div>
                ))}
                <button className='bg-gradient-to-r from-gray-500 to-slate-950 text-white font-sans font-extrabold px-3 py-2 ml-[20%] rounded-2xl text-xs mt-7  flex items-center '>
                    View ALL Guides <ArrowRight className="ml-2" />
                </button>

                {/* Videos */}
                <h1 className='text-3xl font-sans font-bold ml-[20%] mt-10 mb-7'>Guides</h1>
                {videos.map((video) => (
                    <div key={video} className='ml-[20%] mt-4'>
                        
                        <Link  ><p className='hover:text-blue-600 text-bold '>{video.name}</p></Link>
                        <div className='w-[38rem] h-[0.5px] mt-[2px] bg-gray-800'></div>
                    </div>
                ))}
                <button className='bg-gradient-to-r from-gray-500 to-slate-950 text-white font-sans font-extrabold px-3 py-2 ml-[20%] rounded-2xl text-xs mt-7  flex items-center '>
                    View ALL videos <ArrowRight className="ml-2" />
                </button>

                <div className='w-full h-[1px] bg-gray-400 mb-8 mt-16'></div>
                <h1 className='font-sans font-extrabold text-5xl text-center'>Join the community</h1>


        </div>
        </>
    )
}