import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { MyvalidationService } from 'src/app/services/myvalidation.service';
import { BlogCategory } from 'src/app/models/blogCategory';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  FormGroup,
  FormControl,
  Validator,
  AbstractControl,
  Validators,
  RequiredValidator,
} from '@angular/forms';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {
  public Editor = ClassicEditor;
  public onReady(editor:any) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }

  fileData: File;
  picture: string;
  articleForm: FormGroup;
  success: boolean;
  loading: boolean;
  info: string;
  categories: BlogCategory[];
  articleId:number;
  contentLoading: boolean = true;

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    public myvalidationService:MyvalidationService,
    private router:Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCategory();
    this.articleId = Number(this.route.snapshot.paramMap.get("id"));

    this.articleService.getArticle(this.articleId).subscribe(data => {
      this.picture = data.picture;

      this.getControls.title.setValue(data.title);
      this.getControls.contentSummary.setValue(data.contentSummary);
      this.getControls.contentMain.setValue(data.contentMain);
      this.getControls.category.setValue(data.category);
      this.contentLoading = false;
    });

    this.articleForm = new FormGroup({
      title: new FormControl("", Validators.required),
      contentSummary: new FormControl("", Validators.required),
      contentMain: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      picture: new FormControl("")
    });
  }
  displayCategoryName(category:any) {
    return category.categoryName;
  }
  getCategory() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
    });
  }
  get getControls() {
    return this.articleForm.controls;
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.loading = true;
      this.articleService
        .updateArticle(this.articleId, this.articleForm.value)
        .subscribe(
          data => {
            this.success = true;
            // alert("geldi");
            this.router.navigateByUrl("/admin/makale/liste");
          },
          error => {
            this.success = false;
            this.info = "bir hata meydana geldi:";
            console.log(error);
          }
        );
    }
  }

  upload(files: any) {
    this.fileData = files.target.files[0];

    let formData = new FormData();

    formData.append('picture', this.fileData);
    this.articleService.saveArticlePicture(formData).subscribe((result) => {
      console.log(result.path);
      this.picture = result.path;

      this.articleForm.controls.picture.setValue(this.picture);
    });
  }

}
