import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', ' A simple recipe', 'https://www.thespruceeats.com/thmb/sNVZf2wWo4CCfclqnc4Ix_2PaAo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-639389404-5c450e724cedfd00015b09d5.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
