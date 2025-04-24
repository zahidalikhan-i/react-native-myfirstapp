import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VideoScreen = () => {
  const handleUpload = () => {
    // You can integrate react-native-image-picker or document-picker here
    alert('Upload feature coming soon...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upload Your Video</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
        <Icon name="cloud-upload" size={30} color="#fff" />
        <Text style={styles.uploadText}>Upload Video</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1877F2',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  uploadText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default VideoScreen;
