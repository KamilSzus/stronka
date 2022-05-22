import {TextField} from "@material-ui/core";
import "./LoginForm.css"

function LoginForm() {
        return (
            <>
                <div className="loginBox">
                    <h1>Sign Up</h1>
                    <form>
                        <TextField
                            name="username"
                            helperText="user name"
                        />
                        <br/>
                        <TextField
                            name="password"
                            type="password"
                            helperText="password"
                        />
                        <br/>
                        <div className="pwStrRow">
                        </div>
                        <br/>
                        <input type="submit" />
                    </form>
                    <p>
                        Create account? <br/>
                        <a href="/Registration">Register</a>
                    </p>
                </div>
            </>
        )
}
export default LoginForm;
