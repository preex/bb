import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { sido } from './sido';
import { sggu } from './sggu';
import { HiraItem } from '../../../service/hira/hira-item';
import { HiraRequest } from '../../../service/hira/hira-request';
import { HiraHospitalService } from '../../../service/hira/hira-hospital.service';

@Component({
  selector: 'app-hira-popup',
  templateUrl: './hira-popup.component.html',
  styleUrls: ['./hira-popup.component.css']
})
export class HiraPopupComponent implements OnInit {

  title: string = 'hira gazuaa';
  sidoCd: string = '';
  sgguCd: string = '';
  yadmNm: string = '';
  sidoList: Object[];
  sgguList: Object[];
  filteredSgguList: Object[];

  
  itemList: HiraItem[];

  constructor(public dialogRef: MatDialogRef<HiraPopupComponent>, private hiraService: HiraHospitalService) { }

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
  
  searchHospitalList(){
    let params = new HiraRequest();
    params.sgguCd = this.sgguCd;
    params.sidoCd = this.sidoCd;
    params.yadmNm = this.yadmNm;
    
    this.hiraService.getList(params).subscribe(response => this.itemList = response.items.item);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
