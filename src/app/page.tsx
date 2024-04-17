import Introduction from "./components/introduction";
import Navbar from "./components/navbar";

export default function Home(){
  return (
    <>
     <Navbar/>
     <main className="w-full h-full">
        <section className="flex flex-col items-center justify-center p-4 gap-6 bg-slate-400 pt-16">
          <Introduction/>
        </section>
     </main>
    </>
  )
}