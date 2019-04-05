import { Subject } from "rxjs/Subject";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class PostService {
    posts = [ 
        {
          title: 'OH-HUM my first post !',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          loveIts: 0,
          created_at: new Date()
        },
        {
          title: 'This is a new post !',
          content: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          loveIts: 0,
          created_at: new Date()
        },
        {
          title: 'Words of the end !',
          content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          loveIts: 0,
          created_at: new Date()
        }
    ]

  addPost(title: string, content: string, loveIts: number, created_at: Date) {
    const postObject = {
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date()
    };
    postObject.title = title;
    postObject.content = content;
    this.posts.push(postObject);
  }

  deleteOne(index: number) {
    return delete(this.posts[index]);
  //  console.log(this.posts[3]);
  }
  
}