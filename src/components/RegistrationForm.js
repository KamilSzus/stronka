import {TextField} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import "./LoginForm.css"
import Button from '@material-ui/core/Button';

function RegistrationForm() {
    const { handleSubmit, control } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <>
            <div className="loginBox">
                <h1>Create account</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="email"
                                variant="filled"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{ required: 'email required' }}
                    />
                    <br/>
                    <Controller
                        name="Name"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Name"
                                variant="filled"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{ required: 'Name required' }}
                    />
                    <br/>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Password"
                                variant="filled"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type="password"
                            />
                        )}
                        rules={{ required: 'Password required' }}
                    />
                    <br/>
                    <Controller
                        name="repeatPassword"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
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
                        rules={{ required: 'Password required' }}
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
