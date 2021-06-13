import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl: string = "https://localhost:44366/api/comments";
  loading: boolean;
  addComment(comment: Comment) {
    this.loading = true;
    return this.httpClient.post(this.apiUrl, comment).pipe(
      tap(x => {
        this.loading = false;
      })
    );
  }

  commentList(id: number) {
    return this.httpClient.get<Comment[]>(`${this.apiUrl}/${id}`);
  }
}
