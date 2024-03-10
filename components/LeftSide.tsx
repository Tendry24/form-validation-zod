import Link from 'next/link';

interface Post {
 id: number;
 title: string;
}

interface LeftSideProps {
 posts: Post[];
}

export default function LeftSide({ posts }: LeftSideProps) {
 return (
    <div className="left-side">
      <h2>Liste des posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
 );
}