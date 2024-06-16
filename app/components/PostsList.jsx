'use client';
import { useState, useEffect } from 'react';
import RemoveBtn from "@/app/components/RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";

const getTweets = async () => {
    try {
        const res = await fetch("/api/tweets", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch tweets");
        }

        const data = await res.json();
        return data.tweets; // Return the `tweets` property of the response object
    } catch (error) {
        console.error("Error loading tweets", error);
    }
};

export default function PostsList() {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        getTweets().then(setTweets);
    }, []);

    return (
        <>
            {tweets.map((tweet) => (
                <div key={tweet._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5">
                    <div>
                        <h2 className="font-bold text-2xl">{tweet.title}</h2>
                        <div>{tweet.content}</div>
                    </div>

                    <div className="flex gap-2 items-start">
                        <RemoveBtn id={tweet._id} />
                        <Link href={`/editPost/${tweet._id}`}>
                            <HiPencilAlt size={24}/>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}