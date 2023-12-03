import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { TechStackUsedComponent } from '../../core/tech-stack-used/tech-stack-used.component';
@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [TechStackUsedComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {

}
