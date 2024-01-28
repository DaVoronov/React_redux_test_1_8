import { useSelector } from "react-redux";
import PostsGrid from "../components/PostsGrid";
import { getPosts } from "../redux/posts/postsSelectors";

function HomePage() {
  // Використати селектор для отримання постів
  const posts = useSelector(getPosts);

  return <PostsGrid posts={posts} />;
}

export default HomePage;
