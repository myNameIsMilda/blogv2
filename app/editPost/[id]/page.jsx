import EditPostForm from '../../components/EditPostForm';

const getTweetById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/tweets/${id}`, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('Failed to fetch tweet');
        }
        return response.json();
    } catch (error) {
        console.error("Error in getTweetById:", error);
        return { tweet: null };
    }
};

export default async function EditPost({params}) {
    const {id} = params;
    const { tweet } = await getTweetById(id);
    const { title, content } = tweet;

    return (
        <EditPostForm id={id} title={title} content={content} />
    )
}