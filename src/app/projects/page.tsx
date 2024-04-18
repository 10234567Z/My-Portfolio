import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Projects from "@/app/components/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full h-full">
        <h3 className="text-3xl text-center font-extrabold p-4 text-blue-200">Projects</h3>
        <section className="grid grid-cols-auto-fit-650 sm:grid-cols-auto-fit-300 gap-6 p-4 pt-16 pb-16 place-items-center bg-slate-400">
          <Projects />
        </section>
      </main>
      <footer className=" text-center text-white min-h-[200px] grid grid-cols-auto-fit-150 gap-6 p-4 pt-16 place-items-center">
        <Footer />
      </footer>
    </>
  )
}