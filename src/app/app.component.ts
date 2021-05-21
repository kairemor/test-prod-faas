import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import axios from 'axios'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testapp2';

  ngOnInit() {
    axios.get(environment.BACKEND_URL)
      .then(res => {
        console.log(res);
        this.title = res.data
      })
  }
}
