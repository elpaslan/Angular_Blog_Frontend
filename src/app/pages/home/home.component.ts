import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.ajax != null) this.ajax.unsubscribe();
  }
  page: number = 1;
  articles: Article[] = [];
  totalCount: number;
  pageSize: number = 5;
  loadingItem: number = 5;
  ajax: any;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.get('page')) {
        this.page = Number(params.get('page'));
      }
      this.articles = [];
      this.totalCount = 0;
      this.ajax = this.articleService
        .getArticles(this.page, this.pageSize)
        .subscribe((data) => {
          console.log(data);
          this.articles = data.articles;
          this.totalCount = data.totalCount;
        });

      if (this.totalCount > 0) {
        if (this.totalCount >= this.page * this.pageSize) {
          this.loadingItem = 5;
        } else {
          this.loadingItem = this.totalCount - (this.page - 1) * this.pageSize;
        }
      }
    });
  }
}
