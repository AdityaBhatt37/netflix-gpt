export  const checkValidateData = (email,password) => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    

    if(!emailRegex) return "Email is not Valid!";

    if(!passwordRegex) return "Password not Valid!";

    return null;


} 