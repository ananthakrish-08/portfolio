import nav from "../nav/navbar";
import Link from "next/link";

export default function project() {
    return (
        <div className="flex flex-col items-center justify-center gap-30 pt-10">
            {nav()}
            <div>
                <h1 className="font-extrabold text-5xl">PROJECTS</h1>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-lg">A test website of firebase athentication</h1>
                <Link href="https://github.com/ananthakrish-08/firebase-auth.git" target="_blank">
                    https://github.com/ananthakrish-08/firebase-auth.git
                </Link>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-lg">A basic counting website created using Nextjs</h1>
                <Link href="https://github.com/ananthakrish-08/Next-js-firebase.git" target="_blank">
                    https://github.com/ananthakrish-08/Next-js-firebase.git
                </Link>
            </div>
        </div>
    )
}