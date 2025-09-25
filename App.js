import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [activeApp, setActiveApp] = useState("menu");

  // ---------------- COUNTER APP ----------------
  const CounterApp = () => {
    const [count, setCount] = useState(0);
    const [bgColor, setBgColor] = useState("white");

    return (
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={styles.title}>Counter App</Text>
        <Text style={styles.counter}>{count}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.btnText}>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => setCount(count - 1)}
          >
            <Text style={styles.btnText}>-1</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.colorContainer}>
          <TouchableOpacity
            style={styles.colorBtn}
            onPress={() => setBgColor("white")}
          >
            <Text style={styles.colorText}>WHITE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.colorBtn}
            onPress={() => setBgColor("lightblue")}
          >
            <Text style={styles.colorText}>LIGHT BLUE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.colorBtn}
            onPress={() => setBgColor("lightgreen")}
          >
            <Text style={styles.colorText}>LIGHT GREEN</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.backBtn} onPress={() => setActiveApp("menu")}>
          <Text style={styles.backText}>⬅ Back</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // ---------------- MESSENGER APP ----------------
  const MessengerApp = () => {
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

        <TouchableOpacity style={styles.backBtn} onPress={() => setActiveApp("menu")}>
          <Text style={styles.backText}>⬅ Back</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // ---------------- MENU ----------------
  if (activeApp === "counter") return <CounterApp />;
  if (activeApp === "messenger") return <MessengerApp />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an App</Text>
      <TouchableOpacity style={styles.menuBtn} onPress={() => setActiveApp("counter")}>
        <Text style={styles.menuText}>Counter App</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuBtn} onPress={() => setActiveApp("messenger")}>
        <Text style={styles.menuText}>Messenger App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  // Counter styles
  counter: { fontSize: 50, fontWeight: "bold", marginBottom: 20 },
  buttonRow: { flexDirection: "row", marginBottom: 30 },
  counterBtn: { backgroundColor: "black", padding: 15, marginHorizontal: 10, borderRadius: 10 },
  btnText: { color: "white", fontSize: 16, fontWeight: "bold" },
  colorContainer: { alignItems: "center" },
  colorBtn: { backgroundColor: "dodgerblue", padding: 10, borderRadius: 8, marginVertical: 5, width: 150, alignItems: "center" },
  colorText: { color: "white", fontSize: 16, fontWeight: "bold" },
  // Messenger styles
  inputRow: { flexDirection: "row", alignItems: "center", width: "100%" },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginRight: 10 },
  sendBtn: { backgroundColor: "green", padding: 12, borderRadius: 8 },
  messageBubble: { backgroundColor: "lightgray", padding: 10, borderRadius: 8, marginBottom: 10 },
  messageText: { fontSize: 16 },
  // Menu + Back
  menuBtn: { backgroundColor: "dodgerblue", padding: 15, borderRadius: 10, marginVertical: 10, width: 200, alignItems: "center" },
  menuText: { color: "white", fontSize: 18, fontWeight: "bold" },
  backBtn: { position: "absolute", top: 40, left: 20, backgroundColor: "black", padding: 10, borderRadius: 8 },
  backText: { color: "white", fontWeight: "bold" },
});
