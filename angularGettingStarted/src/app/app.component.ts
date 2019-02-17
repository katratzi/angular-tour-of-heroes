import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // set the title for the head
  public constructor(private titleService: Title ) { }
  
  title = 'Tour of Heroes';
  
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
