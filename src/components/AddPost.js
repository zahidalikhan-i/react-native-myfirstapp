import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddPost = ({ onPost }) => {
  const [text, setText] = useState('');
  const [inputHeight, setInputHeight] = useState(60); 

  const handlePost = () => {
    if (text.trim()) {
      onPost({
        name: 'You',
        content: text,
        image: null,
        id: Date.now().toString(),
      });
      setText('');
      setInputHeight(60); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { height: Math.max(60, inputHeight) }]}
        placeholder="What's on your mind?"
        value={text}
        onChangeText={setText}
        multiline
        onContentSizeChange={(e) =>
          setInputHeight(e.nativeEvent.contentSize.height + 10)
        }
      />
      <Button title="Post" onPress={handlePost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    textAlignVertical: 'top',
  },
});

export default AddPost;
