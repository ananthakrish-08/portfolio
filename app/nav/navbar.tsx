import Link from "next/link";

const nav = function Navbar() {
    return (
        <div className="flex fixed left--1 sm:left-70 md:left-150 lg:left-450 lg:right-0 lg:top-0">
          <ul className="flex flex-col gap-3 text-gray-400">
            <li className="hover:text-black hover:scale-150">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-black hover:scale-150">
              <Link href="/About">About</Link>
            </li>
            <li className="hover:text-black hover:scale-150">
              <Link href="/work">Projects</Link>
            </li>
            <li className="hover:text-black hover:scale-150">
              <Link href="mailto:ananthakrishnan0908@gmail.com" target="_blank">Contact</Link>
            </li>
          </ul>
        </div>
    )
}
export default nav;