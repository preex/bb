import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  displayedColumns = ['position', 'emp_name', 'emp_no', 'dept_name'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  moveDetail(row) :void {
    console.log(row);
  }
}


export interface Element {
  position: number;
  emp_name: string;
  emp_no: string;
  dept_name: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, emp_name: 'H.Y.Song', emp_no: "12345678", dept_name: 'KS'},
  {position: 2, emp_name: 'K.S.Lee ', emp_no: "12345678", dept_name: 'YI'},
  {position: 3, emp_name: 'J.H.Yang', emp_no: "12345678", dept_name: 'KS'},
  {position: 4, emp_name: 'S.K.Lee', emp_no: "12345678", dept_name: 'BU'},
  {position: 5, emp_name: 'B.K.Park', emp_no: "12345678", dept_name: 'BU'}
];