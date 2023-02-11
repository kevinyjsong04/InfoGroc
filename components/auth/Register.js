// //import AuthTextInput from '../AuthTextInput';
// import { Component } from 'react';
// import { StyleSheet } from 'react-native';

// export default class Register extends Component {

//     constructor(props) 
//     {
//         super(props);
  
//         // Sets the state of email, password, and confirmPassword by default to empty strings
//         this.state = {
//             email: '',
//             password: '',
//             confirmPassword: '',
//         }
//     }
  
//     // function validatePassword() - validates that the 2 passwords entered by the user match
//     validatePassword = () => 
//     {
//         // Destructure email, password, and confirmPassword from the components state
//         const { email, password, confirmPassword } = this.state;
  
//         // Checks if password is blank, or if passwords do not match, or if password is shorter than 6 characters
//         if (password == '') {
//             alert("Password cannot be blank!")
//         }
//         else if (password != confirmPassword) {
//             alert("Your passwords do not match!");
//         }
//         else if (password.length < 6) {
//             alert("Password must be more than 6 characters.");
//         }
//         else {
//             // Navigate the user to CreateProfile page if password is valid
//             this.props.navigation.navigate("CreateProfile", {email: email, password: password});
//         }

//     }
//     render() {
//         const {navigation} = this.props;
//         return (<Modal animationType ="slide" visible={currState[1]}>
//         <Text style={styles.loginFiller}>.</Text>
//           <TextInput
//             style={styles.loginBoxes}
//             placeholder="Username"
//             onChangeText={(val) => setUser(val)}
//           />
//           <TextInput
//             style={styles.loginBoxes}
//             placeholder="Password"
//             onChangeText={(val) => setPass(val)}
//           />
//           <TouchableOpacity style={styles.loginButton} onPress={createAcc}> 
//             <Text style={styles.loginButtonText}>Create Account</Text>
//           </TouchableOpacity>
//         </Modal>)
//     }
// }

    

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   reportItem: {
//     marginVertical: 15,
//     paddingHorizontal: 60,
//   },
//   title: {
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 32,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 128,
//     paddingBottom: 20,
//   },
//   loginFiller: {
//     color: "#fff",
//     marginVertical: 130,
//   },
//   inputFiller: {
//     color: "#fff",
//     marginVertical: 75,
//   },
//   displayFiller: {
//     color: "#fff",
//     marginVertical: 65,
//   },
//   inputBelow: {
//     marginHorizontal: 120,
//     marginBottom: 15,
//   },
//   reportAbove: {
//     paddingHorizontal: 168,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   loginError: {
//     color: "#f00",
//     fontSize: 11,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 147,
//     width: 100,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loginBoxes: {
//     borderWidth: 2,
//     borderColor: "#777",
//     padding: 8,
//     marginHorizontal: 40,
//     marginVertical: 10,
//     width: 300,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loginButton: {
//     marginTop: 8,
//     marginHorizontal: 124,
//     paddingVertical: 8,
//     borderWidth: 2,
//     borderColor: '#777',
//     borderRadius: 8,
//     backgroundColor: '#333',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   backButton: {
//     marginTop: 20,
//     marginHorizontal: 124,
//     paddingVertical: 8,
//     borderWidth: 2,
//     borderColor: '#777',
//     borderRadius: 8,
//     backgroundColor: '#333',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   createAccLink: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 4,
//   },
//   logoutLink: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 20,
//   },
//   createAccLinkText: {
//     color: '#00f',
//     fontSize: 11,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });