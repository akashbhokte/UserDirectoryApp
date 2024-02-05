// components/CustomButton.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle} from 'react-native';

interface IButton {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
}

const Button = ({
  title = '',
  style = {},
  onPress = () => {},
  ...rest
}: IButton) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
