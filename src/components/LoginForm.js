import {TextField} from "@material-ui/core";
import "./LoginForm.css"
import {Controller, useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";

function LoginForm() {
    const {handleSubmit, control} = useForm();

    function onSubmit() {

    }

    return (
            <>
                <div className="loginBox">
                    <h1>Sign Up</h1>
                    <br/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <TextField
                                    label="email"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{required: 'email required'}}
                        />
                        <br/>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <TextField
                                    label="password"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    type="password"
                                />
                            )}
                            rules={{required: 'Password required'}}
                        />
                        <br/>
                        <br/>
                        <Button type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                    </form>
                    <br/>
                    <p>
                        Create account? <br/>
                        <a href="/Registration">Register</a>
                    </p>
                </div>
            </>
        )
}
export default LoginForm;
