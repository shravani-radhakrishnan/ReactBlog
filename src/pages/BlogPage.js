import { useParams } from "react-router-dom";
import Blogs from "./BlogData";
const BlogPage = () => {
    const { blogId } = useParams();
    const blog = Blogs.find(x => x.name === blogId);
    return (
        <>
            <h1>{blog.title}</h1>
            {blog.content.map((para) => (
                <p>{para}</p>
            ))}
        </>
    );
}
export default BlogPage;