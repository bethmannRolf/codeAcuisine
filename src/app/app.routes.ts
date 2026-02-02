import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenerateRecipePageComponent } from './generate-recipe-page/generate-recipe-page.component';

export const routes: Routes = [

    {path:'', component:LandingPageComponent},
    {path: 'cookbook', component: GenerateRecipePageComponent}


];
