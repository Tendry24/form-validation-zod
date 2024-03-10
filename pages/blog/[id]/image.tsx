import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import LeftSide from '../../../components/LeftSide';
import PostImage from '../../../components/PostImage';

const posts: Post[] = [
 { id: 1, title: 'Post 1', content: 'Contenu du post 1' },
 { id: 2, title: 'Post 2', content: 'Contenu du post 2' },
 // Ajoutez plus de posts ici
];

export default function PostImagePage() {
 return (
    <div>
      <Header />
      <LeftSide posts={posts} />
      <PostImage />
      <Footer />
    </div>
 );
}