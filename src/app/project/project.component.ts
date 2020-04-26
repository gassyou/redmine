import { Component, OnInit } from '@angular/core';
import { RedmineService } from 'src/service/redmine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less'],
})
export class ProjectComponent implements OnInit {

  projectList = [];
  constructor(
    private router: Router,
    private redmine: RedmineService
  ) { }

  ngOnInit(): void {
    this.redmine.getProjects().subscribe(
      data => {this.projectList = data.projects;}
    );

    // this.redmine.getMyCount().subscribe(
    //   data => {console.log(data); }
    // );
  }

  toTestCase(data) {
    this.router.navigate(['/test-case', {id: data.id, name: data.name}]);
  }


}
