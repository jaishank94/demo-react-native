import React from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';

const TextInput = ({value, onChangeText, placeholder, secureTextEntry}) => {
  return (
    <RNTextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  // Styles for the TextInput
});

export default TextInput;
