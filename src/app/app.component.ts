import { Component } from '@angular/core';
import { BasicDataTableFunctions } from './basic-datatable-functions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'datatable';
  public employeeRecords: any[] = []
  public sortReverse = false
  public searchContent = ''
  public temparr: any[] = []

  constructor(public basicDTObj: BasicDataTableFunctions) {
    this.employeeRecords = [
      { "emp_id": 101, "emp_name": "Raj", "emp_design": "Fullstack Developer", "emp_loc": "Bangalore" },
      { "emp_id": 103, "emp_name": "Goutham", "emp_design": "Developer", "emp_loc": "Bangalore" },
      { "emp_id": 105, "emp_name": "Divya", "emp_design": "Jr. Developer", "emp_loc": "Bangalore" },
      { "emp_id": 106, "emp_name": "Kumar", "emp_design": "Software Testing", "emp_loc": "Chenai" },
      { "emp_id": 104, "emp_name": "Alex", "emp_design": "System Administrator", "emp_loc": "Singapore" },
      { "emp_id": 107, "emp_name": "Zon", "emp_design": "Developer", "emp_loc": "Bangalore" },
      { "emp_id": 102, "emp_name": "Vinay Kumar", "emp_design": "Software Testing", "emp_loc": "Chenai" },
      { "emp_id": 108, "emp_name": "Suresh", "emp_design": "Fullstack Developer", "emp_loc": "Singapore" }
    ]
    this.temparr = this.employeeRecords
  }

  sortRecord(key) {
    this.temparr = this.basicDTObj.sortRecord(key, this.sortReverse, this.employeeRecords)
  }

  searchRecord(searchText) {
    this.temparr = this.basicDTObj.searchRecord(searchText, this.employeeRecords)
  }
}






