import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Department } from "src/app/models/department-model";
import { Observable } from "rxjs";

import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  formData: Department;

  readonly APIUrl = "http://127.0.0.1:8080/api";

  getDepList(): Observable<Department[]> {
    return this.http.get<Department[]>(this.APIUrl + "/department");
  }

  addDepartment(dep: Department) {
    return this.http.post(this.APIUrl + "/Department", dep);
  }

  updateDepartment(dep: Department) {
    return this.http.put(this.APIUrl + "/Department", dep);
  }

  deleteDepartment(id: number) {
    return this.http.delete(this.APIUrl + "/department/" + id);
  }

  private _listeners = new Subject<any>();
  listen(): Observable<any> {
    return this._listeners.asObservable();
  }
  filter(filterBy: string) {
    this._listeners.next(filterBy);
  }
}
