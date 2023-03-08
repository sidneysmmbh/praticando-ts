export interface Employee {
  name: string;
  office: string;
  wage: number;
}

export const employees: Employee[] = [
  { name: 'Pedro', office: 'motorista', wage: 2800 },
  { name: 'Raquel', office: 'cordenadora', wage: 3400 },
  { name: 'Andre', office: 'engenheiro', wage: 5400 },
  { name: 'Fernanda', office: 'cordenadora geral', wage: 6500 },
  { name: 'Marcos', office: 'projetista', wage: 3600 },
];

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
