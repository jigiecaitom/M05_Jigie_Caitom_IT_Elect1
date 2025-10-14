import { StyleSheet } from 'react-native';

const Disenyo = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  shoutbox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chatBox: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#e6e6e6',
    padding: 8,
    borderRadius: 5,
  },
  user: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  message: {
    fontSize: 14,
  },
});

export default Disenyo;