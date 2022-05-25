import {TextField} from "@material-ui/core";
import "./LoginForm.css"
import {Controller, useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";
import {useState} from "react";

function LoginForm() {
    const {handleSubmit, control} = useForm();
    const [errorMessages, setErrorMessages] = useState({});

    const onSubmit = async data => {
        try {
            await fetch(`http://localhost:8080/login/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    return response.json()
                })
                .then(response => console.log(response));
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="loginBox">
                <h1>Zaloguj się</h1>
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
                    Stwórz konto? <br/>
                    <a href="/Registration">Rejestracja</a>
                </p>
            </div>
        </>
    )
}

export default LoginForm;
