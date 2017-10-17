import {validators} from '../validators';

class ValidationService {
  constructor(validators) {
    this._validators = validators;
    this._validations = {};
    this._defaulValidationError = 'Invalid field';
  }
  get validators() {
    return this._validators;
  }
  addValidators(validators) {
    Object.assign(this._validators, validators);
  }
  get validations() {
    return this._validations;
  }
  addValidations(validations) {
    Object.assign(this._validations, validations);
  }
  get defaulValidationError() {
    return this._defaulValidationError;
  }
  set defaulValidationError(value) {
    this._defaulValidationError = value;
  }
}

export const validationService = new ValidationService(validators);
