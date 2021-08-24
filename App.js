import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import * as SMS from 'expo-sms';

export default function App() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [bodySMS, setBodySMS] = useState('');

  const sendSMS = async () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length < 10) {
      alert('Enter a valid number');
      return;
    } else if (bodySMS.length == 0) {
      alert('SMS Body is empty');
      return;
    } else {
      // Collects phone number and SMS Body and sends via expo-sms
      await SMS.sendSMSAsync(mobileNumber, bodySMS);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container} style={{ marginVertical: 10 }}>
        <Text style={styles.title}>Enter Mobile Number</Text>
        <TextInput
          value={mobileNumber}
          onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
          placeholder={'Phone (+91)1234567890'}
          keyboardType={'phone-pad'}
          maxLength={13}
          style={styles.inputPhone}
        />
        <Text style={styles.title}>Enter SMS Body</Text>
        <TextInput
          placeholder={'Enter SMS Body (Max 255 Characters)'}
          maxLength={255}
          multiline
          numberOfLines={4}
          value={bodySMS}
          onChangeText={(bodySMS) => setBodySMS(bodySMS)}
          style={styles.inputMessage}
        />
        <Button title="Send" color="#841584" onPress={sendSMS} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95a5a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputPhone: {
    fontSize: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  inputMessage: {
    fontSize: 20,
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
