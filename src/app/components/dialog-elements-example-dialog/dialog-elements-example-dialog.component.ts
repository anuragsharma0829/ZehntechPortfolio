import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.component.html',
  styleUrls: ['./dialog-elements-example-dialog.component.css']
})
export class DialogElementsExampleDialogComponent {
  
  dialogRef: any;
  onNoClick(): void {
    // Close the dialog and return false
    // this.dialogRef.close(false);
  }

  onYesClick(): void {
    // Close the dialog and return true
    // this.dialogRef.close(true);
  }

  constructor() { 
     }

  ngOnInit(): void {
   

}

  }





