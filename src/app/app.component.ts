import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'demo';
  
  constructor(private service:PostService) {}
  user : any = []
  
  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        console.log(response);
         this.user = response.data;
      });
}
}
