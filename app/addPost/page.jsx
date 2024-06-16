'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddBlog() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!title || !content) return alert('Please fill in all fields');

        try {
            const response = await fetch('/api/tweets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });

            if (!response.ok) {
                throw new Error('Failed to add post');
            }

            setTitle('');
            setContent('');
            router.push('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
                className="border border-slate-500 px-8 py-2 text-black"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                className="border border-slate-500 px-8 py-2 text-black"
                type="text"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 w-fit mx-auto" type="submit">
                Submit
            </button>
        </form>
    );
}