import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Employee} from '../../Employee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Output() onAddEmployee: EventEmitter<Employee> = new EventEmitter;

  name: string;
  lastname: string;
  departmentid: number = 0;
  status: boolean = false;
  showAddForm: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      value => this.showAddForm = value
    );
   }

  ngOnInit(): void {
  }

  onSubmit() {

    if(!this.name || !this.lastname) {
      alert('Please enter the employees full name');
      return;
    }

    const newEmployee = {
      id: 0,          //default value, it is updated in the backend
      name: this.name,
      lastname: this.lastname,
      departmentid: this.departmentid,
      status: this.status
    }

    this.onAddEmployee.emit(newEmployee);

    this.name = '';
    this.lastname = '';
    this.departmentid = 0;
    this.status = false;

  }

}
