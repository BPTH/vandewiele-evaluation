import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-api-with-query-search',
  templateUrl: './api-with-query-search.component.html',
  styleUrls: ['./api-with-query-search.component.scss']
})
export class ApiWithQuerySearchComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // General variables
  universities = [] as any;
  universityQuery = {
    country: '?country=United+States',
    name: ''
  }

  // Table variables
  displayedColumns: string[] = ['no', 'country', 'name', 'web-pages'];
  universityDataSource: MatTableDataSource<any>;

  // Utility variables
  isLoading: boolean = true;
  searchInput: string = '';

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
    this.isLoading = true;

    await this.getUniversities(this.universityQuery.country + this.universityQuery.name).then(data => {
      this.isLoading = false;
      this.universityDataSource = new MatTableDataSource(data);

      this.universityDataSource.paginator = this.paginator;
      this.universityDataSource.sort = this.sort;
    }).catch(err => {
      this.isLoading = true;
      console.log(err);
    });
  }

  // Utility Functions
  async applyFilter() {
    if (this.searchInput !== '') {
      this.universityQuery.name = `&name=${this.searchInput.trim().toLowerCase()}`;
    } else {
      this.universityQuery.name = '';
    }

    await this.initUniversities();

    if (this.universityDataSource.paginator) {
      this.universityDataSource.paginator.firstPage();
    }
  }

  onFilterKeyUp() {
    if (this.searchInput === '') {
      this.applyFilter();
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
        });
    });
  }
}