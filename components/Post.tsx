import Link from 'next/link';

interface Post {
 id: number;
 title: string;
 content: string;
}

interface PostProps {
 post: Post;
}

export default function Post({ post }: PostProps) {
 return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href={`/blog/${post.id}/image`}>Voir l'image</Link>
    </div>
 );
}