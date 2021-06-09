import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { ArticlesComponent } from './articles/articles.component';
import { UrlformatPipe } from '../Pipes/urlformat.pipe';
import { MenuArticleMostViewComponent } from './menu-article-most-view/menu-article-most-view.component';
import { MenuArchiveComponent } from './menu-archive/menu-archive.component';

@NgModule({
  declarations: [MenuCategoryComponent, ArticlesComponent, UrlformatPipe, MenuArticleMostViewComponent, MenuArchiveComponent],
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  exports: [MenuCategoryComponent, ArticlesComponent, UrlformatPipe,MenuArticleMostViewComponent,MenuArchiveComponent],
})
export class ComponentsModule {}