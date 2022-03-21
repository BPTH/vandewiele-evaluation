import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { UniversityData } from '../data/universityData';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-api-with-local-search',
  templateUrl: './api-with-local-search.component.html',
  styleUrls: ['./api-with-local-search.component.scss']
})
export class ApiWithLocalSearchComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // General variables
  universities = [] as any;
  universityQuery = {
    country: '?country=United+States'
  }

  // Table variables
  displayedColumns: string[] = ['country', 'name', 'state-province'];
  universityDataSource: MatTableDataSource<any>;

  // Utility variables


  constructor(
    private dataService: DataService
  ) {
    this.universityDataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.initUniversities();
  }

  ngAfterViewInit() {
    this.universityDataSource.paginator = this.paginator;
    this.universityDataSource.sort = this.sort;
  }

  // Init Functions
  async initUniversities() {
    await this.getUniversities(this.universityQuery.country).then(data => {
      this.universityDataSource = new MatTableDataSource(data);
    }).catch(err => {
      console.log(err);
    });
  }

  // Utility Functions
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.universityDataSource.filter = filterValue.trim().toLowerCase();

    if (this.universityDataSource.paginator) {
      this.universityDataSource.paginator.firstPage();
    }
  }

  // API Functions
  getUniversities(query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dataService.getUniversities(query)
        .subscribe(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
    })
  }
}
