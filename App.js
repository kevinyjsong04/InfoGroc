import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  // 0 - login, 1 - create acc, 2 - insert user stats, 3 - display user results
  const [currState, setCurrState] = useState([true, false, false, false]);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [invalidCreds, setInvalidCreds] = useState(false);

  const login = () => {
    let userAuthed = true;//set to false later
    //USER AUTH LOGIC GOES HERE
    if (userAuthed) {
      setCurrState([false, false, true, false]);
    } else {
      setInvalidCreds(true);
    }
  };

  const goToCreateAcc = () => {
    setCurrState([false, true, false, false]);
  }

  const createAcc = () => {
    //WRITE NEW USER LOGIN DATA TO DATABASE
    setCurrState([true, false, false, false]);
  }

  const goToDisplay = () => {
    //SEND, CALCULATE, RETRIEVE, UPDATE DISPLAYS HERE
    setCurrState([false, false, false, true]);
  }

  const logout = () => {
    setCurrState([true, false, false, false]);
  }

  const backToInputs = () => {
    setCurrState([false, false, true, false]);
  }

  return (
    <View style={styles.container}>
      <Modal animationType='slide' visible={currState[0]}>
        <Text style={styles.loginFiller}>.</Text>
        <Text style ={styles.title}>InfoGroc</Text>
        {invalidCreds && <Text style={styles.loginError}>Invalid credentials.</Text>}
        <TextInput
          style={styles.loginBoxes}
          placeholder="Username"
          onChangeText={(val) => setUser(val)}
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="Password"
          onChangeText={(val) => setPass(val)}
        />
        <TouchableOpacity style={styles.createAccLink} onPress={goToCreateAcc}> 
          <Text style={styles.createAccLinkText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={login}> 
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </Modal>
      <Modal animationType ="slide" visible={currState[1]}>
      <Text style={styles.loginFiller}>.</Text>
        <TextInput
          style={styles.loginBoxes}
          placeholder="Username"
          onChangeText={(val) => setUser(val)}
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="Password"
          onChangeText={(val) => setPass(val)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={createAcc}> 
          <Text style={styles.loginButtonText}>Create Account</Text>
        </TouchableOpacity>
      </Modal>
      <Modal animationType ="slide" visible={currState[2]}>
      <Text style={styles.inputFiller}>.</Text>
      <Text style={styles.inputBelow}>Enter info below:</Text>
        <TextInput
          style={styles.loginBoxes}
          placeholder="Income"
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="stuff"
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="stuff"
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="stuff"
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="stuff"
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="stuff"
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="stuff"
        />
        <TouchableOpacity style={styles.loginButton} onPress={goToDisplay}> 
          <Text style={styles.loginButtonText}>Go</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutLink} onPress={logout}> 
          <Text style={styles.createAccLinkText}>Logout</Text>
        </TouchableOpacity>
      </Modal>
      <Modal animationType ="slide" visible={currState[3]}>
      <Text style={styles.displayFiller}>.</Text>
      <Text style={styles.reportAbove}>Report:</Text>
        <Text>RETRIEVE from json here</Text>
        <TouchableOpacity style={styles.loginButton} onPress={backToInputs}> 
          <Text style={styles.loginButtonText}>Back</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 128,
    paddingBottom: 20,
  },
  loginFiller: {
    color: "#fff",
    marginVertical: 130,
  },
  inputFiller: {
    color: "#fff",
    marginVertical: 65,
  },
  displayFiller: {
    color: "#fff",
    marginVertical: 50,
  },
  inputBelow: {
    paddingHorizontal: 140,
  },
  reportAbove: {
    paddingHorizontal: 170,
  },
  loginError: {
    color: "#f00",
    fontSize: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 147,
    width: 100,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBoxes: {
    borderWidth: 2,
    borderColor: "#777",
    padding: 8,
    marginHorizontal: 40,
    marginVertical: 10,
    width: 300,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    marginTop: 8,
    marginHorizontal: 124,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#777',
    borderRadius: 8,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAccLink: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
  logoutLink: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  createAccLinkText: {
    color: '#00f',
    fontSize: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
