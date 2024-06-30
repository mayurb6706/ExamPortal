import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categeory } from 'src/app/Model/categeory';
import { CategeoryService } from 'src/app/services/categeory.service';

@Component({
  selector: 'app-list-categeory',
  templateUrl: './list-categeory.component.html',
  styleUrls: ['./list-categeory.component.css'],
})
export class ListCategeoryComponent implements OnInit {
  index: number = 0;
  categeories: Categeory[];
  constructor(private catService: CategeoryService, private router: Router) {}

  ngOnInit(): void {
    this.catService.getAllCategeory().subscribe({
      next: (data: any) => {
        this.categeories = data;
      },
      error: (err: any) => console.log(err),
    });
  }

  deleteCategeory(id: number) {
    confirm('Are you sure you want to delete categeory!');
    {
      this.catService.deleteCategeory(id).subscribe({
        next: (data: any) => {
          console.log(data)
          this.router.navigateByUrl('/home');
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
