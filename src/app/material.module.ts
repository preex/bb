import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatCardModule,
  MatTableModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';

// material 임포트용
@NgModule({
  exports: [ 
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
