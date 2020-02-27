import * as isEmail from 'isemail';
import { Credentials } from '../repositories/user.repository';
import { HttpErrors } from '@loopback/rest';

export function validateCredentials(credentials: Credentials) {
  if (!isEmail.validate(credentials.email)) {
    throw new HttpErrors.UnprocessableEntity('Invalid Email');
  }

  if (credentials.password.length < 8) {
    throw new HttpErrors.UnprocessableEntity(
      'Password lenght should be greater than 8');
  }
}
