import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Employee } from '../Employee';
import { parse } from '@fortawesome/fontawesome-svg-core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  deleteEmployees(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.delete<Employee>(url);
  }

  updateStatus(employee: Employee): Observable<Employee> {
    const payload = new HttpParams()
    .set('id', employee.id)
    .set('name', employee.name)
    .set('lastname', employee.lastname)
    .set('departmentid', employee.departmentid)
    .set('status', employee.status);

    return this.http.put<Employee>(this.apiUrl, payload);
  }

  addEmployee(employee: Employee):Observable<Employee> {
    const payload = new HttpParams()
    .set('name', employee.name)
    .set('lastname', employee.lastname)
    .set('departmentid', employee.departmentid)
    .set('status', employee.status);
    
    return this.http.post<Employee>(this.apiUrl, payload);
  }
}
