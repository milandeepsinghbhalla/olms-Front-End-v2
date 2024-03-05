import { Button, FormHelperText, Grid, InputBase, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";

import { alpha, styled } from '@mui/material/styles';

import profileSetupStyles from "./ProfileSetup.module.css"
import myColors from "../assets/Util/myColors";
import { useEffect, useReducer, useState } from "react";
import formVerification from "../assets/Util/formVerification";
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion";
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

// const OutlinedStyledInput = styled(OutlinedInput)(({ theme }) => ({
//     'label + &': {
//         marginTop: theme.spacing(1),
//     },
//     '& .MuiInputBase-input': {
//         borderRadius: 8,
//         position: 'relative',
//         backgroundColor: theme.palette.mode === 'light' ? myColors.backgroundGrey : '#1A2027',
//         border: '1px solid',
//         borderColor: theme.palette.mode === 'light' ? myColors.orange.light : '#2D3843',
//         fontSize: 16,
//         //height: '300px',
//         padding: '10px 12px',
//         transition: theme.transitions.create([
//             'border-color',
//             'background-color',
//             'box-shadow',
//         ]),
//         // Use the system font instead of the default Roboto font.
//         fontFamily: [
//             '-apple-system',
//             'BlinkMacSystemFont',
//             '"Segoe UI"',
//             'Roboto',
//             '"Helvetica Neue"',
//             'Arial',
//             'sans-serif',
//             '"Apple Color Emoji"',
//             '"Segoe UI Emoji"',
//             '"Segoe UI Symbol"',
//         ].join(','),
//         '&:focus': {
//             boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//             borderColor: theme.palette.primary.main,
//         },
//     },
// }));



const ProfileSetup = () => {

    const [countryCodes, setCountryCodes] = useState([{ "country": "Afghanistan", "code": "93", "iso": "AF" },
    { "country": "Albania", "code": "355", "iso": "AL" },
    { "country": "Algeria", "code": "213", "iso": "DZ" },
    { "country": "American Samoa", "code": "1-684", "iso": "AS" },
    { "country": "Andorra", "code": "376", "iso": "AD" },
    { "country": "Angola", "code": "244", "iso": "AO" },
    { "country": "Anguilla", "code": "1-264", "iso": "AI" },
    { "country": "Antarctica", "code": "672", "iso": "AQ" },
    { "country": "Antigua and Barbuda", "code": "1-268", "iso": "AG" },
    { "country": "Argentina", "code": "54", "iso": "AR" },
    { "country": "Armenia", "code": "374", "iso": "AM" },
    { "country": "Aruba", "code": "297", "iso": "AW" },
    { "country": "Australia", "code": "61", "iso": "AU" },
    { "country": "Austria", "code": "43", "iso": "AT" },
    { "country": "Azerbaijan", "code": "994", "iso": "AZ" },
    { "country": "Bahamas", "code": "1-242", "iso": "BS" },
    { "country": "Bahrain", "code": "973", "iso": "BH" },
    { "country": "Bangladesh", "code": "880", "iso": "BD" },
    { "country": "Barbados", "code": "1-246", "iso": "BB" },
    { "country": "Belarus", "code": "375", "iso": "BY" },
    { "country": "Belgium", "code": "32", "iso": "BE" },
    { "country": "Belize", "code": "501", "iso": "BZ" },
    { "country": "Benin", "code": "229", "iso": "BJ" },
    { "country": "Bermuda", "code": "1-441", "iso": "BM" },
    { "country": "Bhutan", "code": "975", "iso": "BT" },
    { "country": "Bolivia", "code": "591", "iso": "BO" },
    { "country": "Bosnia and Herzegovina", "code": "387", "iso": "BA" },
    { "country": "Botswana", "code": "267", "iso": "BW" },
    { "country": "Brazil", "code": "55", "iso": "BR" },
    { "country": "British Indian Ocean Territory", "code": "246", "iso": "IO" },
    { "country": "British Virgin Islands", "code": "1-284", "iso": "VG" },
    { "country": "Brunei", "code": "673", "iso": "BN" },
    { "country": "Bulgaria", "code": "359", "iso": "BG" },
    { "country": "Burkina Faso", "code": "226", "iso": "BF" },
    { "country": "Burundi", "code": "257", "iso": "BI" },
    { "country": "Cambodia", "code": "855", "iso": "KH" },
    { "country": "Cameroon", "code": "237", "iso": "CM" },
    { "country": "Canada", "code": "1", "iso": "CA" },
    { "country": "Cape Verde", "code": "238", "iso": "CV" },
    { "country": "Cayman Islands", "code": "1-345", "iso": "KY" },
    { "country": "Central African Republic", "code": "236", "iso": "CF" },
    { "country": "Chad", "code": "235", "iso": "TD" },
    { "country": "Chile", "code": "56", "iso": "CL" },
    { "country": "China", "code": "86", "iso": "CN" },
    { "country": "Christmas Island", "code": "61", "iso": "CX" },
    { "country": "Cocos Islands", "code": "61", "iso": "CC" },
    { "country": "Colombia", "code": "57", "iso": "CO" },
    { "country": "Comoros", "code": "269", "iso": "KM" },
    { "country": "Cook Islands", "code": "682", "iso": "CK" },
    { "country": "Costa Rica", "code": "506", "iso": "CR" },
    { "country": "Croatia", "code": "385", "iso": "HR" },
    { "country": "Cuba", "code": "53", "iso": "CU" },
    { "country": "Curacao", "code": "599", "iso": "CW" },
    { "country": "Cyprus", "code": "357", "iso": "CY" },
    { "country": "Czech Republic", "code": "420", "iso": "CZ" },
    { "country": "Democratic Republic of the Congo", "code": "243", "iso": "CD" },
    { "country": "Denmark", "code": "45", "iso": "DK" },
    { "country": "Djibouti", "code": "253", "iso": "DJ" },
    { "country": "Dominica", "code": "1-767", "iso": "DM" },
    { "country": "Dominican Republic", "code": "1-809, 1-829, 1-849", "iso": "DO" },
    { "country": "East Timor", "code": "670", "iso": "TL" },
    { "country": "Ecuador", "code": "593", "iso": "EC" },
    { "country": "Egypt", "code": "20", "iso": "EG" },
    { "country": "El Salvador", "code": "503", "iso": "SV" },
    { "country": "Equatorial Guinea", "code": "240", "iso": "GQ" },
    { "country": "Eritrea", "code": "291", "iso": "ER" },
    { "country": "Estonia", "code": "372", "iso": "EE" },
    { "country": "Ethiopia", "code": "251", "iso": "ET" },
    { "country": "Falkland Islands", "code": "500", "iso": "FK" },
    { "country": "Faroe Islands", "code": "298", "iso": "FO" },
    { "country": "Fiji", "code": "679", "iso": "FJ" },
    { "country": "Finland", "code": "358", "iso": "FI" },
    { "country": "France", "code": "33", "iso": "FR" },
    { "country": "French Polynesia", "code": "689", "iso": "PF" },
    { "country": "Gabon", "code": "241", "iso": "GA" },
    { "country": "Gambia", "code": "220", "iso": "GM" },
    { "country": "Georgia", "code": "995", "iso": "GE" },
    { "country": "Germany", "code": "49", "iso": "DE" },
    { "country": "Ghana", "code": "233", "iso": "GH" },
    { "country": "Gibraltar", "code": "350", "iso": "GI" },
    { "country": "Greece", "code": "30", "iso": "GR" },
    { "country": "Greenland", "code": "299", "iso": "GL" },
    { "country": "Grenada", "code": "1-473", "iso": "GD" },
    { "country": "Guam", "code": "1-671", "iso": "GU" },
    { "country": "Guatemala", "code": "502", "iso": "GT" },
    { "country": "Guernsey", "code": "44-1481", "iso": "GG" },
    { "country": "Guinea", "code": "224", "iso": "GN" },
    { "country": "Guinea-Bissau", "code": "245", "iso": "GW" },
    { "country": "Guyana", "code": "592", "iso": "GY" },
    { "country": "Haiti", "code": "509", "iso": "HT" },
    { "country": "Honduras", "code": "504", "iso": "HN" },
    { "country": "Hong Kong", "code": "852", "iso": "HK" },
    { "country": "Hungary", "code": "36", "iso": "HU" },
    { "country": "Iceland", "code": "354", "iso": "IS" },
    { "country": "India", "code": "91", "iso": "IN" },
    { "country": "Indonesia", "code": "62", "iso": "ID" },
    { "country": "Iran", "code": "98", "iso": "IR" },
    { "country": "Iraq", "code": "964", "iso": "IQ" },
    { "country": "Ireland", "code": "353", "iso": "IE" },
    { "country": "Isle of Man", "code": "44-1624", "iso": "IM" },
    { "country": "Israel", "code": "972", "iso": "IL" },
    { "country": "Italy", "code": "39", "iso": "IT" },
    { "country": "Ivory Coast", "code": "225", "iso": "CI" },
    { "country": "Jamaica", "code": "1-876", "iso": "JM" },
    { "country": "Japan", "code": "81", "iso": "JP" },
    { "country": "Jersey", "code": "44-1534", "iso": "JE" },
    { "country": "Jordan", "code": "962", "iso": "JO" },
    { "country": "Kazakhstan", "code": "7", "iso": "KZ" },
    { "country": "Kenya", "code": "254", "iso": "KE" },
    { "country": "Kiribati", "code": "686", "iso": "KI" },
    { "country": "Kosovo", "code": "383", "iso": "XK" },
    { "country": "Kuwait", "code": "965", "iso": "KW" },
    { "country": "Kyrgyzstan", "code": "996", "iso": "KG" },
    { "country": "Laos", "code": "856", "iso": "LA" },
    { "country": "Latvia", "code": "371", "iso": "LV" },
    { "country": "Lebanon", "code": "961", "iso": "LB" },
    { "country": "Lesotho", "code": "266", "iso": "LS" },
    { "country": "Liberia", "code": "231", "iso": "LR" },
    { "country": "Libya", "code": "218", "iso": "LY" },
    { "country": "Liechtenstein", "code": "423", "iso": "LI" },
    { "country": "Lithuania", "code": "370", "iso": "LT" },
    { "country": "Luxembourg", "code": "352", "iso": "LU" },
    { "country": "Macao", "code": "853", "iso": "MO" },
    { "country": "Macedonia", "code": "389", "iso": "MK" },
    { "country": "Madagascar", "code": "261", "iso": "MG" },
    { "country": "Malawi", "code": "265", "iso": "MW" },
    { "country": "Malaysia", "code": "60", "iso": "MY" },
    { "country": "Maldives", "code": "960", "iso": "MV" },
    { "country": "Mali", "code": "223", "iso": "ML" },
    { "country": "Malta", "code": "356", "iso": "MT" },
    { "country": "Marshall Islands", "code": "692", "iso": "MH" },
    { "country": "Mauritania", "code": "222", "iso": "MR" },
    { "country": "Mauritius", "code": "230", "iso": "MU" },
    { "country": "Mayotte", "code": "262", "iso": "YT" },
    { "country": "Mexico", "code": "52", "iso": "MX" },
    { "country": "Micronesia", "code": "691", "iso": "FM" },
    { "country": "Moldova", "code": "373", "iso": "MD" },
    { "country": "Monaco", "code": "377", "iso": "MC" },
    { "country": "Mongolia", "code": "976", "iso": "MN" },
    { "country": "Montenegro", "code": "382", "iso": "ME" },
    { "country": "Montserrat", "code": "1-664", "iso": "MS" },
    { "country": "Morocco", "code": "212", "iso": "MA" },
    { "country": "Mozambique", "code": "258", "iso": "MZ" },
    { "country": "Myanmar", "code": "95", "iso": "MM" },
    { "country": "Namibia", "code": "264", "iso": "NA" },
    { "country": "Nauru", "code": "674", "iso": "NR" },
    { "country": "Nepal", "code": "977", "iso": "NP" },
    { "country": "Netherlands", "code": "31", "iso": "NL" },
    { "country": "Netherlands Antilles", "code": "599", "iso": "AN" },
    { "country": "New Caledonia", "code": "687", "iso": "NC" },
    { "country": "New Zealand", "code": "64", "iso": "NZ" },
    { "country": "Nicaragua", "code": "505", "iso": "NI" },
    { "country": "Niger", "code": "227", "iso": "NE" },
    { "country": "Nigeria", "code": "234", "iso": "NG" },
    { "country": "Niue", "code": "683", "iso": "NU" },
    { "country": "North Korea", "code": "850", "iso": "KP" },
    { "country": "Northern Mariana Islands", "code": "1-670", "iso": "MP" },
    { "country": "Norway", "code": "47", "iso": "NO" },
    { "country": "Oman", "code": "968", "iso": "OM" },
    { "country": "Pakistan", "code": "92", "iso": "PK" },
    { "country": "Palau", "code": "680", "iso": "PW" },
    { "country": "Palestine", "code": "970", "iso": "PS" },
    { "country": "Panama", "code": "507", "iso": "PA" },
    { "country": "Papua New Guinea", "code": "675", "iso": "PG" },
    { "country": "Paraguay", "code": "595", "iso": "PY" },
    { "country": "Peru", "code": "51", "iso": "PE" },
    { "country": "Philippines", "code": "63", "iso": "PH" },
    { "country": "Pitcairn", "code": "64", "iso": "PN" },
    { "country": "Poland", "code": "48", "iso": "PL" },
    { "country": "Portugal", "code": "351", "iso": "PT" },
    { "country": "Puerto Rico", "code": "1-787, 1-939", "iso": "PR" },
    { "country": "Qatar", "code": "974", "iso": "QA" },
    { "country": "Republic of the Congo", "code": "242", "iso": "CG" },
    { "country": "Reunion", "code": "262", "iso": "RE" },
    { "country": "Romania", "code": "40", "iso": "RO" },
    { "country": "Russia", "code": "7", "iso": "RU" },
    { "country": "Rwanda", "code": "250", "iso": "RW" },
    { "country": "Saint Barthelemy", "code": "590", "iso": "BL" },
    { "country": "Saint Helena", "code": "290", "iso": "SH" },
    { "country": "Saint Kitts and Nevis", "code": "1-869", "iso": "KN" },
    { "country": "Saint Lucia", "code": "1-758", "iso": "LC" },
    { "country": "Saint Martin", "code": "590", "iso": "MF" },
    { "country": "Saint Pierre and Miquelon", "code": "508", "iso": "PM" },
    { "country": "Saint Vincent and the Grenadines", "code": "1-784", "iso": "VC" },
    { "country": "Samoa", "code": "685", "iso": "WS" },
    { "country": "San Marino", "code": "378", "iso": "SM" },
    { "country": "Sao Tome and Principe", "code": "239", "iso": "ST" },
    { "country": "Saudi Arabia", "code": "966", "iso": "SA" },
    { "country": "Senegal", "code": "221", "iso": "SN" },
    { "country": "Serbia", "code": "381", "iso": "RS" },
    { "country": "Seychelles", "code": "248", "iso": "SC" },
    { "country": "Sierra Leone", "code": "232", "iso": "SL" },
    { "country": "Singapore", "code": "65", "iso": "SG" },
    { "country": "Sint Maarten", "code": "1-721", "iso": "SX" },
    { "country": "Slovakia", "code": "421", "iso": "SK" },
    { "country": "Slovenia", "code": "386", "iso": "SI" },
    { "country": "Solomon Islands", "code": "677", "iso": "SB" },
    { "country": "Somalia", "code": "252", "iso": "SO" },
    { "country": "South Africa", "code": "27", "iso": "ZA" },
    { "country": "South Korea", "code": "82", "iso": "KR" },
    { "country": "South Sudan", "code": "211", "iso": "SS" },
    { "country": "Spain", "code": "34", "iso": "ES" },
    { "country": "Sri Lanka", "code": "94", "iso": "LK" },
    { "country": "Sudan", "code": "249", "iso": "SD" },
    { "country": "Suriname", "code": "597", "iso": "SR" },
    { "country": "Svalbard and Jan Mayen", "code": "47", "iso": "SJ" },
    { "country": "Swaziland", "code": "268", "iso": "SZ" },
    { "country": "Sweden", "code": "46", "iso": "SE" },
    { "country": "Switzerland", "code": "41", "iso": "CH" },
    { "country": "Syria", "code": "963", "iso": "SY" },
    { "country": "Taiwan", "code": "886", "iso": "TW" },
    { "country": "Tajikistan", "code": "992", "iso": "TJ" },
    { "country": "Tanzania", "code": "255", "iso": "TZ" },
    { "country": "Thailand", "code": "66", "iso": "TH" },
    { "country": "Togo", "code": "228", "iso": "TG" },
    { "country": "Tokelau", "code": "690", "iso": "TK" },
    { "country": "Tonga", "code": "676", "iso": "TO" },
    { "country": "Trinidad and Tobago", "code": "1-868", "iso": "TT" },
    { "country": "Tunisia", "code": "216", "iso": "TN" },
    { "country": "Turkey", "code": "90", "iso": "TR" },
    { "country": "Turkmenistan", "code": "993", "iso": "TM" },
    { "country": "Turks and Caicos Islands", "code": "1-649", "iso": "TC" },
    { "country": "Tuvalu", "code": "688", "iso": "TV" },
    { "country": "U.S. Virgin Islands", "code": "1-340", "iso": "VI" },
    { "country": "Uganda", "code": "256", "iso": "UG" },
    { "country": "Ukraine", "code": "380", "iso": "UA" },
    { "country": "United Arab Emirates", "code": "971", "iso": "AE" },
    { "country": "United Kingdom", "code": "44", "iso": "GB" },
    { "country": "United States", "code": "1", "iso": "US" },
    { "country": "Uruguay", "code": "598", "iso": "UY" },
    { "country": "Uzbekistan", "code": "998", "iso": "UZ" },
    { "country": "Vanuatu", "code": "678", "iso": "VU" },
    { "country": "Vatican", "code": "379", "iso": "VA" },
    { "country": "Venezuela", "code": "58", "iso": "VE" },
    { "country": "Vietnam", "code": "84", "iso": "VN" },
    { "country": "Wallis and Futuna", "code": "681", "iso": "WF" },
    { "country": "Western Sahara", "code": "212", "iso": "EH" },
    { "country": "Yemen", "code": "967", "iso": "YE" },
    { "country": "Zambia", "code": "260", "iso": "ZM" },
    { "country": "Zimbabwe", "code": "263", "iso": "ZW" }])

    const [canCreateProfile, setCanCreateProfile] = useState(false);
    const [canGoNext, setCanGoNext] = useState(false);
    let step1Feilds = ['fullName','email','countryCode','phnNumber','role'];
    let step2Feilds = ['companyName','companyAddress','city','state','zipCode'];

    const [roleValues, setRole] = useState(['Shipper', 'Carrier', 'Dispatcher', 'Broker', 'Admin', 'Other'])
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
        fullName: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty'],

        },
        email: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty', 'isEmail']
        },
        countryCode: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty']
        },
        phnNumber: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty', 'isPhnNumber']
        },
        role: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty']
        },
        other: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty']
        },
        companyName: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty']
        },
        companyAddress: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty']
        },
        city: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty']
        },
        state: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty']
        },
        zipCode: {
            value: '',
            ok: true,
            helperText: '',
            validations: ['isNotEmpty']
        }
    })
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
    const errorStyle = {
        color: myColors.orange.main,
        fontWeight: 500
    }
    const animationVariants = {
        //hidden: { x:-100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        hidden: { x: 0, opacity: 0 },
        exit: { x: 0, opacity: 0 },
        entry: { x: 0, opacity: 1 }
    }
    var step1Controls = useAnimation()
    var step2Controls = useAnimation()
    let step1 =
        <motion.div
            variants={animationVariants}
            // style={{
            //     height: '100%',

            //     //backgroundColor: 'transparent'
            // }}
            initial="visible"
            animate={step1Controls}
            transition={{
                duration: 0.9,
                //delay: 0.5
                //ease: "easeIn"
            }}
        >
            <Grid container   xs={12} md={12}>
                <Grid item xs={12}  >

                    <InputLabel htmlFor="fullName">
                        Full Name
                    </InputLabel>
                    <StyledInput value={formValues.fullName.value} onChange={(e) => {
                        updateFeildHandler(e.target.value, 'fullName');
                        validateFeildHandler('fullName');

                    }} onBlur={() => {
                        validateFeildHandler('fullName');
                    }} fullWidth id="fullName" placeholder="John Doe" variant="outlined" />
                    <FormHelperText disabled={!formValues.fullName.ok} error={true} > <span style={errorStyle}>{formValues.fullName.helperText}</span></FormHelperText>
                </Grid>
                <Grid mt={3} item xs={12}>
                    <InputLabel htmlFor="fullName">
                        Email
                    </InputLabel>
                    <StyledInput value={formValues.email.value} onChange={(e) => {
                        updateFeildHandler(e.target.value, 'email');
                        validateFeildHandler('email');

                    }} onBlur={() => {
                        validateFeildHandler('email');
                    }} fullWidth id="email" placeholder="john.doe@gmail.com" variant="outlined" />
                    <FormHelperText disabled={!formValues.email.ok} error={true} > <span style={errorStyle}>{formValues.email.helperText}</span></FormHelperText>

                </Grid>

                <Grid mt={3} xs={12} container justifyContent={'space-between'}>
                    <Grid item xs={4}>
                        <InputLabel id="selectLabel" htmlFor="fullName">
                            Country Code
                        </InputLabel>
                        <Select
                            labelId="selectLabel"
                            id="countryCode"
                            //value={age}
                            sx={{
                                maxHeight: '300px'
                            }}
                            fullWidth
                            //onChange={handleChange}
                            displayEmpty
                            input={<StyledInput />}

                            MenuProps={{
                                sx: {
                                    maxHeight: '300px'
                                }
                            }}
                            // defaultValue={() => {
                            //     return (


                            //     )
                            // }}
                            value={formValues.countryCode.value} onChange={(e) => {
                                updateFeildHandler(e.target.value, 'countryCode');
                                validateFeildHandler('countryCode');

                            }} onBlur={() => {
                                validateFeildHandler('countryCode');
                            }}
                        >
                            <MenuItem disabled value=''> <span style={{
                                color: 'rgba(0,0,0,0.4)',
                                fontWeight: 400
                            }}>+1XX Country</span></MenuItem>
                            {countryCodes.map((countryCode) => {
                                return (

                                    <MenuItem key={countryCode.iso} value={countryCode.code}>{`+${countryCode.code} ${countryCode.country}`}</MenuItem>

                                )
                            })}

                        </Select>
                        <FormHelperText disabled={!formValues.countryCode.ok} error={true} > <span style={errorStyle}>{formValues.countryCode.helperText}</span></FormHelperText>

                    </Grid>
                    <Grid item xs={7}>
                        <InputLabel htmlFor="phoneNumber">
                            Phone Number
                        </InputLabel>
                        <StyledInput value={formValues.phnNumber.value} onChange={(e) => {
                            updateFeildHandler(e.target.value, 'phnNumber');
                            validateFeildHandler('phnNumber');

                        }} onBlur={() => {
                            validateFeildHandler('phnNumber');
                        }} fullWidth id="phoneNumber" placeholder="62841XXXX4" variant="outlined" />
                        <FormHelperText disabled={!formValues.phnNumber.ok} error={true} > <span style={errorStyle}>{formValues.phnNumber.helperText}</span></FormHelperText>

                    </Grid>
                </Grid>
                <Grid mt={3} xs={12} item >
                    <InputLabel id="roleLabel" htmlFor="role">
                        You Are A...?
                    </InputLabel>
                    <Select
                        labelId="roleLabel"
                        id="role"
                        //value={age}
                        sx={{
                            maxHeight: '300px'
                        }}
                        fullWidth
                        //onChange={handleChange}
                        displayEmpty
                        input={<StyledInput />}

                        MenuProps={{
                            sx: {
                                maxHeight: '250px'
                            }
                        }}
                        // renderValue={() => {
                        //     return (


                        //     )
                        // }}
                        value={formValues.role.value} onChange={(e) => {
                            updateFeildHandler(e.target.value, 'role');
                            validateFeildHandler('role');

                        }} onBlur={() => {
                            validateFeildHandler('role');
                        }}

                    >
                        <MenuItem selected disabled value=''> <span style={{
                            color: 'rgba(0,0,0,0.4)',
                            fontWeight: 400
                        }}>Magician</span></MenuItem>
                        {
                            roleValues.map((role) => {
                                return (
                                    <MenuItem value={role} key={role}>{role}</MenuItem>
                                )
                            })
                        }
                    </Select>
                    <FormHelperText disabled={!formValues.role.ok} error={true} > <span style={errorStyle}>{formValues.role.helperText}</span></FormHelperText>

                </Grid>
                {(formValues.role.value == 'Other') && <Grid mt={3} xs={12} item >
                    <InputLabel htmlFor="Other">
                        Other
                    </InputLabel>
                    <StyledInput value={formValues.other.value} onChange={(e) => {
                        updateFeildHandler(e.target.value, 'other');
                        validateFeildHandler('other');

                    }} onBlur={() => {
                        validateFeildHandler('other');
                    }} fullWidth id="Other" placeholder="Accountant or Assistant..." variant="outlined" />
                    <FormHelperText disabled={!formValues.other.ok} > <span style={errorStyle}>{formValues.other.helperText}</span></FormHelperText>

                </Grid>}
            </Grid>
        </motion.div>


    let step2 =
        <motion.div
            variants={animationVariants}
            // style={{
            //     height: '100%',

            //     //backgroundColor: 'transparent'
            // }}
            initial="hidden"
            animate={step2Controls}
            transition={{
                duration: 0.9,
                //delay: 0.5
                //ease: "easeIn"
            }}
        >
            <Grid container    xs={12} md={9}>
                <Grid item xs={12} md={12}>
                    <Typography fontWeight={300} variant="h6">
                        Company Details
                    </Typography>


                </Grid>
                <Grid mt={3} item xs={12} md={9}>
                    <InputLabel htmlFor="companyName">
                        Company Name
                    </InputLabel>
                    <StyledInput value={formValues.companyName.value} onChange={(e) => {
                        updateFeildHandler(e.target.value, 'companyName');
                        validateFeildHandler('companyName');

                    }} onBlur={() => {
                        validateFeildHandler('companyName');
                    }} fullWidth id="fullName" placeholder="Moon Trucks Corp." variant="outlined" />
                    <FormHelperText disabled={!formValues.companyName.ok}   > <span style={errorStyle}>{formValues.companyName.helperText}</span></FormHelperText>
                </Grid>
                <Grid mt={3} item xs={12} md={9}>
                    <InputLabel htmlFor="companyAddress">
                        Address
                    </InputLabel>
                    <StyledInput multiline={true} rows={3} value={formValues.companyAddress.value} onChange={(e) => {
                        updateFeildHandler(e.target.value, 'companyAddress');
                        validateFeildHandler('companyAddress');

                    }} onBlur={() => {
                        validateFeildHandler('companyAddress');
                    }} fullWidth id="companyAddress" placeholder="#172/7 XYZ street, Moon road, Mars city, Milky Way..." variant="outlined" />
                    <FormHelperText disabled={!formValues.companyAddress.ok}   > <span style={errorStyle}>{formValues.companyAddress.helperText}</span></FormHelperText>
                </Grid>
                <Grid item mt={3} xs={12} md={9}>

                    <Grid container spacing={2}  >
                        <Grid item xs={12} md={4}>

                            <InputLabel htmlFor="city">
                                City
                            </InputLabel>
                            <StyledInput value={formValues.city.value} onChange={(e) => {
                                updateFeildHandler(e.target.value, 'city');
                                validateFeildHandler('city');

                            }} onBlur={() => {
                                validateFeildHandler('city');
                            }} fullWidth id="city" placeholder="Mars City" variant="outlined" />
                            <FormHelperText disabled={!formValues.city.ok}   > <span style={errorStyle}>{formValues.city.helperText}</span></FormHelperText>
                        </Grid>
                        <Grid item xs={12} md={4}>

                            <InputLabel htmlFor="state">
                                State
                            </InputLabel>
                            <StyledInput value={formValues.state.value} onChange={(e) => {
                                updateFeildHandler(e.target.value, 'state');
                                validateFeildHandler('state');

                            }} onBlur={() => {
                                validateFeildHandler('state');
                            }} fullWidth id="state" placeholder="Milky Way" variant="outlined" />
                            <FormHelperText disabled={!formValues.state.ok}   > <span style={errorStyle}>{formValues.state.helperText}</span></FormHelperText>
                        </Grid>
                        <Grid item xs={12} md={4}>

                            <InputLabel htmlFor="zipCode">
                                Zip Code
                            </InputLabel>
                            <StyledInput value={formValues.zipCode.value} onChange={(e) => {
                                updateFeildHandler(e.target.value, 'zipCode');
                                validateFeildHandler('zipCode');

                            }} onBlur={() => {
                                validateFeildHandler('zipCode');
                            }} fullWidth id="zipCode" placeholder="7XXX45" variant="outlined" />
                            <FormHelperText disabled={!formValues.zipCode.ok}   > <span style={errorStyle}>{formValues.zipCode.helperText}</span></FormHelperText>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </motion.div>



    const [step, setStep] = useState(1)

    const nextButton = <>
        <Grid mt={3} item xs={12} md={9}>
            <Button variant="contained" disabled={!canGoNext}  sx={{
                color: myColors.textBlack
            }} onClick={() => {
                step1Controls.start('exit');
                // let mycontrolerFunction = (controller,variant)=>{
                //     controller.start(variant);
                // }
                setTimeout(() => {
                    setStep(2)

                }, 900)
                setTimeout(() => {

                    step2Controls.start('entry')
                }, 1000)
            }} size="normal" color="lightOrange">
                Next
            </Button>
        </Grid>
    </>


    const profileSetupSubmitHandler = async () => {
        let obj = {}
        for (let prop in formValues) {
            obj[prop] = ((formValues[prop].value).trim()).toLowerCase()
        }

        try{

            const response = await fetch(links.backendUrl + '/profile-setup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })

            if(response.status< 200 || response.status> 299){
                // throw error
                const error = await response.json();
                console.log('response error- ',error);
                let myError = {
                    message: error.message
                }
                throw myError;
            }
            else{
                //extract Data
                alert('successs...!!!')
                const success = await response.json();
                console.log('success data---',success);
            }
        }
        catch (err) {
            console.log('myError-- ',err);
            alert(err.message);
        }
    }

    const prevButton = <>
        <Grid mt={3} container xs={12} md={9}>
            <Grid item xs={4} md={3}>

                <Button variant="contained" sx={{
                    color: '#212100'
                }} onClick={() => {
                    step2Controls.start('exit')

                    setTimeout(() => {
                        setStep(1)


                    }, 900)
                    setTimeout(() => {

                        step1Controls.start('entry')
                    }, 1000)
                }} size="normal" color="lightOrange"> Previous </Button>
            </Grid>

            <Grid item xs={8} md={9}>
                <Button variant="contained" color="textBlack" sx={{
                    color: myColors.backgroundGrey
                }} disabled={!canCreateProfile} onClick={() => {
                    profileSetupSubmitHandler();
                }}>
                    Create Profile
                </Button>
            </Grid>
        </Grid>
    </>

    useEffect(()=>{
        // check step1 feilds
        let step1Flag = false
        step1Feilds.some((feild)=>{
            if(formValues[feild].value.length!=0 && formValues[feild].ok){
                step1Flag = true
            }
            else{
                step1Flag = false;
                return true;
            }
            return false;
        })
        if(formValues.role.value=='Other'){
            if(formValues.other.value.length!=0 && formValues.other.ok){
                step1Flag = true
            }
            else{
                step1Flag = false
            }
        }
        setCanGoNext(step1Flag);
        let allFeilds = step1Feilds.concat(step2Feilds);
        let allFeildsFlag = false;
        allFeilds.some((feild)=>{
            if(formValues[feild].value.length!=0 && formValues[feild].ok){
                allFeildsFlag = true
            }
            else{
                allFeildsFlag = false;
                return true;
            }
            return false;
        })
        setCanCreateProfile(allFeildsFlag);
    },[formValues])

    return (
        <>
            <Grid container justifyContent={'center'}>
                <Grid item mb={5} mt={7} xs={11} md={6}>

                    <Grid item mb={1} xs={12} >
                        <Typography fontWeight={500} variant="h4">
                            Profile
                        </Typography>
                    </Grid>
                    <Grid item mb={2} xs={12} md={9}>
                        <Typography variant="body1">
                            Step <span style={{ color: myColors.orange.light, fontWeight: 500 }}>{step}</span> of <span style={{ color: myColors.orange.main, fontWeight: 500 }}>2</span>
                        </Typography>
                    </Grid>
                    {step == 1 ? step1 : step2}


                    {
                        step == 1 ? nextButton : prevButton
                    }


                </Grid>
            </Grid>
        </>
    )
}

export default ProfileSetup;