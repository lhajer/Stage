import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public columns = ['id', 'first_name', 'last_name'];
  public rows;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get("users").subscribe((data) => {

      console.log(data);
  
      this.rows = data;
  
      });
  }

}
