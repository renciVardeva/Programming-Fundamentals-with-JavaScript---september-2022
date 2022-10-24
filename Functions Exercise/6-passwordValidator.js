function passwordValidator (pass){
    let digit = 0;
    let isValid = true;
 
    if (pass.length < 6 || pass.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
 
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= 'A' && pass[i] <= 'Z' || pass[i] >= 'a' && pass[i] <= 'z' || pass[i] >= '0' && pass[i] <= '9') {
            if (pass[i].charCodeAt(0) > 47 && pass[i].charCodeAt(0) < 58) {
                digit++;
            }
        } else {
            console.log('Password must consist only of letters and digits');
            isValid = false;
            break;
        }
    }
 
    if (digit < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }
 
    if (isValid) {
        console.log('Password is valid');
    }
}
passwordValidator ('logIn')