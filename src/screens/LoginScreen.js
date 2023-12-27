import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {authenticateUser} from '../utils/auth';
import ModalComponent from '../components/Modal';
import {useAuth} from '../context/AuthContext';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalMessage, setErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const {login, isAuthenticated} = useAuth();

  const navigation = useNavigation();

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Home');
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    const isAuthenticated = authenticateUser(username, password);
    if (isAuthenticated) {
      login();
      navigation.navigate('Home');
    } else {
      setErrorMessage('Invalid username or password'); // Set error message
      setModalVisible(true); // Show modal
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setErrorMessage('');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 1, marginHorizontal: 22}}>
        <View style={{marginVertical: 22}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 12,
              color: COLORS.black,
            }}>
            Hi Welcome Back ! 👋
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: COLORS.black,
            }}>
            Hello again you have been missed!
          </Text>
        </View>

        <View style={{marginBottom: 12}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}>
            Username
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}>
            <TextInput
              placeholder="Enter your username"
              placeholderTextColor={COLORS.black}
              style={{
                width: '100%',
              }}
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>
        </View>

        <View style={{marginBottom: 12}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}>
            Password
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={true}
              style={{
                width: '100%',
              }}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
        </View>

        <Button
          title="Login"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={handleLogin}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 22,
          }}>
          <Text style={{fontSize: 16, color: COLORS.black}}>
            Don't have an account ?{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: 'bold',
                marginLeft: 6,
              }}>
              Register
            </Text>
          </Pressable>
        </View>
        {/* ErrorModal component */}
        <ModalComponent
          visible={modalVisible}
          message={modalMessage}
          onClose={closeModal}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
