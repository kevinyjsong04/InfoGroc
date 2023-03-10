import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
//import fire from "./components/fire";
//import { Register } from './components/auth/Register.js';
import * as Progress from 'react-native-progress';

const validatePassword = (email, password, confirmPassword) => 
    {
  
        // Checks if password is blank, or if passwords do not match, or if password is shorter than 6 characters
        if (password == '') {
            alert("Password cannot be blank!")
            return false;
        }
        else if (password != confirmPassword) {
            alert("Your passwords do not match!");
            return false;
        }
        else if (password.length < 6) {
            alert("Password must be more than 6 characters.");
            return false;
        } else {
          return true;
        }

    }

    var loginUserPool = [];
    var loginPassPool = [];

export default function App() {

  const data = require("./SpendingDictionary.json");

  // 0 - login, 1 - create acc, 2 - insert user stats, 3 - display user results
  const [currState, setCurrState] = useState([true, false, false, false]);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [invalidCreds, setInvalidCreds] = useState(false);

  const [incomeIn, setIncomeIn] = useState(-1);
  const [wineIn, setWineIn] = useState(-1);
  const [fruitIn, setFruitIn] = useState(-1);
  const [meatIn, setMeatIn] = useState(-1);
  const [fishIn, setFishIn] = useState(-1);
  const [miscIn, setMiscIn] = useState(-1);

  const [incomePct, setIncomePct] = useState(0);
  const [winePct, setWinePct] = useState(0);
  const [fruitPct, setFruitPct] = useState(0);
  const [meatPct, setMeatPct] = useState(0);
  const [fishPct, setFishPct] = useState(0);
  const [miscPct, setMiscPct] = useState(0);
  const [totalPct, setTotalPct] = useState(0);

  const login = () => {
    let userAuthed = false;
    if (loginUserPool.includes(user) && loginPassPool.includes(pass)){
      userAuthed = true;
    }
    if (userAuthed) {
      setCurrState([false, false, true, false]);
    } else {
      setInvalidCreds(true);
    }
  };

  const goToCreateAcc = () => {
    setUser("");
    setPass("");
    setCurrState([false, true, false, false]);
  }

  const createAcc = () => {
    if (validatePassword(user, pass, pass)) {
      loginUserPool.push(user);
      loginPassPool.push(pass);
    }
    setUser("");
    setPass("");
    setInvalidCreds(false);
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
    let index = binarySearch(data.Income, parseInt(incomeIn));
    setIncomePct(Math.floor((index / data.Income.length) * 100));
    index = binarySearch(data.Wine, parseInt(wineIn));
    setWinePct(Math.floor((index / data.Wine.length) * 100));
    index = binarySearch(data.Fruit, parseInt(fruitIn));
    setFruitPct(Math.floor((index / data.Fruit.length) * 100));
    index = binarySearch(data.Meat, parseInt(meatIn));
    setMeatPct(Math.floor((index / data.Meat.length) * 100));
    index = binarySearch(data.Fish, parseInt(fishIn));
    setFishPct(Math.floor((index / data.Fish.length) * 100));
    index = binarySearch(data.Miscellaneous, parseInt(miscIn));
    setMiscPct(Math.floor((index / data.Miscellaneous.length) * 100));
    index = binarySearch(data.TotalSpent, parseInt(wineIn)+parseInt(fruitIn)+parseInt(meatIn)+parseInt(fishIn)+parseInt(miscIn));
    setTotalPct(Math.floor((index / data.TotalSpent.length) * 100));
    setCurrState([false, false, false, true]);
  }

  const logout = () => {
    setUser("");
    setPass("");
    setInvalidCreds(false);
    setCurrState([true, false, false, false]);
  }

  const backToInputs = () => {
    setIncomeIn(-1);
    setWineIn(-1);
    setFruitIn(-1);
    setMeatIn(-1);
    setFishIn(-1);
    setMiscIn(-1);
    setCurrState([false, false, true, false]);
  }


  return (
    <View style={styles.container}>
      <Modal animationType='slide' visible={currState[0]}>
        <Text style={styles.loginFiller}>.</Text>
        <Image style={styles.img}source={require("./InfoGrocLogo.png")}></Image>
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
        <Progress.Bar style ={styles.bars} progress={incomePct/100} width={200} color={'#ebd234'} />
        <Text style={styles.reportItem}>You spend in the {winePct}th percentile for wine.</Text>
        <Progress.Bar style ={styles.bars} progress={winePct/100} width={200} color={'#8100b0'} />
        <Text style={styles.reportItem}>You spend in the {fruitPct}th percentile for fruits.</Text>
        <Progress.Bar style ={styles.bars} progress={fruitPct/100} width={200} color={'#2bff00'} />
        <Text style={styles.reportItem}>You spend in the {meatPct}th percentile for meats.</Text>
        <Progress.Bar style ={styles.bars} progress={meatPct/100} width={200} color={'#cc000e'} />
        <Text style={styles.reportItem}>You spend in the {fishPct}th percentile for fish.</Text>
        <Progress.Bar style ={styles.bars} progress={fishPct/100} width={200} color={'#009dff'} />
        <Text style={styles.reportItem}>You are in the {miscPct}th percentile for miscellaneous costs.</Text>
        <Progress.Bar style ={styles.bars} progress={miscPct/100} width={200} color={'#b85c00'} />
        <Text style={styles.reportItem}>You are in the {totalPct}th percentile for total costs.</Text>
        <Progress.Bar style ={styles.bars} progress={totalPct/100} width={200} color={'#ffda5e'} />
        <TouchableOpacity style={styles.backButton} onPress={backToInputs}> 
          <Text style={styles.loginButtonText}>Back</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    marginLeft: 125,
    marginBottom: 20,
    marginTop: -140,
  },
  bars: {
    marginLeft: 94,
  },
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
    marginVertical: 55,
  },
  inputBelow: {
    marginHorizontal: 120,
    marginBottom: 15,
  },
  reportAbove: {
    paddingHorizontal: 165,
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
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
    marginTop: 30,
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