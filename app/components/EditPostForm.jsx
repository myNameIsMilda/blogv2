'use client';
import {useState} from "react";

export default function editPostForm({id, title, content}) {

    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);

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