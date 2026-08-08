import nav from "../nav/navbar"
 
export default function profile() {
    return(
        <div className="flex flex-col gap-35">
            <div>
                {nav()}
            </div>
            <div className="flex flex-col items-center gap-10">
                <h1 className="text-gray-500 text-3xl">About</h1>
                <p className="text-6xl">
                    Hey, I&#39;m Anantha krishnan an undergraduate student,<br />
                    currently focusing on intreactive front-end development<br />
                    and responsive web designs
                </p>
            </div>
        </div>
    )
}