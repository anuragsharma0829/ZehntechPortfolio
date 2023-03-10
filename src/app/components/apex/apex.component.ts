import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssetsmmComponent } from 'src/app/modals/assetsmm/assetsmm.component';

@Component({
  selector: 'app-apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.css']
})
export class ApexComponent {

  constructor(private dialog: MatDialog) { }

  openDialogasset(): void {
    const dialogRef = this.dialog.open(AssetsmmComponent, {
      width: '70%',
      height: '80%',
      disableClose: false,
    
   
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
