import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-employees-item',
  templateUrl: './employees-item.component.html',
  styleUrls: ['./employees-item.component.css']
})
export class EmployeesItemComponent implements OnInit {

  @Input() employee: Employee;
  @Output() onDeleteEmployee: EventEmitter<Employee> = new EventEmitter()
  @Output() onToggleStatus: EventEmitter<Employee> = new EventEmitter()
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(employee: any) {
    this.onDeleteEmployee.emit(employee);
  }

  onToggle(employee: any) {
    this.onToggleStatus.emit(employee)
  }
}
