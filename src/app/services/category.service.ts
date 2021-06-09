import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import { BlogCategory } from '../models/blogCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl:string="https://localhost:44366/api/categories";

  constructor(private httpClient:HttpClient) { }

  public getCategories(){

    return this.httpClient.get<BlogCategory[]>(this.apiUrl)
  }

  public getCategorybyId(id:number){

    let url= `${this.apiUrl}/${id}`;
    return this.httpClient.get<BlogCategory>(url);

  }


}
