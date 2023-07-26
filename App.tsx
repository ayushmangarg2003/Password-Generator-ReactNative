/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(8, "Minimum Length is 8")
    .max(20, "Maximum Length is 20")
    .required("Enter the Length of Password")
});

export default function App() {

  const [password, setPassword] = useState('');

  const [isPassGen, setIsPassGen] = useState(false);

  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = (passwordLength: number) => {
    let characterList = ''

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const digitChars = '0123456789'
    const specialChars = '!@#$%&*/><.[]{}()-+'

    if (uppercase) {
      characterList += uppercaseChars
    }
    if (lowercase) {
      characterList += lowercaseChars
    }
    if (numbers) {
      characterList += digitChars
    }
    if (symbols) {
      characterList += specialChars
    }

    const FinalPassword = createPassword(characterList, passwordLength)
    setPassword(FinalPassword)
    setIsPassGen(true)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  const resetPasswordStates = () => {
    setPassword('')
    setIsPassGen(false)
    setLowercase(true)
    setUppercase(false)
    setNumbers(false)
    setSymbols(false)
  }



  return (
    <View>
      <Text>App</Text>
    </View>
  )
};

const styles = StyleSheet.create({});