import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.services';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  posts: any[];

  constructor(private  postService: PostService) { }

  title = 'blog application';

  ngOnInit() {
    //  console.log('Le composant a fini son initialisation');
      this.posts = this.postService.posts;
  }

  onteste(){
    console.log('teste');
  }

}


