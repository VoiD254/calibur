"use client";
import { useRouter } from "next/navigation";
import { FaPaintBrush } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

export const Header = () => {
    const router = useRouter();

    return (
        <header className="flex h-[100px] items-center w-full mt-2 justify-between">
            <div className="flex items-center justify-around w-[50vw]">
                <div className="text-[#030064] text-4xl font-extrabold font-excalifont flex">
                    <FaPaintBrush className="mr-2 text-[#6965db]"/> Calibur 
                </div>
                <div className="relative text-sm text-[#171570] tracking-wider">
                    <ul className="flex flex-row items-center justify-between space-x-7 font-Outfit">
                        <li className="hover:bg-violet-50 cursor-pointer px-4 py-3 rounded-xl">Pricing</li>
                        <li className="hover:bg-violet-50 cursor-pointer px-4 py-3 rounded-xl">Teams</li>
                        <li className="hover:bg-violet-50 cursor-pointer px-4 py-3 rounded-xl">Roadmap</li>
                        <li className="hover:bg-violet-50 cursor-pointer px-4 py-3 rounded-xl">Resources</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center lg:space-x-md w-[25vw] justify-around mr-5">
                <div className="flex p-3 rounded-2xl border hover:bg-violet-50 hover:border-none cursor-pointer">
                    <VscGithubAlt size={18}/>
                </div>
                <div className="space-x-8">
                    <button className="border-gray-300 border rounded-3xl text-[#171570] text-md px-6 py-3 bg-white hover:bg-slate-100">
                        Sign in
                    </button>
                    <button onClick={() =>{
                        router.push("/whiteboard")
                    }} className="rounded-3xl text-white text-md p-4 px-6 py-3 bg-[#6965db] hover:bg-[#f8fff8] hover:text-[#6965db] border">
                        Let&apos;s Draw
                    </button>
                </div>
            </div>
        </header>
    );
}
