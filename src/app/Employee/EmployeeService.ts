import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from './EmployeeModel';

@Injectable()
export class EmployeeService {
    private _url: string = "/src/app/osobe.json";

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this._url);
    }
}