import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import {PipeModule} from '../Pipes/pipe.module';

import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { ArticlesComponent } from './articles/articles.component';

import { MenuArticleMostViewComponent } from './menu-article-most-view/menu-article-most-view.component';
import { MenuArchiveComponent } from './menu-archive/menu-archive.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { MaterialModule } from '../modules/material.module';
import { ListCommentsComponent } from './list-comments/list-comments.component';

@NgModule({
  declarations: [
    MenuCategoryComponent,
    ArticlesComponent,
    MenuArticleMostViewComponent,
    MenuArchiveComponent,
    AddCommentComponent,
    ListCommentsComponent,
  ],
  imports: [CommonModule, RouterModule, NgxPaginationModule, MaterialModule,PipeModule],
  exports: [
    MenuCategoryComponent,
    ArticlesComponent,
    MenuArticleMostViewComponent,
    MenuArchiveComponent,
    AddCommentComponent,
    ListCommentsComponent,
  ],
})
export class ComponentsModule {}
