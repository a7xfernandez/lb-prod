import {DefaultCrudRepository} from '@loopback/repository';
import {Address, AddressRelations} from '../models';
import {Pglb4DemoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AddressRepository extends DefaultCrudRepository<
  Address,
  typeof Address.prototype.id,
  AddressRelations
> {
  constructor(
    @inject('datasources.pglb4demo') dataSource: Pglb4DemoDataSource,
  ) {
    super(Address, dataSource);
  }
}
