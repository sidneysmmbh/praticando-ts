import { employees } from './DB/DB';
import { Employee } from './Interfaces/EmployeeInterface';

export function myFilter<T>(list: T[], callBack: (item: T) => boolean) {
  const newList: T[] = [];
  for (let i = 0; list.length > i; i++) {
    if (callBack(list[i])) {
      newList.push(list[i]);
    }
  }
  return newList;
}

export const employeesWithSalaryLessThan4000: Employee[] = myFilter<Employee>(
  employees,
  (employee: Employee) => employee.wage < 4000,
);

console.log(employeesWithSalaryLessThan4000);
