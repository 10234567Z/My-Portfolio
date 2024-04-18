'use client'
export default function Skills() {
    return (
        <>
            <div className="flex flex-col h-[100%] items-center justify-start gap-2 bg-slate-300 p-4 rounded-md min-w-[300px] border-black border-solid border-2">
                <h2 className="text-2xl text-black font-extrabold">Frontend</h2>
                <div className="flex flex-row items-center justify-center gap-2">
                    <ul className=" list-disc">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Typescript</li>
                        <li>Tailwind</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col h-[100%] items-center justify-start gap-2 bg-slate-300 p-4 rounded-md min-w-[300px] border-black border-solid border-2">
                <h2 className="text-2xl text-black font-extrabold">Backend</h2>
                <div className="flex flex-row items-center justify-center gap-2">
                    <ul className=" list-disc">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>Supabase</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col h-[100%] items-center justify-start gap-2 bg-slate-300 p-4 rounded-md min-w-[300px] border-black border-solid border-2">
                <h2 className="text-2xl text-black font-extrabold">DevOps</h2>
                <div className="flex flex-row items-center justify-center gap-2">
                    <ul className=" list-disc">
                        <li>Docker</li>
                        <li>CI/CD</li>
                        <li>Render</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col h-[100%] items-center justify-start gap-2 bg-slate-300 p-4 rounded-md min-w-[300px] border-black border-solid border-2">
                <h2 className="text-2xl text-black font-extrabold">Tools</h2>
                <div className="flex flex-row items-center justify-center gap-2">
                    <ul className=" list-disc">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VSCode</li>
                        <li>Postman</li>
                    </ul>
                </div>
            </div>
        </>
    )
}