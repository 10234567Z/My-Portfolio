'use client'

import Image from "next/image"

export default function Introduction() {
    return (
        <>
            <h1 className="text-4xl text-center font-semibold animate-slideIn">FullStack Web Developer</h1>
            <p className="text-4x text-center font-medium max-w-[600px] animate-slideIn">Passionate about building scalable web applications with seamless user experiences.
                Lets develop together!</p>
            <Image src="/stock1.jpg" alt="Stock Image" width={600} height={400} className="rounded-lg animate-fadeIn" />
            <div className="flex flex-col items-center justify-center rounded-lg gap-4 animate-slideIn p-3 bg-slate-300 w-full max-w-[800px]">
                <h1 className="text-3xl text-center font-semibold animate-fadeIn">Hello! My name is Harsh</h1>
                <p className="text-3x text-center font-medium max-w-[600px] animate-fadeIn">
                    Had interest in computers since childhood and started web development in 2021. Since then learnt
                    many technologies and frameworks to build scalable web applications. I am also quite confident in my ability to quickly grasp
                    concepts of new technologies I get introduced to.
                </p>
            </div>
        </>
    )
}