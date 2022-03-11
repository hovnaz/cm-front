import { Injectable } from '@angular/core';
import {SkillsElem} from "../models";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private SkillsData:SkillsElem[] = [
    {
      name:"Javascript",
      iconPath:"assets/icons/skills/javascript.jpg",
      rating:5
    },
    {
      name:"MongoDB",
      iconPath:"assets/icons/skills/mongoDB.png",
      rating:3
    },
    {
      name:"React JS",
      iconPath:"assets/icons/skills/react.png",
      rating:3
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
      rating:3
    },
    {
      name:"NodeJS",
      iconPath:"assets/icons/skills/nodejs.png",
      rating:3
    },
    {
      name:"Vue.JS",
      iconPath:"assets/icons/skills/vue.png",
      rating:3
    },
    {
      name:"PHP",
      iconPath:"assets/icons/skills/php.png",
      rating:3
    },
    {
      name:"Ruby",
      iconPath:"assets/icons/skills/ruby.png",
      rating:3
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
      rating:3
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
      rating:3
    }
  ]
  get skills() :SkillsElem[]{return this.SkillsData}
  constructor() { }
}