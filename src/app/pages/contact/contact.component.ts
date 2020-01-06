import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	private submissionForm: AngularFirestoreCollection<any>;

  constructor(private fb: FormBuilder, private firestore: AngularFirestore) { }

  ourForm: FormGroup;

  submitting = false;
  submitted = false;

  ngOnInit(): void {
  	this.submissionForm = this.firestore.collection('submissions');
  	console.log("submissions form: " + this.submissionForm);
  	this.ourForm = this.fb.group({
  		name: ['', Validators.required],
  		email: ['', Validators.required],
  		telefono: ['', Validators.required],
  		message: ['', Validators.required]
  		});
  	console.log("our form: " + this.ourForm);
  }

  submitData(value: any) {
  	console.log(value);
  	console.log(this.submissionForm);
    console.log(this.submitted);

    this.submitting = true;
    this.submissionForm.add(value).then(res => {
      this.submitted = true;
      console.log("submitted true");
    }).catch(err => console.log("error " + err)
    ).finally(() => {
      this.submitting = false;
      console.log("termino");
    });

  }
}
