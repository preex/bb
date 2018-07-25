import { NgModule } from '@angular/core';
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
  MatDialogModule,
  MatListModule,
  MatIconModule
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
    MatDialogModule ,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule { }
