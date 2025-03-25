import React, { useState, useEffect } from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import ShimmerCard from './components/ShimmerCard';
import Card from './components/Card';

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          title: "Modern Web Development",
          description: "Exploring the latest trends in web development and modern UI design patterns.",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 2,
          title: "React Best Practices",
          description: "Deep dive into React patterns and performance optimization techniques.",
          image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 3,
          title: "UI/UX Design Principles",
          description: "Understanding the fundamentals of creating engaging user experiences.",
          image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=800&q=80"
        }
      ]);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Shimmer Effect Demo
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A beautiful demonstration of shimmer loading states in React
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array(3).fill(null).map((_, index) => (
                <ShimmerCard key={index} />
              ))
            : posts.map(post => (
                <Card key={post.id} {...post} />
              ))
          }
        </div>

        <footer className="mt-16 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-white transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
          <p>© 2024 Shimmer Effect Demo. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;