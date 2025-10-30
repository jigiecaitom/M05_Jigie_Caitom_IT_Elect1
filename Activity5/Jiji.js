import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import Disenyo from './Disenyo';
import Chat from './Chat';

export default function App() {
  const [suwat, setSuwat] = useState('');

  return (
    <View style={Disenyo.container}>
      <TextInput
        placeholder="Kinsa ka?"
        onChangeText={(text) => setSuwat(text)}
        style={Disenyo.shoutbox}
      />

      <Text style={Disenyo.text}>
        Chatbox ni {suwat}
      </Text>

      <Chat useraccount="James" mensahe="My muya lab na..." />
      <Chat useraccount="Ryan" mensahe="Uy ang kwarta ilisi na" />
      <Chat useraccount="Shiela" mensahe="Hi!" />
    </View>
  );
}