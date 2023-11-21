import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Experience } from './model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  //creatething()

  public findAll(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.usersUrl);
  }

  public save(experience: Experience) {
    return this.http.post<Experience>(this.usersUrl, experience);
  }
}