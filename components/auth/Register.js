import AuthTextInput from '../AuthTextInput';

export default class Register extends Component {

    constructor(props) 
    {
        super(props)
  
        // Sets the state of email, password, and confirmPassword by default to empty strings
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
  
    // function validatePassword() - validates that the 2 passwords entered by the user match
    validatePassword = () => 
    {
        // Destructure email, password, and confirmPassword from the components state
        const { email, password, confirmPassword } = this.state;
  
        // Checks if password is blank, or if passwords do not match, or if password is shorter than 6 characters
        if (password == '') {
            alert("Password cannot be blank!")
        }
        else if (password != confirmPassword) {
            alert("Your passwords do not match!");
        }
        else if (password.length < 6) {
            alert("Password must be more than 6 characters.");
        }
        else {
            // Navigate the user to CreateProfile page if password is valid
            this.props.navigation.navigate("CreateProfile", {email: email, password: password});
        }
    }}