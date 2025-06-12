import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="bg-slate-950 h-24 p-10 items-center justify-center">
                <ul className="md:flex flex-row space-x-7  items-center justify-center -m-3 ">
                    <li className="text-white"><NavLink to ="/">Home</NavLink></li>
                    <li>
                        <select defaultValue="" className="appearance-none bg-slate-950 text-white w-12 rounded">
                            <option value="" disabled hidden>☰</option>
                            <option>SQL Course</option>
                            <option>Projects</option>
                            <option>Best Practices</option>
                            <option>Questions</option>
                            <option>Guides</option>
                            <option>Videos</option>
                            <option>Shop</option>
                            <option>Advertise</option>
                        </select>
                    </li>

                    <li className="text-white"><NavLink to="/get-started">Start Here</NavLink></li>

                    <li>
                        <select defaultValue="" className="bg-slate-950 text-white w-32 p-2 rounded">
                            <option value="" disabled hidden>Roadmaps</option>
                            <option>Official Roadmaps</option>
                            <option>AI Roadmaps</option>
                            <option>Community Roadmaps</option>
                        </select>
                    </li>

                    <li className="text-white"><NavLink to="/ai">AI Tutor</NavLink></li>
                    <li className="text-white"><NavLink to="/teams">Teams</NavLink></li>
                    <li className="text-white"><NavLink to="/login">Login</NavLink></li>
                    <li className="text-white"><NavLink to="/signup">Sign Up</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
