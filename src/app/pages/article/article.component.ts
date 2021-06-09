import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { BlogCategory } from 'src/app/models/blogCategory';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: Article;
  category: BlogCategory;

  constructor(
    public articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.articleService.loading = true;
      let id = Number(this.route.snapshot.paramMap.get('id'));

      this.articleService.getArticle(id).subscribe((data) => {
        this.article = data;
        this.category = data.category;

        this.articleService.articleViewCountUp(this.article.id).subscribe();
      });
    });
  }
}
