import AuthTextInput from '../AuthTextInput';
import fire from '../fire'

export default class Login extends Component {
    constructor(props) {
        super(props)

        // Sets the state of email and password to empty strings
        this.state = {
            email: '',
            password: ''
        }

        this.onSignIn = this.onSignIn.bind(this)
    }

    //TODO: process codes for errors and display to user
    // onSignIn() - Function that takes email and password input from user and query's firebase with the account
    // that matches the credentials
    onSignIn() {
        // Destructure email and password from state to have access to these values
        const { email, password } = this.state;

        // Query firebase for user with email and password input
        fire.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
            Alert.alert('Error', error.message, [{text: 'OK'},], {cancelable: true});
        })
    }}