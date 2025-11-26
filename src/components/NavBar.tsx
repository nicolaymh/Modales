import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="w-full bg-slate-900 mx-auto flex justify-center gap-3 sm:gap-6 md:gap-8 px-3 py-4 sm:p-4 md:p-6 shadow-lg">
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? 'text-white text-xs sm:text-sm md:text-base font-semibold border-b-2 border-cyan-400 pb-1 sm:pb-2 transition-all'
                        : 'text-slate-400 text-xs sm:text-sm md:text-base hover:text-white transition-all border-b-2 border-transparent pb-1 sm:pb-2'
                }
            >
                Modal Example 1
            </NavLink>
            <NavLink
                to='/modal-2'
                className={({ isActive }) =>
                    isActive
                        ? 'text-white text-xs sm:text-sm md:text-base font-semibold border-b-2 border-cyan-400 pb-1 sm:pb-2 transition-all'
                        : 'text-slate-400 text-xs sm:text-sm md:text-base hover:text-white transition-all border-b-2 border-transparent pb-1 sm:pb-2'
                }
            >
                Modal Example 2
            </NavLink>
            <NavLink
                to='/modal-3'
                className={({ isActive }) =>
                    isActive
                        ? 'text-white text-xs sm:text-sm md:text-base font-semibold border-b-2 border-cyan-400 pb-1 sm:pb-2 transition-all'
                        : 'text-slate-400 text-xs sm:text-sm md:text-base hover:text-white transition-all border-b-2 border-transparent pb-1 sm:pb-2'
                }
            >
                Modal Example 3
            </NavLink>
        </nav>
    )
}

export default NavBar
