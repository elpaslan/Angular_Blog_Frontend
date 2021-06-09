import { Component, OnInit } from '@angular/core';
import { BlogCategory } from 'src/app/models/blogCategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent implements OnInit {

  categories:BlogCategory[]=[];

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    //Oninit componenetiniz yüklendiği zaman çalışan bir event'tir
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;

    })


  }

}
