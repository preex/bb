import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { sido } from './sido';
import { sggu } from './sggu';

@Component({
  selector: 'app-hira-popup',
  templateUrl: './hira-popup.component.html',
  styleUrls: ['./hira-popup.component.css']
})
export class HiraPopupComponent implements OnInit {

  title: string = 'hira gazuaa'
  sidoCd: string = ''
  sgguCd: string = ''

  sidoList: Object[]
  sgguList: Object[]
  filteredSgguList: Object[]

  constructor(public dialogRef: MatDialogRef<HiraPopupComponent>) { }

  ngOnInit() {
    this.sidoList = sido;
    this.sgguList = sggu;
    this.filteredSgguList = [];
  }

  onSelect(event) {
    if (event.value != undefined) {
      this.filteredSgguList = this.sgguList.filter(sggu => sggu['code'].substring(0, 2) == event.value.substring(0, 2));
    } else {
      this.filteredSgguList = [];
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
