import { Injectable } from '@angular/core';
import { Type } from './type';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  constructor(private http: HttpClient) {}
  SelectedType: Type = <Type>{};
  TypeList: Observable<Type[]>;
  GetTypeList(): void {
    this.http
      .get<any>('https://localhost:5001/api/CategoryApi')
      .subscribe((data) => {
        this.TypeList = data;
        console.log(data);
      });
  }
}
