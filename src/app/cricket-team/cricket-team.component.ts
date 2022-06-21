import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cricket-team',
  templateUrl: './cricket-team.component.html',
  styleUrls: ['./cricket-team.component.scss']
})
export class CricketTeamComponent implements OnInit {
  regForm!: FormGroup;
  mySkills = ['Batsman','Bowler'];
  formdata: any = []
  count:any=0

  a = true
  checkarr!: FormArray
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (localStorage.getItem('formvalue')) {
      this.formdata = JSON.parse(localStorage.getItem('formvalue')!)
    }

    this.regForm = this.formBuilder.group({
      firstName: ['', Validators.required],
     
      gender: ['', Validators.required],
     
      country: ['', Validators.required],
      
      
      experience: this.formBuilder.array([]),

    });

  

  }
  submit() {
    console.log(this.regForm.value)
    // this.formdata.push(this.regForm.value)
    // localStorage.setItem('formvalue', JSON.stringify(this.formdata))
    // this.router.navigate(['candidateList'])
  }
  exp():FormArray {
    return this.regForm.controls['experience'] as FormArray
  }
  changecheck(e: any, i: any,j:any) {
     this.checkarr =this.exp().at(i).get("skill") as FormArray  
    (e.target.checked)?this.checkarr.value.push(e.target.value):this.checkarr.value.splice(j, 1);      
  }
  addExperience() {
  
      this.exp().push(this.formBuilder.group({
      playerName: ['', Validators.required],
      age: ['', Validators.required],
      bio: ['', Validators.required],
      skill: this.formBuilder.array([]),
    })
    )
    this.count++
  }
  removeexperience(i: any) {
    this.exp().removeAt(i);
  }
}
