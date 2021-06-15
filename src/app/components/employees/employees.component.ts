import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployees(employee)
    .subscribe(
      () => (this.employees = (this.employees.filter(e => e.id !== employee.id)))
    );
  }

  toggleStatus(employee: Employee) {
    employee.status = !employee.status;
    this.employeeService.updateStatus(employee).subscribe();
  }

  addEmployee(employee: Employee) {
    this.employeeService.addEmployee(employee).subscribe(data => this.employees.push(data));
  }
}
