import Link from "next/link";

const nav = function Navbar() {
    return (
        <div className="flex justify-center fixed left-180">
            <ul className="flex flex-row text-xl gap-20 pt-15">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li className="">
                <Link href="mailto:ananthakrishnan0908@gmail.com" target="_blank">contact</Link>
              </li>
            </ul>
        </div>
    )
}
export default nav;