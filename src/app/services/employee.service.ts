import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Employee } from "src/app/models/employee-model";
import { Observable } from "rxjs";
import { Department } from "src/app/models/department-model";

import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  formData: Employee;

  readonly APIUrl = "http://127.0.0.1:8080/api";

  getEmpList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.APIUrl + "/employee");
  }

  addEmployee(emp: Employee) {
    return this.http.post(this.APIUrl + "/Employee", emp);
  }

  updateEmployee(emp: Employee) {
    return this.http.put(this.APIUrl + "/Employee", emp);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.APIUrl + "/Employee/" + id);
  }

  getDepDropDownValues(): Observable<any> {
    return this.http.get<Department[]>(this.APIUrl + "/department");
  }

  private _listeners = new Subject<any>();
  listen(): Observable<any> {
    return this._listeners.asObservable();
  }
  filter(filterBy: string) {
    this._listeners.next(filterBy);
  }
}
