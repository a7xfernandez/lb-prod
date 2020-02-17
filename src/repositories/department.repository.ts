import {DefaultCrudRepository} from '@loopback/repository';
import {Department, DepartmentRelations} from '../models';
import {Pglb4DemoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DepartmentRepository extends DefaultCrudRepository<
  Department,
  typeof Department.prototype.id,
  DepartmentRelations
> {
  constructor(
    @inject('datasources.pglb4demo') dataSource: Pglb4DemoDataSource,
  ) {
    super(Department, dataSource);
  }
}
