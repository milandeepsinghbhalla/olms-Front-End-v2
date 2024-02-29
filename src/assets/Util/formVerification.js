const formVerification = (value, chkTypes, formValues) => {
    let formVerificationMethods = {

        isNotEmpty: (value) => {
            //logic to check is value empty
            console.log('function invoked')
            let obj = {
                checkType: 'isEmpty',
                ok: !(value.trim() === "" || value === null || value === undefined || value.length === 0),
    
            }
            obj.message = obj.ok ? "" : "This feild is Required"
            console.log('returned value', obj)
            return obj;
        },
        isPhnNumber: (value) => {
            // logic to check
            let myOk = "";
            const parsedNumber = Number(value);
            let obj = {};
    
            if (isNaN(parsedNumber)) {
                myOk = false; // Not a valid number
                obj = {
                    checkType: 'isPhnNumber',
                    ok: myOk,
                    message: myOk ? "" : "Please Enter a valid 10 digit number."
                }
                return obj;
            }
    
            const stringValue = parsedNumber.toString();
            myOk = stringValue.length === 10;
            obj = {
                checkType: 'isPhnNumber',
                ok: myOk,
                message: myOk ? "" : "Please Enter a valid 10 digit number."
            }
            return obj;
        },
        isEmail: (value) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let obj = {
                checkType: 'isEmail',
                ok: regex.test(value),
    
            }
            obj.message = obj.ok ? "" : "Please enter a valid email."
            return obj;
        },
        hasUpperCase: (value) => {
            let obj = {
                checkType: 'hasUpperCase',
                ok: false,
                message: null
            }
            for (let i = 0; i < value.length; i++) {
                if (value[i] >= 'A' && value[i] <= 'Z') {
                    obj.ok = true;
                    return obj;
                }
            }
            obj.message = obj.ok ? '': 'Password must have atleast one upper case character'
            return obj;
        },
    
        hasNoSpace: (str) => {
            let obj = {
                checkType: 'hasUpperCase',
                ok: null,
                message: null
            }
            if(/^\S+$/.test(str)){
                obj.ok = true;
                
            }
            else {
    
                obj.ok = false;
            }
            obj.message = obj.ok ? '': 'Password should not have any space'
            return obj;
        },
        isZipCode: (str)=>{
            
            const regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

            // Test the string against the regular expression
            let testResult =  regex.test(str);

            let obj = {
                checkType: 'isZipCode',
                ok: testResult,
                message: null
            }
            obj.message = obj.ok ? '' : 'Enter a valid Zip Code.'

            return obj;
        }
    
    }




  
    let valueResults = chkTypes.map((type) => {
        console.log('value = ', `${type}(${value})`)

        return formVerificationMethods[type](value)
       
    })
    let errorResult = null;
    valueResults.some((result) => {
        console.log("result = ", result)
        if (!result.ok) {
            errorResult = result;
            return true
        }
        return false;

    })
    if (errorResult)
        return errorResult;

    return {
        ok: true
    }

}





export default formVerification;