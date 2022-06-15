import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map,tap} from 'rxjs/operators'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  // kondisi jika memakai token
  getHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'f44f41a6-dc99-4a1e-a793-399aeed330c3',
    });
  }

  getGroupingList(): Observable<any> {
    return this.http.get(`${environment.urlServer}/groupinglist`) as Observable<any>;
  }

  getGenderList(): Observable<any> {
    return this.http.get(`${environment.urlServer}/gender`) as Observable<any>;
  }

  // getData(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')
  //     .pipe(
  //       map((response:[]) => response.map(item => item['name']))
  //     )
  // }
  

  getTblEmployee(): Observable<any> {
    return this.http.get(`${environment.urlServer}/employees`) as Observable<any>;
  }


  postTblEmployee(formData: any): Observable<any> {
    return this.http.post(`${environment.urlServer}/employees`,formData) as Observable<any>;
  }

  patchTblEmployee(id: any, formData: any): Observable<any> {
    return this.http.patch(`${environment.urlServer}/employees/`+ id , formData) as Observable<any>;
  }



  getDeleteEmployee(id: any): Observable<any> {
    return this.http.delete(`${environment.urlServer}/employees/` + id) as Observable<any>;
    
  }

}
