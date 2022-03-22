
export const validEmail = (email: string) => {
    const emailRegEx = /([A-Za-z0-9-_.])+@([A-Za-z0-9-_.])+\.([A-Za-z])+/;

    return emailRegEx.test(email) && !email.includes(' ');
}

export const validPW = (pass: string) => {
    const upperCheck = /.*[A-Z]+.*/;
    const lowerCheck = /.*[a-z]+.*/;
    const numberCheck = /.*[0-9]+.*/;
    const symbolCheck = /.*[-_.@#\?\$\[\]\(\)\{\}\*\&\:\%].*/

    if(pass.length >= 8) {
        if(upperCheck.test(pass) && lowerCheck.test(pass) && numberCheck.test(pass) && symbolCheck.test(pass)) {
            return true;
        }

        return false;
    }

    return false;
}