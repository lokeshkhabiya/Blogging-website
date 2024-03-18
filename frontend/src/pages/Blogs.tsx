import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

const Blogs = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
            <BlogCard 
              authorName = {"Lokesh"}
              title = {"How an ugly single page website makes $5000 a month without affiliate marketing"}
              content = {"How an ugly single page website makes $5000 a month without affiliate marketing How an ugly single page website makes $5000 a month without affiliate marketing"}
              publishedDate={"March 18 2024"}
              />
            <BlogCard 
              authorName = {"Lokesh"}
              title = {"How an ugly single page website makes $5000 a month without affiliate marketing"}
              content = {"How an ugly single page website makes $5000 a month without affiliate marketing How an ugly single page website makes $5000 a month without affiliate marketing"}
              publishedDate={"March 18 2024"}
              />
            <BlogCard 
              authorName = {"Lokesh"}
              title = {"How an ugly single page website makes $5000 a month without affiliate marketing"}
              content = {"How an ugly single page website makes $5000 a month without affiliate marketing How an ugly single page website makes $5000 a month without affiliate marketing"}
              publishedDate={"March 18 2024"}
              />
            <BlogCard 
              authorName = {"Lokesh"}
              title = {"How an ugly single page website makes $5000 a month without affiliate marketing"}
              content = {"How an ugly single page website makes $5000 a month without affiliate marketing How an ugly single page website makes $5000 a month without affiliate marketing"}
              publishedDate={"March 18 2024"}
              />
            <BlogCard 
              authorName = {"Lokesh"}
              title = {"How an ugly single page website makes $5000 a month without affiliate marketing"}
              content = {"How an ugly single page website makes $5000 a month without affiliate marketing How an ugly single page website makes $5000 a month without affiliate marketing"}
              publishedDate={"March 18 2024"}
              />
            <BlogCard 
              authorName = {"Lokesh"}
              title = {"How an ugly single page website makes $5000 a month without affiliate marketing"}
              content = {"How an ugly single page website makes $5000 a month without affiliate marketing How an ugly single page website makes $5000 a month without affiliate marketing"}
              publishedDate={"March 18 2024"}
              />
        </div>
    </div>
  </div>
  )
}

export default Blogs