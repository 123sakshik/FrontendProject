import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet, Button} from "react-native";

export default function NotFoundScreen() {
  return (
     <>
     <Stack.Screen options={{title:"Oops Not Found"}}/>
     <View style={styles.container}
    >
        <Link href="/" style={styles.button}>
        Go Back To Your Screen!
        </Link>
        </View>
        </>
        );
    }

const styles = StyleSheet.create({
  container:{flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor:'#FFFFFF',
  },
  Text:{fontSize: 20, 
    color: 'black'
  },
  button:{
    fontSize: 20,
    textDecorationLine: "underline",
    color:"black"
  }
});