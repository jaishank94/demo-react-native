import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../context/AuthContext';

const HomeScreen = () => {
  const navigation = useNavigation();

  const {isAuthenticated, logout} = useAuth();

  const handleLogout = () => {
    logout();
    navigation.navigate('Welcome');
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate('Welcome');
    }
  }, [isAuthenticated]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome! You're logged in.</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
