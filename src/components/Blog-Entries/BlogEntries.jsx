import React from "react";
import BlogItem from "./BlogItem";
import {posts} from "../../constant"

const BlogEntries = () => {

return (
    <div className="w3-col l8 s12">
        {
            posts.map((item, index) => {
                return <BlogItem
                    key={index}
                    meka={item.commentUser}
                    title={item.title}
                    tag={item.tag}
                    titleDesc={item.titleDesc}
                    date={item.date}
                    desc={item.desc}
                    countComments={item.countComments}


                    imageUrl={item.imageUrl}
                    id={item.id}
                />

            })
        }
        </div>
    )
}

export default BlogEntries;