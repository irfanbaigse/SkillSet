# SkillSet
A simple JSON format for skill sets and a mind map generator

[Demo](http://irfanbaig.github.io/)

## Background

Initially created to help me choose technology stacks for 2015 Eleme Hackathon according to the skill sets of my teammates and me.

SkillSet can also be used to communicate skill sets and skill requirements between employers and job seekers, or to help leaders optimize assignment of tasks to teams.

SkillSet uses [Baidu FEX team](http://fex.baidu.com/)'s [Kity](https://github.com/fex-team/kity) and [KityMinder Core](https://github.com/fex-team/kityminder-core) to generate mind maps.

## Skill Levels

    1: Novice
    2: Intermediate
    3: Advanced
    4: Expert
    5: Master

## Example

### JSON

    {
      "name": "Irfan Baig",
      "skillset": {
        "PHP": 4,
        "Assembly Language": 2,
        "C#": 1,
        "C++": 1,
        "Dart": 1,
        "Data Store": {
          "NoSQL": {
            "MongoDB": 2,
            "Neo4j": 1,
            "Redis": 2
          },
          "RDBMS": {
            "MySQL": 3,
            "PostgreSQL": 1,
            "SQL": 3
          }
        },
        "Front-end": {
          "Angular 2.0": 0,
          "AngularJS": 1,
          "Backbone/Marionette": 0,
          "CSS": {
            ".level": 2,
            "Bootstrap": 2,
            "SASS/SCSS": 2,
            "Semantic UI": 1
          },
          "HTML": 3,
          "Polymer": 0,
          "React": 1,
          "Underscore/Lo-Dash": 0,
          "jQuery": 3,
          "webpack": 0
        },
        "Go": 2,
        "Operation": {
          "Docker": 3,
          "Linux": 3,
          "Shell": 2,
          "Vagrant": 1
        },
        "JavaScript": {
          ".level": 3,
          "CoffeeScript": 1,
          "ES6": 3,
          "Meteor": 2,
          "TypeScript": 3
        },
        "Mobile": {
          "Android": 0,
          "Cordova": 1,
          "iOS": 0,
          "jQuery Mobile": 0
        },
        "Node.js": {
          ".level": 3,
          "Connect": 3,
          "Express": 3,
          "Socket.IO": 2
        },
        "Python": 1
      }
    }

### Generated Mind Map

![skill-set.png](docs/skill-set.png)
