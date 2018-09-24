import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthentificationComponent,
    AddRecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'Hello',
        component: HomeComponent
      },
      {
        path: 'Auth',
        component: AuthentificationComponent
      },
      {
        path: 'AddRecipe/:id',
        component: AddRecipeComponent
      },
      {
        path: 'recipes',
        component: RecipeListComponent
      }
      
      
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
