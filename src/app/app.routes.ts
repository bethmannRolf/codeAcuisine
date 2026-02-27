import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenerateRecipePageComponent } from './generate-recipe-page/generate-recipe-page.component';
import { CookbookCountryBoxComponent } from './cookbook-country-box/cookbook-country-box.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { ChoosePreferencePageComponent } from './choose-preference-page/choose-preference-page.component';
import { RecipeResultsPageComponent } from './recipe-results-page/recipe-results-page.component';
import { RecipeDetailPageComponent } from './recipe-detail-page/recipe-detail-page.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

export const routes: Routes = [

  { path: 'lala', component: LandingPageComponent },
  { path: 'hjgkhj', component: GenerateRecipePageComponent },
  { path: 'cookbook', component: CookbookComponent },
  { path: 'ghfghgf', component: RecipeDetailPageComponent },
  { path: 'gdf', component: CountryPageComponent },
    { path: 'gdfgdfgdf', component: ChoosePreferencePageComponent },
        { path: '', component: LoadingScreenComponent }


  //for testing



];
