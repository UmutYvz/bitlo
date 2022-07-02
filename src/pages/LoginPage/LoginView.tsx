import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React, { FC } from 'react';

import staticTexts from '../../staticTexts';

import { FormType } from './LoginScreen';
import CTextInput, { CTextInputType } from '../../components/CTextInput';
import colors from '../../utils/colors';

const { login: $L } = staticTexts;

interface ILoginViewProps {
  form: FormType;
  onChangeLoginInfo: (type: string, value: string) => void;
  onPressSignUp: () => void;
  onPressLogin: () => void;
  error: boolean;
}

const LoginView: FC<ILoginViewProps> = ({
  form,
  onChangeLoginInfo,
  onPressSignUp,
  onPressLogin,
  error
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.loginForm}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleContent}>{$L.LOGIN}</Text>
          </View>
          <CTextInput
            onChangeText={(value: string) => onChangeLoginInfo('email', value)}
            value={form?.email || ''}
            type={CTextInputType.email}
            placeholder={$L.EMAIL_PLACEHOLDER}
          />
          <CTextInput
            onChangeText={(value: string) =>
              onChangeLoginInfo('password', value)
            }
            value={form?.password || ''}
            type={CTextInputType.password}
            placeholder={$L.PASSWORD_PLACEHOLDER}
          />
          {error && <Text style={styles.errorContainer}>Bir Hata Oluştu</Text>}

          <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
            <Text style={styles.loginButtonText}>{$L.LOGIN}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButton} onPress={onPressSignUp}>
            <Text style={styles.signUpButtonText}>{$L.SIGN_UP}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    paddingHorizontal: 10
  },
  loginForm: {
    padding: 10,
    backgroundColor: 'white',
    paddingVertical: 20,
    borderColor: '#DEDEDE',
    borderWidth: 0.5
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleContainer: {
    marginBottom: 20
  },
  titleContent: {
    color: colors.black,
    fontSize: 16,
    textAlign: 'center'
  },
  loginButton: {
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.black,
    marginBottom: 15
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  signUpButton: {
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 15
  },
  signUpButtonText: {
    color: colors.black,
    fontWeight: 'bold'
  },
  errorContainer: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 18,
    marginBottom: 12
  }
});

export default LoginView;
