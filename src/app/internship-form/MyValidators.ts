import {FormControl} from "@angular/forms";
/**
 * Created by roije on 15/11/2016.
 */
export class MyValidators {

  static getInitialsValidator() {
    return function initialsValidator(control: FormControl): {[s: string]: boolean} {

      //check for error
      if(!control.value.match(/^123/)) { //my custom code
        return { invalidChars: true}
      }
    }
  }

  static getEmailValidator() {
    return function emailValidator(control: FormControl): {[s: string]: boolean} {
      if(!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return {
          invalidEmail : true
        }
      }
    }
  }

}
