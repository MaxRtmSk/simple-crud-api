# Simple CRUD API

## Install:
---
1. git clone https://github.com/ratomsky/simple-crud-api.git
2. git checkout -b develop
3. npm install


# How Start Server:
---
1. Create **.env** file
2. Write **PORT** there, how in env.example

# API 

## `GET` /person
#### request: 
`null`

#### response:

success: 

>**Code** : `200`

>**Content examples**: [ ]

## `GET` /person/:id
#### request: 
`null`

### response:
- Success **Code** : `200`

### `POST` /person
#### request:
 ```json
    {
        "name": "String",
        "age": 20,
        "hobbies": ["programming"]
    }
```
#### response:
- Success **Code** : `200 OK`
  ```json
      {
          "name": "String",
          "age": 20,
          "hobbies": ["programming"]
      }
  ```

### `PUT` /person:id
#### request: 
`null`

request:
 ```json
    {
        "name": "String",
        "age": 20,
        "hobbies": ["programming"]
    }
```

### `DELETE` /prson/:id
#### request: 
`null`

Success Response
**Code** : `200 OK`
#### response:

One or two sentence description of what endpoint does.
 

`POST` /endpoint


Supported attributes:


