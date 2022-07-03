import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import CTextInput, { CTextInputType } from '../../components/CTextInput';

import staticTexts, { StaticTextType } from '../../staticTexts';

import colors from '../../utils/colors';

import { alphabetic } from '../../methods/string';

import { SignUpFormType } from './SignUpScreen';

const { signUp: $S }: StaticTextType = staticTexts;
interface ISignUpViewProps {
  form: SignUpFormType;
  onChangeLoginInfo: (type: string, value: string) => void;
  onPressSignUp: () => void;
  error: boolean;
}
const SignUpView: FC<ISignUpViewProps> = ({
  form,
  onChangeLoginInfo,
  onPressSignUp,
  error
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.loginForm}>
          <CTextInput
            onChangeText={(value: string) =>
              onChangeLoginInfo('firstName', alphabetic(value))
            }
            value={form?.firstName || ''}
            type={CTextInputType.default}
            placeholder={$S.FIRST_NAME_PLACEHOLDER}
            label={$S.FIRST_NAME_PLACEHOLDER}
          />
          <CTextInput
            onChangeText={(value: string) =>
              onChangeLoginInfo('lastName', alphabetic(value))
            }
            value={form?.lastName || ''}
            type={CTextInputType.default}
            placeholder={$S.LAST_NAME_PLACEHOLDER}
            label={$S.LAST_NAME_PLACEHOLDER}
          />
          <CTextInput
            onChangeText={(value: string) => onChangeLoginInfo('email', value)}
            value={form?.email || ''}
            type={CTextInputType.email}
            placeholder={$S.EMAIL_PLACEHOLDER}
            label={$S.EMAIL_PLACEHOLDER}
          />
          <CTextInput
            onChangeText={(value: string) =>
              onChangeLoginInfo('password', value)
            }
            value={form?.password || ''}
            type={CTextInputType.password}
            placeholder={$S.PASSWORD_PLACEHOLDER}
            label={$S.PASSWORD_PLACEHOLDER}
          />

          {error && <Text style={styles.errorContainer}>{$S.ERROR}</Text>}
          <TouchableOpacity style={styles.signUpButton} onPress={onPressSignUp}>
            <Text style={styles.signUpButtonText}>{$S.SIGN_UP}</Text>
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
    backgroundColor: colors.black,
    marginBottom: 15
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  errorContainer: {
    alignSelf: 'center',
    color: colors.decrease,
    fontSize: 13,
    marginBottom: 12
  }
});
export default SignUpView;
