'use client';
import {HiOutlineTrash} from 'react-icons/hi';

export default function RemoveBtn({id}) {

    const removeTweet = async () => {
        const confirm = window.confirm("Are you sure you want to delete this tweet?");

        if(confirm){
            try {
                await fetch(`/api/tweets/?id=${id}`, {
                    method: "DELETE"
                });
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <>
            <button onClick={removeTweet} className="text-red-400">
                <HiOutlineTrash size={24} />
            </button>
        </>
    )
}