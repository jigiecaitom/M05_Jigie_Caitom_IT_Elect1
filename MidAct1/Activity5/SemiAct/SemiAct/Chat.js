import React from 'react';
import { View, Text } from 'react-native';
import Disenyo from './Disenyo';

export default function Chat({ useraccount, mensahe }) {
  return (
    <View style={Disenyo.chatBox}>
      <Text style={Disenyo.user}>{useraccount}:</Text>
      <Text style={Disenyo.message}>{mensahe}</Text>
    </View>
  );
}