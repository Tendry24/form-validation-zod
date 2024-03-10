import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide';
import '../app/globals.css'

interface Post {
 id: number;
 title: string;
 content: string;
}

const posts: Post[] = [
    { id: 1, title: 'Post 1', content: 'Content 1' },
    { id: 2, title: 'Post 2', content: 'Content 2' },
    { id: 3, title: 'Post 3', content: 'Content 3' },
    { id: 4, title: 'Post 4', content: 'Content 4' },
    { id: 5, title: 'Post 5', content: 'Content 5' },
    { id: 6, title: 'Post 6', content: 'Content 6' },
];

export default function HomePage() {
 return (
    <div className="main-content">
      <Header />
      <LeftSide posts={posts} />
      <Footer />
    </div>
 );
}