'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditPostForm({ id, title, content }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch(`/api/tweets/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: newTitle, content: newContent }),
            });

            if (!res.ok) {
                throw new Error('Failed to update tweet');
            }

            // Redirect to the home page after successful update
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
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
                className="border border-slate-500 px-8 py-2 text-black"
                type="text"
                placeholder="Content"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
            />

            <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 w-fit mx-auto" type="submit">
                Update
            </button>
        </form>
    );
}