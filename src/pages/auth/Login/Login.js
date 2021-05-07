import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './Login.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  function handleSignUp() {
    navigation.navigate('SignPage');
  }

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });

      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.usermail}
              onType={handleChange('usermail')}
              placeholder="e-postanızı giriniz.."
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              placeholder="şifrenizi giriniz.."
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
    </SafeAreaView>
  );
};

export default Login;
