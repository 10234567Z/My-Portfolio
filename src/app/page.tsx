import Introduction from "./components/introduction";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

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
        <h3 className="text-3xl text-center font-extrabold p-4 text-blue-200">Projects</h3>
        <section className="grid grid-cols-auto-fit-650 sm:grid-cols-auto-fit-300 gap-6 p-4 pt-16 place-items-center bg-slate-400">
          <Projects />
        </section>
      </main>
    </>
  )
}