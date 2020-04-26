import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedmineService } from 'src/service/redmine.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.less']
})
export class TestCaseComponent implements OnInit {

  projectId;
  projectName = '';
  addModalVisible = false;
  testCaseList = [];


  subject = '';
  condition = '';
  steps = [{step: '', result: ''}, {step: '', result: ''}, {step: '', result: ''}];

  constructor(
    private route: ActivatedRoute,
    private redmine: RedmineService
  ) { }

  ngOnInit(): void {

    this.route.params.pipe(
      switchMap(params => {
        this.projectName = params.name;
        this.projectId = params.id;
        return this.redmine.getTestCase(this.projectId);
      })
    ).subscribe(
      result => {
        console.log(result);
        this.testCaseList = result.issues;
      }
    );


  }

  onAdd() {
    this.addModalVisible = true;
  }

  handleAddTestCase() {
    const data = {
      issue: {
        project_id: this.projectId,
        tracker_id: 14,
        status_id: 9,
        subject: this.subject,
        priority_id: 1
      }
    };
    this.redmine.addTest(data).subscribe(
      resul => {
        console.log(resul);

        this.redmine.getTestCase(this.projectId).subscribe();
        this.addModalVisible = false;
      }
    );
  }

  addStep() {
    this.steps.push({step: '', result: ''});
  }
}
