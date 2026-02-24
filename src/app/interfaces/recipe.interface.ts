export interface Recipe {
  id?: string;
  cookingTime:string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  nutritions: Nutrition[];
  steps: string[];
  country:string;
  createdAt: Date;
  createdBy: string;
}

export interface Ingredient {
  name: string;
  amount: string;
}

export interface Nutrition {
    energy: number;
    protein: number;
    fat: number;
    carbs: number;
}