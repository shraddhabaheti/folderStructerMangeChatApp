import { IPassword,Login, User } from '../Interfaces/userinterface'
const emailValidation = (UserData: User) => {
    let error: any = {};
    let valid = true;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (UserData.email !== undefined && !UserData.email) {
        error = "please Enter email";
        valid = false;
    } else if (UserData.email !== undefined && !emailregex.test(UserData.email)) {
        error = "please Enter valid Email Address"
        valid=false;

    } else if (UserData.email) {
        error = ''
    }
    return { error, valid };
}
const passwordRegexValid = (passData: IPassword) => {
  let error: any = {};
  let valid = true;

  var PasswordRegex: any = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})"
  );
  if (passData.password !== undefined && !passData.password) {
    error = "Please enter password";
    valid = false;
  } else if (passData.password !== undefined && !PasswordRegex.test(passData.password)) {
    error = "Password must be 8 to 16 long alphanumeric, must contain atleast 1 special character and upper case / lower case letters";
    valid = false;
  } else if (passData.password) {
    error = "";
  }
  return { error, valid };
};

export const loginValidation = (userData: Login) => {
  let errors: Login = {};
  let isValid = true;

  if (userData.email !== undefined) {
    const { error, valid } = emailValidation(userData);
    if (!valid) {
      errors.email = error;
      isValid = valid;
    } else if (userData.email) {
      errors.email = '';
    }
  }
  if (userData.password !== undefined) {
    const { error, valid } = passwordRegexValid(userData);
    if (!valid) {
      errors.password = error;
      isValid = valid;
    } else {
      errors.password = "";
    }
  }
  // if (userData.password !== undefined && !userData.password) {
  //   errors.password = "Please enter password";
  //   isValid = false;
  // } else if (userData.password) {
  //   errors.password = '';
  // }

  return { errors, isValid };
};
    
      export const passwordValidation = (passData: IPassword) => {
        let errors: IPassword = {};
        let isValid = true;
      
        // if (passData.oldPassword !== undefined && !passData.oldPassword) {
        //   errors.oldPassword = "Please enter password";
        //   isValid = false;
        // } else {
        //   errors.oldPassword = ""
        // }
      
        if (passData.password !== undefined) {
          const { error, valid } = passwordRegexValid(passData);
          if (!valid) {
            errors.password = error;
            isValid = valid;
          } else {
            errors.password = "";
          }
        }
      
        if (passData.confirmPassword !== undefined && !passData.confirmPassword) {
          errors.confirmPassword = "Please enter Confirm Password";
          isValid = false;
        } else if (
          passData.confirmPassword !== passData.password &&
          passData.confirmPassword
        ) {
          errors.confirmPassword = "Does not match Confirm Password";
          isValid = false;
        } else if (passData.confirmPassword == passData.password) {
          errors.confirmPassword = "";
        }
        return { errors, isValid };
      };
      
      export const signUpValidation = (userData: User) => {
        let errors: User = {};
        let isValid = true;
      
        if (userData.name !== undefined && !userData.name) {
          errors.name = "Please enter first name";
          isValid = false;
        } else if (userData.name) {
          errors.name = '';
        }
      
     
      
        if (userData.email !== undefined) {
          const { error, valid } = emailValidation(userData);
          if (!valid) {
            errors.email = error;
            isValid = valid;
          } else {
            errors.email = "";
          }
        }
      
        
        if (userData.phone !== undefined && !userData.phone) {
          errors.phone = "Please enter phone number";
          isValid = false;
        } else if (
          userData.phone !== undefined &&
          userData.phone.length < 7
        ) {
          errors.phone = "Please enter valid number";
        } else if (userData.phone) {
          errors.phone = '';
        }
      
        if (userData.password !== undefined) {
          const { error, valid } = passwordRegexValid(userData);
          if (!valid) {
            errors.password = error;
            isValid = valid;
          } else {
            errors.password = "";
          }
        }
      
        return { errors, isValid };
      };
      
      
    //   export const finalizerValidation = (userData: Finalize) => {
    //     let errors: Finalize = {};
    //     let isValid = true;
      
    //     if (userData.first_name !== undefined && !userData.first_name) {
    //       errors.first_name = "Please enter first name";
    //       isValid = false;
    //     } else if (userData.first_name) {
    //       errors.first_name = "";
    //     }
      
    //     if (userData.last_name !== undefined && !userData.last_name) {
    //       errors.last_name = "Please enter last name";
    //       isValid = false;
    //     } else if (userData.last_name) {
    //       errors.last_name = "";
    //     }
      
    //     if (userData.card_number !== undefined && !userData.card_number) {
    //       errors.card_number = "Please enter card number";
    //       isValid = false;
    //     } else if (userData.card_number !== undefined && /[0-9]/g.test(userData.card_number) == false) {
    //       errors.card_number = "Please enter valid number"
    //       isValid = false;
    //     } else if (userData.card_number) {
    //       errors.card_number = "";
    //     }
      
    //     if (userData.mm_yy !== undefined && !userData.mm_yy) {
    //       errors.mm_yy = "Required"
    //       isValid = false;
    //     } else if (userData.mm_yy !== undefined &&/^(0[1-9]|1[0-2])\/\d{2,3}$/.test(userData.mm_yy as string) == false) {
    //       errors.mm_yy = "Please enter valid mm/yy"
    //       isValid = false;
    //     } else if (userData.mm_yy) {
    //       errors.mm_yy = "";
    //     }
        
    //     if (userData.cvc !== undefined && !userData.cvc) {
    //       errors.cvc = "Required"
    //       isValid = false;
    //     } else if (userData.cvc !== undefined && /\d{3}/g.test(userData.cvc) ==false ) {
    //       errors.cvc = "Please enter valid cvc"
    //       isValid = false;
    //     } else if (userData.cvc) {
    //       errors.cvc = "";
    //     }
      
    //     if (userData.cancellation === false || userData.venues === false || userData.acknowledge === false) {
    //       errors.checkbox = "Please check the check boxes"
    //       isValid = false;
    //     } else if(userData.acknowledge === true || userData.cancellation === true || userData.venues === true ){
    //       errors.checkbox = ""
    //     }
      
    //     return { errors, isValid };
    //   }
      
    //   export const checkboxValidation = (userChecked:User) => {
    //     let error:User = {};
    //     let isValid = true;
    //     if(userChecked.terms_and_condition === false){
    //       error.terms_and_condition = "Please accept terms and condition "
    //       isValid = false
    //     }else if(userChecked.terms_and_condition === true){
    //       error.terms_and_condition = ""
    //     }
    //     return {error,isValid}
    //   }
      