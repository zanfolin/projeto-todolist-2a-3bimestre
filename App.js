import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "./assets/icon_todo_list.png";
import { useState } from "react";
import btnAdd from "./assets/plus.png";
import { FlashList } from "@shopify/flash-list";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const handleAdd = () => {
    //Alert.alert(tarefa);
    setTarefas([tarefa, ...tarefas]);
    setTarefa("");
  };

  //Já importei o Flashlist e agora tem que usar

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
        <Text>TODO List</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Entre com a tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity onPress={handleAdd}>
          <Image source={btnAdd} style={styles.btnAdd} />
        </TouchableOpacity>
      </View>
      <View>
        <FlashList
          data={tarefas}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  logo: {
    height: 128,
    width: 128,
  },
  btnAdd: {
    width: 32,
    height: 32,
  },
  viewInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  viewTarefas: {
    width: "100%",
    flex: 1
  }
});
