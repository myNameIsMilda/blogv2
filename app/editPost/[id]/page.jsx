import EditBlogForm from '../../components/EditPostForm';

const getTweetById = async (id) => {
   try {
         const response = await fetch(`/api/tweets/${id}`, {cache: 'no-store'});
         if (!response.ok) {
              throw new Error('Failed to fetch tweet');
         }
         return response.json();
   } catch (error) {
            console.error(error);
   }
}

export default async function editBlog({params}) {
    const {id} = params;
    const tweet = await getTweetById(id);
    return (
        <EditBlogForm />
    )
}