import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";

export default function Messenger() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Set your profile picture
  const userAvatar = "https://i.pravatar.cc/150?img=5";
  const friendAvatar = "https://i.pravatar.cc/150?img=12";

  const flatListRef = useRef();

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user", // "user" or "friend"
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Optional: simulate friend reply
    // Comment this out if you don't want automatic replies
    setTimeout(() => {
      const friendMessage = {
        id: (Date.now() + 1).toString(),
        text: "Hello! I received your message 😊",
        sender: "friend",
      };
      setMessages((prev) => [...prev, friendMessage]);
    }, 1500);
  };

  const renderItem = ({ item }) => {
    const isUser = item.sender === "user";
    return (
      <View
        style={[
          styles.messageContainer,
          isUser ? styles.userMessageContainer : styles.friendMessageContainer,
        ]}
      >
        {!isUser && <Image source={{ uri: friendAvatar }} style={styles.avatar} />}
        <View style={[styles.bubble, isUser ? styles.userBubble : styles.friendBubble]}>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
        {isUser && <Image source={{ uri: userAvatar }} style={styles.avatar} />}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10 }}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 5,
    maxWidth: "80%",
  },
  userMessageContainer: {
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  friendMessageContainer: {
    alignSelf: "flex-start",
    justifyContent: "flex-start",
  },
  bubble: {
    borderRadius: 15,
    padding: 10,
  },
  userBubble: {
    backgroundColor: "#DCF8C6",
    marginLeft: 5,
  },
  friendBubble: {
    backgroundColor: "#fff",
    marginRight: 5,
  },
  messageText: {
    fontSize: 16,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    backgroundColor: "#f9f9f9",
  },
  sendButton: {
    backgroundColor: "#0b93f6",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sendText: {
    color: "#fff",
    fontWeight: "bold",
  },
});