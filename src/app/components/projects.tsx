import Image from "next/image";

export default function Projects() {
    return (
        <>
            <div className=" flex flex-row items-start justify-center gap-4 p-4 bg-gray-300 rounded-lg transition-all duration-500 hover:shadow-2xl sm:flex-col h-[100%] overflow-hidden animate-fadeIn">
                <div className="overflow-hidden">
                    <Image src="/waldo.png" alt="Family Waldo" width={300} height={300} className="rounded-md transition-all duration-500 hover:scale-150" />
                </div>
                <div className="flex flex-col items-center justify-start h-[100%] gap-2">
                    <h3 className="text-2xl text-black font-extrabold">Family Waldo</h3>
                    <p className="text-black max-w-[300px] mb-4">Find waldo and his family in a totally crowded image.
                        Get scored on the leaderboard once you clear a level on any of the 3 maps available to you!</p>
                    <p className="text-black">
                        Code :<a href="https://github.com/10234567Z/Family-Waldo" className=" text-blue-500"> Click Here</a><br />
                    </p>
                    <p className="text-black">
                        Live :<a href="https://wally-s-home.vercel.app/" className="text-blue-500"> Click Here</a>
                    </p>
                </div>
            </div>
            <div className=" flex flex-row items-start justify-center gap-4 p-4 bg-gray-300 rounded-lg transition-all duration-500 hover:shadow-2xl sm:flex-col h-[100%] overflow-hidden animate-fadeIn">
                <div className="overflow-hidden">
                    <Image src="/bloggy.png" alt="Bloggy" width={300} height={300} className="rounded-md transition-all duration-500 hover:scale-150" />
                </div>
                <div className="flex flex-col items-center justify-start h-[100%] gap-2">
                    <h3 className="text-2xl text-black font-extrabold">Bloggy</h3>
                    <p className="text-black max-w-[300px] mb-4">See the blogs posted by other people and have your opinion on it by posting comments. Not only watching them , but
                        Post your blogs and have others see the creativity of your writing skills!</p>
                    <p className="text-black">
                        Code :<a href="https://github.com/10234567Z/Bloggy" className=" text-blue-500"> Click Here</a><br />
                    </p>
                    <p className="text-black">
                        Live :<a href="https://bloggy-cyan.vercel.app/" className="text-blue-500"> Click Here</a>
                    </p>
                </div>
            </div>
            <div className=" flex flex-row items-start justify-center gap-4 p-4 bg-gray-300 rounded-lg transition-all duration-500 hover:shadow-2xl sm:flex-col h-[100%] overflow-hidden animate-fadeIn">
                <div className="overflow-hidden">
                    <Image src="/battleship.png" alt="Battleship" width={300} height={300} className="rounded-md transition-all duration-500 hover:scale-150" />
                </div>
                <div className="flex flex-col items-center justify-start h-[100%] gap-2">
                    <h3 className="text-2xl text-black font-extrabold">Battleship</h3>
                    <p className="text-black max-w-[300px] mb-4">Battle against the computers in a naval war while positioning your ships in an unpredictable way and defeat opponent's ships
                        before they destroy yours!</p>
                    <p className="text-black">
                        Code :<a href="https://github.com/10234567Z/Battleship" className=" text-blue-500"> Click Here</a><br />
                    </p>
                    <p className="text-black">
                        Live :<a href="https://10234567z.github.io/Battleship/" className="text-blue-500"> Click Here</a>
                    </p>
                </div>
            </div>
            <div className=" flex flex-row items-start justify-center gap-4 p-4 bg-gray-300 rounded-lg transition-all duration-500 hover:shadow-2xl sm:flex-col h-[100%] overflow-hidden animate-fadeIn">
                <div className="overflow-hidden">
                    <Image src="/cart.png" alt="FStore" width={300} height={300} className="rounded-md transition-all duration-500 hover:scale-150" />
                </div>
                <div className="flex flex-col items-center justify-start h-[100%] gap-2">
                    <h3 className="text-2xl text-black font-extrabold">FStore</h3>
                    <p className="text-black max-w-[300px] mb-4">FStore..where you can buy the general clothing items, put them in your cart to checkout later.</p>
                    <p className="text-black">
                        Code :<a href="https://github.com/10234567Z/Shopping-Cart" className=" text-blue-500"> Click Here</a><br />
                    </p>
                    <p className="text-black">
                        Live :<a href="https://shopping-cart-one-lac.vercel.app" className="text-blue-500"> Click Here</a>
                    </p>
                </div>
            </div>
        </>
    )
}