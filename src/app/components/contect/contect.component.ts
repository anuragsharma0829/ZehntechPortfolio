
import { GetDetailsService } from 'src/app/service/get-details.service';
import { FormGroup, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

import { Component, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Editor } from '@ckeditor/ckeditor5-core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';





@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css'],
 
 
})
export class ContectComponent{
  public Editor: any  = ClassicEditor;

  @ViewChild('f', { static: true })
  f!: NgForm;

  contact = {
    name: '',
    email: '',
    number: '',
    comment: '',
  }
  constructor(private _contact: GetDetailsService) { }

  

 
  addQuiz() {

    if (this.f.valid) {
      this._contact.setDetails(this.contact).subscribe((data: any) => {
        console.log(data);

        this.contact = data;
        Swal.fire("Success", "Details submited successfully", 'success')
      }, (error) => {
        Swal.fire("Error", "Something went wrong ", "error")
      })

    }
    else {
    }
  }

}
