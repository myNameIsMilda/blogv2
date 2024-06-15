export default function editPostForm() {
    return (
        <form className="flex flex-col gap-3">
            <input className="border border-slate-500 px-8 py-2 text-black"
                   type={"text"}
                   placeholder={"Title"}/>
            <input className="border border-slate-500 px-8 py-2 text-black"
                   type={"text"}
                   placeholder={"Content"}/>

            <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 w-fit mx-auto">Update Tweet</button>
        </form>
    )
}