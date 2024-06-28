import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategeoryService } from 'src/app/services/categeory.service';

@Component({
  selector: 'app-create-categeory',
  templateUrl: './create-categeory.component.html',
  styleUrls: ['./create-categeory.component.css']
})
export class CreateCategeoryComponent implements OnInit {

  categeoryForm: FormGroup
  constructor(private formBuilder: FormBuilder,
    private catService: CategeoryService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.categeoryForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])

    })
  }

  addCategeory() {
    console.log(this.categeoryForm.value)
    this.catService.addNewCategeory(this.categeoryForm.value).subscribe({
      next: (data: any) => {
        if (data != null) {
          this.router.navigateByUrl('/home')
        }
      }, error: (err: any) => console.log(err)
    })
  }
}
