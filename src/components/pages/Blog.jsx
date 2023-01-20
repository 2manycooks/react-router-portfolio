function Blog(props) {

    return ( 
    <>
        {props.posts.map((post, idx) => {
            return(
                <div>
                    <h1>{post.title}</h1>
                    <h3>{post.body}</h3>
                </div>
            )
        })}
    </> 
    );
}

export default Blog;