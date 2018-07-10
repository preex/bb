import { Component, OnInit } from '@angular/core';
import { HiraPopupComponent } from '../../pages/popup/hira-popup/hira-popup.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-company-reg',
  templateUrl: './company-reg.component.html',
  styleUrls: ['./company-reg.component.css']
})
export class CompanyRegComponent implements OnInit {

  clcdList: Object[] = [{ name: '상급병원', value: '01' }, { name: '종합병원', value: '11' }];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openPickmeDialog(){
    const dialogRef = this.dialog.open(HiraPopupComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  saveCompany(){
    console.log('save company');
  }
}
