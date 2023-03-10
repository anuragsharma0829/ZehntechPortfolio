import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ShowportComponent } from '../showport/showport.component';
import { DialogElementsExampleDialogComponent } from '../dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { ExamportalComponent } from 'src/app/modals/examportal/examportal.component';
import { AssetsmmComponent } from 'src/app/modals/assetsmm/assetsmm.component';
import { TruemdComponent } from 'src/app/modals/truemd/truemd.component';

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.css']
})
export class AllprojectsComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogElementsExampleDialogComponent, {
      width: '70%',
      height: '80%',
      disableClose: false,
    
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // Exam portal
  openDialogexxam():void{
    const dialogRef = this.dialog.open(ExamportalComponent, {
      width: '70%',
      height: '80%',
      disableClose: false,
    
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // Assets
  openDialogasset():void{
    const dialogRef = this.dialog.open(AssetsmmComponent, {
      width: '70%',
      height: '80%',
      disableClose: false,
    
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // TrueMd
  openDialogtruemd():void{
    const dialogRef = this.dialog.open(TruemdComponent, {
      width: '70%',
      height: '80%',
      disableClose: false,
    
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}