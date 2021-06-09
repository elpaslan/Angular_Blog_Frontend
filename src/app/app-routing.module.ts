import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ArticleComponent } from './pages/article/article.component';
import { CategoryArticlesComponent } from './pages/category-articles/category-articles.component';
import { SearchComponent } from './pages/search/search.component';
import { ArchiveComponent } from './pages/archive/archive.component';

const routes: Routes = [
  {
    //www.zavazingo.com/
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path:'sayfa/:page',
        component: HomeComponent,
      },
      {
        path:'makale/:title/:id',
        component:ArticleComponent
      },
      {
        path: "kategori/:name/:id",
        component: CategoryArticlesComponent
      },
      {
        path: "kategori/:name/:id/sayfa/:page",
        component: CategoryArticlesComponent
      },
      {
        path: "arama/sayfa/:page",
        component: SearchComponent
      },
      {
        path: "arsiv/:year/:month",
        component: ArchiveComponent
      },
      {
        path: "arsiv/:year/:month/sayfa/:page",
        component: ArchiveComponent
      },

      {
        //www.zavazingo.com/hakkimizda
        path:"hakkimizda",
        component:AboutMeComponent
      },
      {
        //www.zavazingo.com/iletisim
        path:"iletisim",
        component:ContactComponent
      },
    //   { path: "**"
    //   , component: PageNotFoundComponent
    // }
    ],
  },
  {
    //www.zavazingo.com/admin
    path:"admin",
    component:AdminLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
