import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenerateRecipePageComponent } from './generate-recipe-page/generate-recipe-page.component';
import { CookbookCountryBoxComponent } from './cookbook-country-box/cookbook-country-box.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { ChoosePreferencePageComponent } from './choose-preference-page/choose-preference-page.component';

export const routes: Routes = [

    {path:'lala', component:LandingPageComponent},
    {path: 'recipeGenerator', component: GenerateRecipePageComponent},
     {path: 'cookbook', component: CookbookComponent},
       {path: '', component: ChoosePreferencePageComponent} //for testibng



];
