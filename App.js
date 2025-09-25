import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim().length > 0) {
      setMessages([...messages, { id: Date.now().toString(), text: input }]);
      setInput("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messenger App</Text>

      <FlatList
        style={{ width: "100%", marginVertical: 20 }}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Text style={styles.btnText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  inputRow: { flexDirection: "row", alignItems: "center", width: "100%" },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginRight: 10 },
  sendBtn: { backgroundColor: "green", padding: 12, borderRadius: 8 },
  btnText: { color: "white", fontSize: 16, fontWeight: "bold" },
  messageBubble: { backgroundColor: "lightgray", padding: 10, borderRadius: 8, marginBottom: 10 },
  messageText: { fontSize: 16 },
});
