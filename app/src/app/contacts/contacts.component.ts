import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactForm!: FormGroup;
  ContactList: any[];
  constructor(private fb:FormBuilder) { 
    this.ContactList=[];
        this.contactForm=this.fb.group({
          name:['',Validators.required],
          phonenumber:['',Validators.required],
          email:['',Validators.required]
        })
      }

      public addItem():void{
        console.log(this.contactForm.value)
        this.ContactList.push(this.contactForm.value); 
       this.reset();  
      }
      reset(){
        this.contactForm.reset();
      }
    
  ngOnInit(): void {
  }

}
