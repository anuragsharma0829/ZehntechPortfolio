import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExamportalComponent } from 'src/app/modals/examportal/examportal.component';
import { DialogElementsExampleDialogComponent } from '../dialog-elements-example-dialog/dialog-elements-example-dialog.component';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {


  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogElementsExampleDialogComponent, {
      width: '70%',
      height: '80%',
      disableClose: false,
    
   
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // ExamPortal
  openDialogexxam(): void {
    const dialogRef = this.dialog.open(ExamportalComponent, {
      width: '70%',
      height: '80%',
      disableClose: false,
    
   
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
