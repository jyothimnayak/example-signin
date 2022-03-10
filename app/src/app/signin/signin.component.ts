import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;
  constructor(private fb:FormBuilder) { 
        this.signinForm=this.fb.group({
          email:['',Validators.required],
          password:['',Validators.required],
        })
      }

      public addItem():void{
        console.log(this.signinForm.value)
       this.reset();  
      }
      reset(){
        this.signinForm.reset();
      }
  

  ngOnInit(): void {
  }

}
