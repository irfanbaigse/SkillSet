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
        "Python": 1,
        "JavaScript": {
          ".level": 3,
          "CoffeeScript": 1,
          "ES6": 2,
          "TypeScript": 3
        },
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
        "Tools": {
          "PHPStorm": 3
        },
        "Operation": {
          "Docker": 3,
          "Linux": 3,
          "Shell": 2,
          "Vagrant": 1
        },
        "Search engines":{
          "Elasticsearch": 1
        },
        "Queue systems": {
          "RabbitMQ": 2
        },
        "PHP Frameworks": {
          ".level": 3,
          "Laravel": 3,
          "Symfony2": 3,
          "Yii2": 3,
          "Cakephp": 3,
          "CodeIgnitor": 3
        },
        "Go": 2,
        "C": 1
      }
    }

### Generated Mind Map

![skill-set.png](docs/skill-set.png)
