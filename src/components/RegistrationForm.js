import {TextField} from "@material-ui/core";
import {useForm, Controller} from "react-hook-form";
import "./LoginForm.css"
import Button from '@material-ui/core/Button';

function RegistrationForm() {
    const {handleSubmit, control} = useForm();


    const onSubmit = async data => {
        debugger
        try {
            await fetch(`http://localhost:8080/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => console.log(response));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="loginBox">
                <h1>Create account</h1>

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
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <TextField
                                label="name"
                                variant="filled"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{required: 'Name required'}}
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
                    <Controller
                        name="repeatPassword"
                        control={control}
                        defaultValue=""
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <TextField
                                label="repeatPassword"
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
                        Create account
                    </Button>
                    <br/>
                    <br/>
                </form>

                <p>
                    Have a account? <br/>
                    <a href="/Account">Login</a>
                </p>
            </div>
        </>
    );
}

export default RegistrationForm;
