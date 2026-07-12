import Link from "next/link";

const nav = function Navbar() {
    return (
        <div className="flex fixed left-0 right-0 top-0 justify-center">
            <ul className="flex flex-row gap-20">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li className="">
                <Link href="mailto:ananthakrishnan0908@gmail.com" target="_blank">Contact</Link>
              </li>
            </ul>
        </div>
    )
}
export default nav;