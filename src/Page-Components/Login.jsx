import { Button, FormHelperText, Grid, Icon, InputAdornment, InputBase, InputLabel, Typography } from "@mui/material"
import profileSetupStyles from "./ProfileSetup.module.css"
import myColors from "../assets/Util/myColors";
import { useEffect, useReducer, useState } from "react";
import formVerification from "../assets/Util/formVerification";
import { alpha, styled } from '@mui/material/styles';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import links from "../assets/Util/links";


const StyledInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(1),
    },
    '& .MuiInputBase-input': {
        borderRadius: 8,
        position: 'relative',
        //backgroundColor: theme.palette.mode === 'light' ? myColors.backgroundGrey : '#1A2027',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.4)' : '#2D3843',
        fontSize: 16,

        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));



const Login = () => {

    const [canLogin,setCanLogin] = useState(false);

    const formValuesreducer = (state, action) => {

        let myState = {};
        switch (action.type) {
            case "updateFeild":
                myState = { ...state };
                myState[action.feildName].value = action.value
                return myState;
            //break;
            case "validateFeild":
                myState = { ...state };
                let errorResult = formVerification(myState[action.feildName].value, myState[action.feildName].validations);
                myState[action.feildName].ok = errorResult.ok;
                myState[action.feildName].helperText = errorResult.message;
                return myState;
            //break;

        }
    }

    const [formValues, formValuesDispatch] = useReducer(formValuesreducer, {
        email: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty', 'isEmail']
        },
        password: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty']
        }
    })
    const errorStyle = {
        color: myColors.orange.main,
        fontWeight: 500
    }
    const updateFeildHandler = (value, feildName) => {
        let updateFeildAction = {
            type: 'updateFeild',
            feildName: feildName,
            value: value,

        }
        formValuesDispatch(updateFeildAction);
    }

    const validateFeildHandler = (feildName) => {
        let validateFeildAction = {
            type: 'validateFeild',
            feildName: feildName
        }
        formValuesDispatch(validateFeildAction);
    }
    

    const [showPassword, setShowPassword] = useState(false);
    const eyeIconStyles =  {
        position: 'absolute',
        top: '1.7em',
        right: '0.5em',
        cursor: 'pointer'
    }

    const toggleVisibilty = ()=>{
        setShowPassword((state)=>{
            return !state;
        })
    }

    const loginHandler = async ()=>{
        let obj = {
            email: (formValues.email.value.trim()).toLowerCase(),
            password: formValues.password.value.trim()
        }
        try {

            const loginResponse = await fetch(links.backendUrl + '/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
            if(loginResponse<200 || loginResponse>299){
                let errorResult = await loginResponse.json();
                let myError = {
                    message: errorResult.message
                }
                throw myError;
            }
            const loginResult = await loginResponse.json()
            localStorage.setItem('userToken', loginResult.token)
            alert(loginResult.message)
        }
        catch (err){
            console.log('login error---',err.message)
            alert('login error---',err.message)
        }
    }

    useEffect(()=>{
        let loginFlag = true
        for(let property in formValues){
            if(formValues[property].value != '' && formValues[property].ok){
                // do nothing
            }
            else{
                loginFlag = false;
                break;
            }
        }
        setCanLogin(loginFlag);
    },[formValues])

    return (<>
        <Grid container justifyContent={'center'}>
            <Grid item mb={5} mt={15} xs={10} md={6}>

                <Grid item mb={2} xs={12} >
                    <Typography fontWeight={500} variant="h4">
                        Login
                    </Typography>
                </Grid>
                <Grid container xs={12} md={9}>

                    {/* <Grid item mb={2} xs={12} >
                            <Typography fontWeight={500} variant="h4">
                                Login
                            </Typography>
                        </Grid> */}
                    <Grid item xs={12}  >
                        <InputLabel htmlFor="email">
                            Email
                        </InputLabel>
                        <StyledInput value={formValues.email.value} onChange={(e) => {
                            updateFeildHandler(e.target.value, 'email');
                            validateFeildHandler('email');

                        }} onBlur={() => {
                            validateFeildHandler('email');
                        }} fullWidth id="email" placeholder="john.doe@gmail.com" variant="email" />
                        <FormHelperText disabled={!formValues.email.ok} error={true} > <span style={errorStyle}>{formValues.email.helperText}</span></FormHelperText>
                    </Grid>
                    <Grid item mt={2} sx={{
                        position: 'relative'
                    }} xs={12}  >
                        <InputLabel htmlFor="password">
                            Password
                        </InputLabel>
                        <StyledInput type={ showPassword? 'text' : 'password'}


                            value={formValues.password.value} onChange={(e) => {
                                updateFeildHandler(e.target.value, 'password');
                                validateFeildHandler('password');

                            }} onBlur={() => {
                                validateFeildHandler('password');
                            }} fullWidth id="password" placeholder="*******" variant="password" />
                        { showPassword ? <VisibilityIcon onClick={toggleVisibilty} sx={eyeIconStyles} />: <VisibilityOffIcon onClick={toggleVisibilty} sx={eyeIconStyles}/>}
                        <FormHelperText disabled={!formValues.password.ok} error={true} > <span style={errorStyle}>{formValues.password.helperText}</span></FormHelperText>
                    </Grid>
                    <Grid mt={3} item xs={3}>
                        <Button variant="contained" sx={{
                            color: myColors.textBlack
                        }} fullWidth disabled={!canLogin} onClick={() => {
                          loginHandler();
                        }} size="normal" color="lightOrange">
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    </>
    )
}


export default Login