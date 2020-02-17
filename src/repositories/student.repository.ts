import { DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory } from '@loopback/repository';
import { Student, StudentRelations, Department, Address } from '../models';
import { Pglb4DemoDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { DepartmentRepository } from './department.repository';
import { AddressRepository } from './address.repository';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.id,
  StudentRelations
  > {

  public readonly department: BelongsToAccessor<Department, typeof Student.prototype.id>;

  public readonly address: HasOneRepositoryFactory<Address, typeof Student.prototype.id>;

  constructor(
    @inject('datasources.pglb4demo') dataSource: Pglb4DemoDataSource,
    @repository.getter('DepartmentRepository')
    protected departmentRepositoryGetter: Getter<DepartmentRepository>,
    @repository.getter('AddressRepository')
    protected addressRepositoryGetter: Getter<AddressRepository>
  ) {
    super(Student, dataSource);
    this.department = this.createBelongsToAccessorFor(
      'department',
      departmentRepositoryGetter,
    );
    this.address = this.createHasOneRepositoryFactoryFor(
      'address',
      addressRepositoryGetter
    )
    this.registerInclusionResolver('department', this.department.inclusionResolver);
  }
}
