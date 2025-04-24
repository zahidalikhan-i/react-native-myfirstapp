import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Dashboard from '../components/Dashboard';
import Post from '../components/Post';
import AddPost from '../components/AddPost'; // ✅ Import

const HomeScreen = () => {
  const [newPosts, setNewPosts] = useState([]);

  const handleNewPost = (post) => {
    setNewPosts([post, ...newPosts]);
  };

  return (
    <ScrollView style={{ backgroundColor: '#f0f2f5' }}>
      <Dashboard />

      <AddPost onPost={handleNewPost} />

      {newPosts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          content={post.content}
    
        />
      ))}

  
      <Post
        name=" Zahid Ali Khan"
        image={require('../assets/images/image-3.jpg')}
        content="Had a great time today!"
      />
      <Post
        name=" gibli art"
        image={require('../assets/images/image-2.jpg')}
        content="Loving the sunshine ☀️"
      />
    </ScrollView>
  );
};

export default HomeScreen;
