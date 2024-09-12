import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import { withDelay } from 'react-native-reanimated';



export default function App() {

  const time = useRef(new Date())
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [textSeconds, setTextSeconds] = useState("Appuyer 10 fois le plus vite possible");

  const handleNumberClicks = () => {
    
    if(numberOfClicks == 0){
      setNumberOfClicks(1);
      time.current = (new Date());
    }

    else if(numberOfClicks == 9){
      console.log("temps: " + (((new Date()) - time.current) / 1000))
      setNumberOfClicks(0);

      setTextSeconds("Vous avez appuyé 10 fois en " + ((new Date() - time.current) / 1000) + " secondes")
    }

    else{
      setNumberOfClicks(numberOfClicks + 1);
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.numberClicks}>{numberOfClicks}</Text>

      <View style={styles.informationContainer}>
        <Text style={styles.informationText}>{textSeconds}</Text>
        <TouchableOpacity style={styles.clickButton} onPress={handleNumberClicks}>
          <Text style={styles.clickButtonText}>Appuyez sur moi</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center', //
  },

  numberClicks: {
    fontSize: 60,
  },

  informationContainer: {
    marginTop: 150
  },

  informationText: {
    
  },

  clickButton: {
    paddingVertical: 30,
    backgroundColor: "#ff4d4d",
    borderRadius: 10,
    marginTop: 20,
    width: Dimensions.get("window").width / 2,
    alignSelf: 'center'
  },

  clickButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fff",
    textAlign:"center",
  }
});
