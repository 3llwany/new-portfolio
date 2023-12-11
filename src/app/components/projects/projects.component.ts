import {Component, OnInit} from '@angular/core';
import {IProjects, PROJECTS} from "app/components/projects/projects";
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor]
})
export class ProjectsComponent implements OnInit {
  projects: IProjects[]

  constructor() {
    this.projects = PROJECTS;
  }

  ngOnInit(): void {
  }

}
