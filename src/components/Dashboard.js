import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const stories = [
  { id: 1, name: 'you', image: require('../assets/images/image-1.jpg') },
  { id: 2, name: 'Jane', image: require('../assets/images/image-2.jpg') },
  { id: 3, name: 'Mark', image: require('../assets/images/image-3.jpg') },
];

const Dashboard = () => {
  return (
    <ScrollView horizontal style={styles.container} showsHorizontalScrollIndicator={false}>
      {stories.map(story => (
        <View key={story.id} style={styles.story}>
          <Image source={story.image} style={styles.image} />
          <Text style={styles.name}>{story.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  story: {
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  name: {
    fontSize: 12,
  }
});

export default Dashboard;
