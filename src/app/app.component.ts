import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from './services/data.service';
import { UniversityData } from './data/universityData';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // General variables
  state: number = 1;

  constructor() {

  }

  ngOnInit(): void {
    
  }

  // Button Functions
  changeState(state: number) {
    this.state = state;
  }
}
