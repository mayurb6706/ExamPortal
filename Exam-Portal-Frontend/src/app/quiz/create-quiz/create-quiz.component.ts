import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categeory } from 'src/app/Model/categeory';
import { CategeoryService } from 'src/app/services/categeory.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  quizForm: FormGroup
  categeories: Categeory[] = []
  categeory:Categeory=new Categeory()
  constructor(private formBuilder: FormBuilder,
    private quizService: QuizService, private router: Router,
    private categeoryService: CategeoryService
  ) {

    this.categeoryService.getAllCategeory().subscribe({
      next: (data: any) => {
        this.categeories = data
      }, error: (err: any) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.quizForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      noOfQuestion: new FormControl('', [Validators.required]),
      active: new FormControl({ value: false, disabled: true }),
      description: new FormControl('', [Validators.required]),
      cid: new FormControl('', [Validators.required]),
      categeory: new FormGroup({
        cid: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required])
      })
    })

   

  }

  createQuiz() {
    const catId= this.quizForm.value('cid')
    console.log(catId+"Cat ID")
    this.categeoryService.findCategeoryById(catId).subscribe({
      next:(data:any)=>{
        console.log("Categeory Details "+data)
      }
    })
    console.log(this.quizForm.value)
    // this.quizService.createQuiz(this.quizForm.value).subscribe({
    //   next: (data: any) => {
    //     console.log(data)
    //     this.openPopup()
    //   }
    // })
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.navigateToHome()
  }

  navigateToHome() {
    this.router.navigateByUrl('/all-quiz')
  }
  backToHome() {
    this.router.navigateByUrl('/home')
  }

}
