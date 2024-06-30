import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categeory } from 'src/app/Model/categeory';
import { CategeoryService } from 'src/app/services/categeory.service';

@Component({
  selector: 'app-update-categeory',
  templateUrl: './update-categeory.component.html',
  styleUrls: ['./update-categeory.component.css'],
})
export class UpdateCategeoryComponent implements OnInit {
  categeoryForm: FormGroup;
  categeory: Categeory = new Categeory();
  constructor(
    private formBuilder: FormBuilder,
    private catService: CategeoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const cid = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(typeof cid + ' type ');
    this.catService.findCategeoryById(cid).subscribe({
      next: (data: any) => {
        console.log(data);
        this.categeoryForm.patchValue(data);
      },
    });

    this.categeoryForm = this.formBuilder.group({
      cid: new FormControl(),
      name: new FormControl({ value: '', disabled: true }),
      description: new FormControl('', [Validators.required]),
    });
  }

  updateCategeory() {
    this.catService.updateCategeory(this.categeoryForm.value).subscribe({
      next: (data: any) => {
       this.openPopup()
        
      },
      error:(err:any)=>{
        console.log(err)
      }
    });
  }

  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
    this.navigateToCategeoryList()
  }

  navigateToCategeoryList() {
    this.router.navigateByUrl('/all-categeory');
  }
  backToHome() {
    this.router.navigateByUrl('/all-categeory');
  }
}
