import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import SelectComponent from './Components/SelectComponent';
import * as utils from './utils/utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders selectComp without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectComponent source={{name: 'nname'}}/>, div);
});

it('joins posts with user', () => {
  const posts = [
    {
      "userId": 10,
      "id": 1,
      "title": "test title",
      "body": "test body"
    },
    {
      "userId": 20,
      "id": 2,
      "title": "test title 2",
      "body": "test body 2"
    }
  ];
  const users = [
    {
      "id": 10,
      "name": "ivan",
      "address": {
        "city": "Gwenborough"
      },
      "company": {
        "name": "Romaguera-Crona"
      }
    },
    {
      "id": 20,
      "name": "petro",
      "address": {
        "city": "Lviv"
      },
      "company": {
        "name": "no name"
      }
    }
  ];
  const expectedPosts =  [
    {
      "address": {
        "city": "Gwenborough"
      },
      "company": {
        "name": "Romaguera-Crona"
      },
      "name" : "ivan",
      "userId": 10,
      "id": 1,
      "title": "test title",
      "body": "test body"
    },
    {
      "address": {
        "city": "Lviv"
      },
      "company": {
        "name": "no name"
      },
      "name": "petro",
      "userId": 20,
      "id": 2,
      "title": "test title 2",
      "body": "test body 2"
    }
  ];
  expect(utils.joinPostWithUsers(posts, users)).toEqual(expectedPosts);
});

it('gets unique list of cities from users', () => {
  const users = [
    {
      "id": 10,
      "name": "ivan",
      "address": {
        "city": "Gwenborough"
      },
    },
    {
      "id": 20,
      "name": "ivan",
      "address": {
        "city": "London"
      },
    },
    {
      "id": 30,
      "name": "petro",
      "address": {
        "city": "Lviv"
      }
    },
    {
      "id": 20,
      "name": "petro",
      "address": {
        "city": "Lviv"
      }
    },
    {
      "id": 20,
      "name": "petro",
      "address": {
        "city": "Lviv"
      }
    }
  ];
  const expetcedCities = {
    "London": "London",
    "Lviv" : "Lviv",
    "Gwenborough": "Gwenborough"
  };
  expect(utils.getUniqueListOfCitiesCities(users)).toEqual(expetcedCities);
});

it('gets unique list of companies from users', () => {
  const users = [
    {
      "id": 10,
      "name": "ivan",
      "company": {
        "name": "Romaguera-Crona"
      }
    },
    {
      "id": 20,
      "name": "ivan2",
      "company": {
        "name": "Romaguera-Crona"
      }
    },
    {
      "id": 30,
      "name": "petro2",
      "company": {
        "name": "Romaguera-Crona"
      }
    },
    {
      "id": 40,
      "name": "petro",
      "company": {
        "name": "Romaguera-Crona"
      }
    },
    {
      "id": 50,
      "name": "Darth Vader",
      "company": {
        "name": "no name"
      }
    }
  ];
  const expetcedCompanies = {
    "Romaguera-Crona": "Romaguera-Crona",
    "no name": "no name"
  };
  expect(utils.getUniqueListOfCompanies(users)).toEqual(expetcedCompanies);
});
it('gets filtered sorted posts', () => {
  const posts = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt...",
      "body": "quia...",
      "name": "Leanne Graham",
      "address": {
        "city": "Canberra"
      },
      "company": {
        "name": "google"
      }
    },
    {
      "userId": 2,
      "id": 11,
      "title": "et e...",
      "body": "dele...",
      "name": "Ervin Howell",
      "address": {
        "city": "Canberra"
      },
      "company": {
        "name": "microsoft"
      }
    },
    {
      "userId": 3,
      "id": 21,
      "title": "aspe...",
      "body": "repe...",
      "name": "Clementine Bauch",
      "address": {
        "city": "London"
      },
      "company": {
        "name": "google"
      }
    },
    {
      "userId": 4,
      "id": 31,
      "title": "ulla...",
      "body": "debi...",
      "name": "Patricia Lebsack",
      "address": {
        "city": "Ankara"
      },
      "company": {
        "name": "addidas"
      }
    },
    {
      "userId": 5,
      "id": 41,
      "title": "non ...",
      "body": "mole...",
      "name": "Chelsey Dietrich",
      "address": {
        "city": "Kyiv"
      },
      "company": {
        "name": "addidas"
      }
    },
    {
      "userId": 6,
      "id": 51,
      "title": "solu...",
      "body": "sunt...",
      "name": "Mrs. Dennis Schulist",
      "address": {
        "city": "Ankara"
      },
      "company": {
        "name": "addidas"
      }
    },
    {
      "userId": 7,
      "id": 61,
      "title": "volu...",
      "body": "ab n...",
      "name": "Kurtis Weissnat",
      "address": {
        "city": "Canberra"
      },
      "company": {
        "name": "addidas"
      }
    },
    {
      "userId": 8,
      "id": 71,
      "title": "et i...",
      "body": "occa...",
      "name": "Nicholas Runolfsdottir V",
      "address": {
        "city": "Kyiv"
      },
      "company": {
        "name": "microsoft"
      }
    },
    {
      "userId": 9,
      "id": 81,
      "title": "temp...",
      "body": "face...",
      "name": "Glenna Reichert",
      "address": {
        "city": "Kyiv"
      },
      "company": {
        "name": "addidas"
      }
    },
    {
      "userId": 10,
      "id": 91,
      "title": "aut ...",
      "body": "libe...",
      "name": "Alex",
      "address": {
        "city": "London"
      },
      "company": {
        "name": "microsoft"
      }
    }
  ];
  const expectedPosts = [
    {
      "address":{
        "city": "London",
      },
      "body": "libe...",
      "company": {
        "name": "microsoft",
      },
      "id": 91,
      "name": "Alex",
      "title": "aut ...",
      "userId": 10,
    },
    {
      "address": {
        "city": "London",
      },
      "body": "repe...",
      "company": {
        "name": "google",
      },
      "id": 21,
      "name": "Clementine Bauch",
      "title": "aspe...",
      "userId": 3,
    }
  ];
  expect(utils.getFilteredSortedPosts({source: posts, filterByCity: 'London', filterByCompany: '', sortedBy: "name"}))
      .toEqual(expectedPosts);
});