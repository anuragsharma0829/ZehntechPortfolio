import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TruemdComponent } from 'src/app/modals/truemd/truemd.component';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.css']
})
export class JavaScriptComponent {
  constructor(private dialog: MatDialog) { }
  
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
