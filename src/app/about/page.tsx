import Footer from "@/app/components/footer";
import Introduction from "@/app/components/introduction";
import Navbar from "@/app/components/navbar";
import Skills from "@/app/components/skills";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="w-full h-full">
                <section className="flex flex-col items-center justify-center p-4 gap-6 bg-slate-400 pt-16">
                    <Introduction />
                </section>
                <h3 className="text-3xl text-center font-extrabold p-4 text-blue-200">Skills</h3>
                <section className=" grid grid-cols-auto-fit-300 gap-6 p-4 pt-16 place-items-center">
                    <Skills />
                </section>
                <p className="text-3x text-center font-semibold p-4 text-blue-200 italic">&quot;A FullStack developer specializing in MERN and PERN stack&quot;</p>
            </main>
            <hr style={{ width: "100%" }} color="white" />
            <footer className=" text-center text-white min-h-[200px] grid grid-cols-auto-fit-150 gap-6 p-4 pt-16 place-items-center">
                <Footer />
            </footer>
        </>
    )
}