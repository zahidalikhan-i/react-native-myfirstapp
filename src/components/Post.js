import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Post = ({ name, image, content }) => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, { id: Date.now().toString(), text: comment }]);
      setComment('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={image} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
      <Image source={image} style={styles.image} />

      <View style={styles.actions}>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Icon name={liked ? 'thumb-up' : 'thumb-up-outline'} size={24} color={liked ? '#1877F2' : '#000'} />
        </TouchableOpacity>
        <Icon name="comment-outline" size={24} />
        <Icon name="share-outline" size={24} />
      </View>

      {/* Comments List */}
      <View style={styles.commentSection}>
        {comments.map((item) => (
          <Text key={item.id} style={styles.commentText}>You: {item.text}</Text>
        ))}
      </View>

      {/* Add Comment Input */}
      <View style={styles.commentInputContainer}>
        <TextInput
          placeholder="Write a comment..."
          value={comment}
          onChangeText={setComment}
          style={styles.commentInput}
        />
        <TouchableOpacity onPress={handleAddComment}>
          <Icon name="send" size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  content: {
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 500,
    marginTop: 5,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  commentSection: {
    marginTop: 10,
  },
  commentText: {
    backgroundColor: '#f0f2f5',
    padding: 8,
    borderRadius: 8,
    marginVertical: 2,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default Post;
