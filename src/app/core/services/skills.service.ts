import { Injectable } from '@angular/core';
import {LanguageElem, SkillsElem} from '../models';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private languages:LanguageElem[] = [
    {
      language:"English",
      level:"B2",
      selected:true,
    },
    {
      language:"Russian",
      level:"A2",
      selected:true
    }
  ]
  private SkillsData:SkillsElem[] = [
    {
      name:"Javascript",
      iconPath:"assets/icons/skills/javascript.jpg",
      rating:5
    },
    {
      name:"MongoDB",
      iconPath:"assets/icons/skills/mongoDB.png",
      rating:5
    },
    {
      name:"React JS",
      iconPath:"assets/icons/skills/react.png",
      rating:1
    },
    {
      name:"Angular",
      iconPath:"assets/icons/skills/angular.png",
      rating:3
    },
    {
      name:"PostgreSQL",
      iconPath:"assets/icons/skills/postgreSQL.png",
      rating:3
    },
    {
      name:"jQuery",
      iconPath:"assets/icons/skills/jQuery.png",
      rating:3
    },
    {
      name:"MYSQL",
      iconPath:"assets/icons/skills/mysql.png",
      rating:5
    },
    {
      name:"NodeJS",
      iconPath:"assets/icons/skills/nodejs.png",
      rating:2
    },
    {
      name:"Vue.JS",
      iconPath:"assets/icons/skills/vue.png",
      rating:4
    },
    {
      name:"PHP",
      iconPath:"assets/icons/skills/php.png",
      rating:3
    },
    {
      name:"Ruby",
      iconPath:"assets/icons/skills/ruby.png",
      rating:2
    },
    {
      name:"CSS3",
      iconPath:"assets/icons/skills/css.png",
      rating:3
    },
    {
      name:"HTML5",
      iconPath:"assets/icons/skills/html.png",
      rating:3
    },
    {
      name:"Wordpress",
      iconPath:"assets/icons/skills/wordpress.png",
      rating:4
    },
    {
      name:"GraphQL",
      iconPath:"assets/icons/skills/graphQL.png",
      rating:3
    },
    {
      name:"Python",
      iconPath:"assets/icons/skills/python.png",
      rating:3
    },
    {
      name:"test",
      iconPath:"assets/icons/skills/python.png",
      rating:1
    }
  ]
  get skills() :SkillsElem[]{return this.SkillsData}
  constructor() { }



  new(value: string,rating:number=0) {
    const res:SkillsElem = {
      name:value,
      iconPath:"assets/icons/skills/python.png",
      rating:rating,
    }
    this.SkillsData.push(res);
  }
  get(id: number): SkillsElem {
    return this.SkillsData[id];
  }
  remove(id: number): void {
    this.SkillsData.splice(id,1);
  }
  update(id: any, rating: number) {
    this.SkillsData[id].rating = rating+1;
  }
  get language():LanguageElem[]{return this.languages}
}
