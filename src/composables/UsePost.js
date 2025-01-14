import { ref } from "vue";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function usePost() {
  const posts = ref([]);
  const post = ref("");

  const llegirPosts = async () => {
      const response = await fetch(baseURL);
      posts.value = await response.json();
  };

  const llegirPost = async (id) => {
      const response = await fetch(`${baseURL}/${id}`);
      post.value = await response.json();
  };

  return {
    posts,
    post,
    llegirPosts,
    llegirPost,
  };
}
