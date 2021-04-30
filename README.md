# Basic restAPI with Node.js

This project is a basic restAPI which is made for learn Node.js. This project includes Node.js & Express & MongoDB. 

## Project setup

``` bash
npm install
```

### To run server

``` bash
npm start
```
### Connect to Database

You can visit [MongoDB Atlas Website](https://www.mongodb.com/cloud/atlas2) to create your own database for MongoDB. 

You don't have change anything in app.js.
``` js
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to DB');
  }
);
```
You can create .env file and 
```
DB_CONNECTION = YOUR-URL
``` 
paste your url to YOUR-URL section.


### Endpoints

#### Get All Posts
``` bash
GET /posts
```
#### Add Post
``` bash
POST /posts
# Request sample
# {
#   "title":"This is my first post.",
#   "description":"This is my first description.",
# }
```
#### Get Spesific Post
``` bash
GET /posts/:postId
```

#### Delete Spesific Post
``` bash
DELETE /posts/:postId
```

#### Update Spesific Post
``` bash
PATCH /posts/:postId
```
## App Info

#### Author
[Ahmet Buğra Yiğiter](https://github.com/yigiterdev)

#### Version

1.0.0
