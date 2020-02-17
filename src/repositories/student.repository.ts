import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Student, StudentRelations, Department} from '../models';
import {Pglb4DemoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {DepartmentRepository} from './department.repository';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.id,
  StudentRelations
> {

  public readonly department: BelongsToAccessor<Department, typeof Student.prototype.id>;

  constructor(
    @inject('datasources.pglb4demo') dataSource: Pglb4DemoDataSource, @repository.getter('DepartmentRepository') protected departmentRepositoryGetter: Getter<DepartmentRepository>,
  ) {
    super(Student, dataSource);
    this.department = this.createBelongsToAccessorFor('department', departmentRepositoryGetter,);
    this.registerInclusionResolver('department', this.department.inclusionResolver);
  }
}
