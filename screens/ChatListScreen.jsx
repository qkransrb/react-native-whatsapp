import { View, Text, StyleSheet, Button } from "react-native";

const ChatListScreen = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <Text>ChatListScreen</Text>

      <Button
        title="Go to chat screen"
        onPress={() => navigate("ChatScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatListScreen;
