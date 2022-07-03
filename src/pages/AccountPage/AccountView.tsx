import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import CTextInput, { CTextInputType } from '../../components/CTextInput';
import colors from '../../utils/colors';
import staticTexts, { StaticTextType } from '../../staticTexts';

import { ProfileFormType } from './AccountScreen';
import { alphabetic, removeNotNumbers } from '../../methods/string';

const { account: $A }: StaticTextType = staticTexts;

interface IAccountViewProps {
  form: ProfileFormType;
  onChangeProfileInfo: (type: string, value: string) => void;
  onPressUpdate: () => void;
  error: boolean;
}

const AccountView: FC<IAccountViewProps> = ({
  form,
  onChangeProfileInfo,
  onPressUpdate,
  error
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.loginForm}>
          <CTextInput
            label={$A.FIRST_NAME}
            onChangeText={(value: string) =>
              onChangeProfileInfo('firstName', alphabetic(value))
            }
            value={form?.firstName || ''}
            type={CTextInputType.default}
            placeholder={$A.FIRST_NAME}
          />
          <CTextInput
            label={$A.LAST_NAME}
            onChangeText={(value: string) =>
              onChangeProfileInfo('lastName', alphabetic(value))
            }
            value={form?.lastName || ''}
            type={CTextInputType.default}
            placeholder={$A.LAST_NAME}
          />

          {error && <Text style={styles.errorContainer}>{$A.ERROR}</Text>}
          <TouchableOpacity style={styles.signUpButton} onPress={onPressUpdate}>
            <Text style={styles.signUpButtonText}>{$A.UPDATE}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountView;

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
