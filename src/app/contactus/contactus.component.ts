import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  angform:FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.angform = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',[Validators.required,Validators.pattern('[0-9]{0-10}')]],
      message:['',Validators.required]
  });
}
  submit(data){

    console.log(data);

  }
}
