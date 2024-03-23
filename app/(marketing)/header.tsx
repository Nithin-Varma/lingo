import { ClerkLoading } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import Image from "next/image"
export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full bg-red-500">
                <div className="pt-8 pl-4 pb-7 items-center gap-x-3">
                    <Image src="/sup.png" alt="L" height={40} width={40} />
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                        Lingo
                    </h1>
                </div>
                <ClerkLoading>
                    <Loader className="" />
                </ClerkLoading>
            </div>
        </header>
    )
}