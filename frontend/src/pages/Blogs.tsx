import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

const Blogs = () => {

  const {loading, blogs} = useBlogs();

  if (loading) {
    return <div>
      Loading...
    </div>
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
            {blogs.map(blog => <BlogCard 
              id = {blog.id}
              authorName = {blog.author.name}
              title = {blog.title}
              content = {blog.content}
              publishedDate={"March 18 2024"}
            />)}
        </div>
    </div>
  </div>
  )
}

export default Blogs