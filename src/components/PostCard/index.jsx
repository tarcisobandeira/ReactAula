import './styles.css'

export const PostCard = ({ post }) => (
    <div className='post'>
        <img src={post.cover} alt={post.title} />
        <div key={post.id}
            className="post-content">
            <h1>{post.title}</h1>
            <h3>{post.id}</h3>
            <p>{post.body}</p>
        </div>
    </div>
)
