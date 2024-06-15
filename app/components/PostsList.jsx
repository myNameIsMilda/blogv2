import RemoveBtn from "@/app/components/RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";

export default function PostsList() {
    return (
        <>
           <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5">
               <div>
                   <h2 className="font-bold text-2xl">Tweet Title</h2>
                   <div>Tweet</div>
               </div>

               <div className="flex gap-2 items-start">
                <RemoveBtn />
                   <Link href={"/editPost/123"}>
                    <HiPencilAlt size={24} />
                   </Link>
               </div>
           </div>
        </>
    )
}