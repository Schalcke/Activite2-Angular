import { Component, Input, OnInit } from '@angular/core';
import { PostService } from "../services/post.services";
import { Router } from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postloveIts: number;
  @Input() postCreated_at: Date;
  @Input() indexOfPost: number;

  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit() {
  }

  onPostloveIts() {
    return  this.postloveIts++;
  }

  onPostDontloveIts() {
    return  this.postloveIts--;
  }

  getColor() {
    if (this.postloveIts > 0) {
      return 'green';
    } else if(this.postloveIts < 0) {
      return 'red';
    }
  }

  getPostByIndex(index: number) {   
    index = this.indexOfPost; 
  //  console.log(this.indexOfPost);
  }

  onDelete() {
    this.postService.deleteOne(this.indexOfPost); 
  }
  
}
