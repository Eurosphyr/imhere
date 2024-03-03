import { Text, View } from "react-native"

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#131016"
    
    }}>
      <Text key="1" style={{
        color: "#FDFCFE",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48
      }}>Nome do evento</Text>
      <Text key="2" style={{
        color: "#6B6B6B",
        fontSize: 16,
        fontWeight: "bold"
      
      }}>Segunda, 4 de Março de 2024.</Text>
    </View>
  )

}