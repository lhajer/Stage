import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
public recipes;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get("recipes").subscribe((data) => {

      console.log(data);
  
       this.recipes = data;
  
    });
  }

}
