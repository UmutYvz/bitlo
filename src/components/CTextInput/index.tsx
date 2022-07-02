import React, { FC, useState, useRef, RefObject, memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Platform,
  findNodeHandle
} from 'react-native';
import SecureTextEntry from '../../assets/icons/SecureTextEntry';

const padding = 16;

export enum CTextInputType {
  default,
  email,
  password,
  phone
}

export interface IFTTextInputProps {
  label?: string;
  type?: CTextInputType;
  onChangeText: (text: string) => void;
  value: string;
  textInputStyle?: ViewStyle | TextStyle;
  prefix?: string;
  placeholder?: string;
}

const CTextInput: FC<IFTTextInputProps> = ({
  label,
  type = CTextInputType.default,
  onChangeText,
  value = '',
  textInputStyle = {},
  prefix = '',
  placeholder = ''
}) => {
  const [isHide, setIsHide] = useState(type === CTextInputType.password);

  return (
    <View style={styles.container}>
      {!!label?.length && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}

      <View style={styles.innerContainer}>
        {!!prefix?.length && (
          <View style={styles.prefixContainer}>
            <Text style={styles.prefixText}>{prefix}</Text>
          </View>
        )}
        <TextInput
          placeholder={placeholder}
          autoCapitalize={
            type === CTextInputType.email || type === CTextInputType.password
              ? 'none'
              : 'sentences'
          }
          value={value}
          onChangeText={onChangeText}
          autoCorrect={false}
          maxLength={type === CTextInputType.phone ? 15 : undefined}
          numberOfLines={1}
          multiline={false}
          textAlignVertical='center'
          keyboardType={
            type === CTextInputType.phone
              ? 'number-pad'
              : type === CTextInputType.email
              ? 'email-address'
              : Platform.OS === 'ios'
              ? 'ascii-capable'
              : 'default'
          }
          style={styles.textInput}
          selectionColor={Platform.OS === 'android' ? 'red' : 'blue'}
          secureTextEntry={isHide}
        />

        {type === CTextInputType.password && (
          <TouchableOpacity
            onPress={() => {}}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          >
            <SecureTextEntry size={16} fill='black' />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 18
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10
  },
  labelContainer: {
    marginBottom: 6
  },
  label: {
    fontWeight: 'bold',
    fontSize: 13
  },
  textInput: {
    flex: 1,
    fontSize: 14
  },
  prefixContainer: {
    paddingRight: 16,
    marginRight: 11,
    borderRightWidth: 1
  },
  prefixText: {
    fontWeight: 'bold'
  }
});

export default memo(CTextInput);
