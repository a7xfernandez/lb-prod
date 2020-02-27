import { DefaultCrudRepository } from '@loopback/repository';
import { User, UserRelations } from '../models';
import { Pglb4DemoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export type Credentials = {
  email: string;
  password: string;
}

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
  > {
  constructor(
    @inject('datasources.pglb4demo') dataSource: Pglb4DemoDataSource,
  ) {
    super(User, dataSource);
  }
}
