import {Link} from 'react-router-dom';

const names = [
    {name: 'Frontend'},
    {name: 'Backend'},
    {name: 'DevOps'},
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

export default function Home(){
    return(
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

        </div>
    )
}