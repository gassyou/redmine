import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedmineService {

  constructor(private http: HttpClient) { }

  url(url: string) {
    return 'https://rococo.net.cn:1443/redmine/' + url;
  }

  getProjects(): Observable<any> {
    return this.http.jsonp(this.url('projects.json'), 'callback');
  }

  getTestCase(projectId): Observable<any> {
    const trackerID = 14;
    return this.http.jsonp(this.url(`issues.json?project_id=${projectId}&tracker_id=14`), 'callback');
  }

  addTest(data: any): Observable<any> {
    return this.http.post(this.url('issues.json'), data);
  }

  getMyCount(): Observable<any> {
    return this.http.jsonp(this.url('my/account.json'), 'callback');
  }

}
