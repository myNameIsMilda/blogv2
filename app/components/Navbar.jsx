import Link from "next/link";

export default  function Navbar() {
    return (
        <>
            <nav className="flex justify-between items-center bg-blue-500 px-8 py-3">
                <Link className="font-bold" href={"/"}>Lidl Twiter</Link>
                <Link className="p-2 bg-black hover:bg-gray-700" href={"/addPost"}>Add Tweet</Link>
            </nav>
        </>
    )
}