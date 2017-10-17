import validator from 'validator';
import {required} from './required';

export const validators = Object.assign({}, validator, required);
