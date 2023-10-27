import Link from "next/link"
import {AiFillBug} from "react-icons/ai"

const Navbar = () => {

    const links = [
        {
            label: "Dashboard",
            href: '/dashboard'
        }, {
            label: "Issues",
            href: "/issues"
        }
    ]

    return (
        <nav className="flex px-6 py-4 gap-6 border-b mb-5 items-center">
            <Link href="/"><AiFillBug size={25}/></Link>
            <ul className="flex gap-6">
                {links.map(link => {
                    const {label, href} = link
                    return (
                        <li key={href}>
                            <Link
                                className="text-zinc-500 hover:text-zinc-800 transition-colors text-lg"
                                href={href}>
                                    {label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar