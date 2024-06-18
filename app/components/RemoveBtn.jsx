'use client';
import {HiOutlineTrash} from 'react-icons/hi';
import {useRouter} from 'next/navigation';

export default function RemoveBtn({id}) {
    const router = useRouter();

    const removeTweet = async () => {
        const confirm = window.confirm("Are you sure you want to delete this tweet?");

        if (confirm) {
            const res = await fetch(`/api/tweets/?id=${id}`, {
                method: "DELETE"
            });
            // router.refresh() nefunguje
            location.reload();
        }
    }

    return (
        <>
            <button onClick={removeTweet} className="text-red-400">
                <HiOutlineTrash size={24}/>
            </button>
        </>
    )
}