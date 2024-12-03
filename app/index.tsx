// import { Link } from "expo-router";
// import { Text, View, StyleSheet,Image} from "react-native";
// import logo from "C:\Users\UUSHA INFOTECH\Desktop\Loan Application\VidarbhaCentralLoan\src\Loan Image.jpg"

// export default function Index() {
//   return (
//     <View style={styles.container}>r
//       {/* Displaying the logo image */}
//       {/* //<Image src={logo}  /> */}
//       <Text style={styles.textBlue}>Vidarbha Loan Central</Text>
//       <Text style={styles.textBlack}>Where Service Matters</Text>
//       {/* Add a "Let's Get Started" button */}
//       <Link href="/SignUP" style={styles.button}>
//         Let's Get Started
//       </Link>
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//   },
//   textBlue: {
//     fontSize: 50,
//     color: "#0066cc", // Ensures the color is blue
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   textBlack: {
//     fontSize: 15,
//     color: "black",
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   button: {
//     fontSize: 20,
//     color: "white", // Button text color contrasts with the background
//     backgroundColor: "#2692ff", // Background color for the button
//     paddingVertical: 10, // Vertical padding for better click area
//     paddingHorizontal: 20, // Horizontal padding for better spacing
//     marginTop: 20,
//     borderRadius: 20, // Rounded corners with a radius of 10
//     textAlign: "center", // Ensures the text is centered within the button
//   },
// });

import { Link } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";

// Importing the logo using require
const logo1 = require("C:/Users/UUSHA INFOTECH/Desktop/Loan Application/VidarbhaCentralLoan/src/Loan Image.jpg");
const logo2 = require("C:/Users/UUSHA INFOTECH/Desktop/Loan Application/VidarbhaCentralLoan/src/logo-transparent.png");
export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={logo2} style={styles.logo1} />
     {/* <Text style={styles.textBlue}>Vidarbha Loan Central</Text> */}
      {/* <Text style={styles.textBlack}>Where Service Matters</Text> */}
      <Link href="./SignUP" style={styles.button}>
        Let's Get Started
      </Link>
      {/* Displaying the logo image */}
      <Image source={logo1} style={styles.logo2} />
      {/* Add a "Let's Get Started" button */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  logo1: {
    width: 400, // Adjust width as needed
    height: 300, // Adjust height as needed
    marginBottom:0,
    resizeMode: "contain", // Ensures the image fits within the given dimensions
    
  },
  
  logo2: {
    width: 400, // Adjust width as needed
    height: 400, // Adjust height as needed
    marginBottom: 20,
    resizeMode: "contain", // Ensures the image fits within the given dimensions
  },
  textBlue: {
    fontSize: 50,
    color: "#00356a", // Ensures the color is blue
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  textBlack: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    fontSize: 20,
    color: "white", // Button text color contrasts with the background
    backgroundColor: "#2692ff", // Background color for the button
    paddingVertical: 10, // Vertical padding for better click area
    paddingHorizontal: 20, // Horizontal padding for better spacing
    marginTop: 20,
    borderRadius: 20, // Rounded corners with a radius of 20
    textAlign: "center", // Ensures the text is centered within the button
  },
});
