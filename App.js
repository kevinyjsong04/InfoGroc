import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const data = require("./data.json");

  // 0 - login, 1 - create acc, 2 - insert user stats, 3 - display user results
  const [currState, setCurrState] = useState([true, false, false, false]);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [invalidCreds, setInvalidCreds] = useState(false);

  const [incomeIn, setIncomeIn] = useState(0);
  const [wineIn, setWineIn] = useState(0);
  const [fruitIn, setFruitIn] = useState(0);
  const [meatIn, setMeatIn] = useState(0);
  const [fishIn, setFishIn] = useState(0);
  const [miscIn, setMiscIn] = useState(0);

  const [incomePct, setIncomePct] = useState(0);
  const [winePct, setWinePct] = useState(0);
  const [fruitPct, setFruitPct] = useState(0);
  const [meatPct, setMeatPct] = useState(0);
  const [fishPct, setFishPct] = useState(0);
  const [miscPct, setMiscPct] = useState(0);
  const [totalPct, setTotalPct] = useState(0);

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

  const binarySearch = (arr, targ) => {
    let l = 0;
    let r = arr.length-1;
    let mid;
    while (l <= r) {
      mid = Math.floor((l+r)/2);
      if (arr[mid] == targ) {
        return mid;
      } else if (arr[mid] > targ) {
        r = mid-1;
      } else {
        l = mid+1;
      }
    }
    return mid;
  }

  const goToDisplay = () => {
    let index = binarySearch(data.incomes, incomeIn);
    setIncomePct(Math.floor((index / data.incomes.length) * 100));
    index = binarySearch(data.wine, wineIn);
    setWinePct(Math.floor((index / data.wine.length) * 100));
    index = binarySearch(data.fruits, fruitIn);
    setFruitPct(Math.floor((index / data.fruits.length) * 100));
    index = binarySearch(data.meats, meatIn);
    setMeatPct(Math.floor((index / data.meats.length) * 100));
    index = binarySearch(data.fish, fishIn);
    setFishPct(Math.floor((index / data.fish.length) * 100));
    index = binarySearch(data.misc, miscIn);
    setMiscPct(Math.floor((index / data.misc.length) * 100));
    index = binarySearch(data.total, wineIn+fruitIn+meatIn+fishIn+miscIn);
    setTotalPct(Math.floor((index / data.total.length) * 100));
    setCurrState([false, false, false, true]);
  }

  const logout = () => {
    setUser("");
    setPass("");
    setCurrState([true, false, false, false]);
  }

  const backToInputs = () => {
    setIncomeIn(0);
    setWineIn(0);
    setFruitIn(0);
    setMeatIn(0);
    setFishIn(0);
    setMiscIn(0);
    setTotalIn(0);
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
      <Text style={styles.inputBelow}>Enter $ spent per trip:</Text>
        <TextInput
          style={styles.loginBoxes}
          placeholder="Annual Income"
          onChangeText={(val) => setIncomeIn(val)}
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="Wine"
          onChangeText={(val) => setWineIn(val)}
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="Fruits"
          onChangeText={(val) => setFruitIn(val)}
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="Meat"
          onChangeText={(val) => setMeatIn(val)}
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="Fish"
          onChangeText={(val) => setFishIn(val)}
        />
        <TextInput
          style={styles.loginBoxes}
          placeholder="Miscellaneous"
          onChangeText={(val) => setMiscIn(val)}
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
        <Text style={styles.reportItem}>You are in the {incomePct}th percentile of incomes.</Text>
        <Text style={styles.reportItem}>You spend in the {winePct}th percentile for wine.</Text>
        <Text style={styles.reportItem}>You spend in the {fruitPct}th percentile for fruits.</Text>
        <Text style={styles.reportItem}>You spend in the {meatPct}th percentile for meats.</Text>
        <Text style={styles.reportItem}>You spend in the {fishPct}th percentile for fish.</Text>
        <Text style={styles.reportItem}>You are in the {miscPct}th percentile for miscellaneous costs.</Text>
        <Text style={styles.reportItem}>You are in the {totalPct}th percentile for total costs.</Text>
        <TouchableOpacity style={styles.backButton} onPress={backToInputs}> 
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
  reportItem: {
    marginVertical: 15,
    paddingHorizontal: 60,
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
    marginVertical: 75,
  },
  displayFiller: {
    color: "#fff",
    marginVertical: 65,
  },
  inputBelow: {
    marginHorizontal: 120,
    marginBottom: 15,
  },
  reportAbove: {
    paddingHorizontal: 168,
    fontWeight: 'bold',
    marginBottom: 30,
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
  backButton: {
    marginTop: 20,
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