// src/components/TopBar.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const TopBar = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('home');

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      navigation.navigate('Home'); 
    } else if (tab === 'videos') {
      navigation.navigate('Video');
    } else if (tab === 'messages') {
      navigation.navigate('Messages'); 
    }
  };

  return (
    <View style={styles.wrapper}>
    
      <View style={styles.topSection}>
        <Text style={styles.logo}>My First App</Text>
        <View style={styles.searchContainer}>
          <Icon name="magnify" size={20} />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
      </View>

      <View style={styles.iconBar}>
        <TouchableOpacity onPress={() => handleNavigation('home')}>
          <Icon name="home" size={26} color={activeTab === 'home' ? '#1877F2' : '#666'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('videos')}>
          <Icon name="video" size={26} color={activeTab === 'videos' ? '#1877F2' : '#666'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('messages')}>
          <Icon name="facebook-messenger" size={26} color={activeTab === 'messages' ? '#1877F2' : '#666'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    elevation: 4,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1877F2',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f2f5',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  input: {
    marginLeft: 5,
    flex: 1,
  },
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default TopBar;
