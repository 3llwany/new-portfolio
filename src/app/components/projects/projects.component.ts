import {Component, OnInit} from '@angular/core';
import {IProjects, PROJECTS} from "app/components/projects/projects";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProjects[]

  constructor() {
    this.projects = PROJECTS;
  }

  ngOnInit(): void {
  }

}
