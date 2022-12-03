![Made in Australia](https://img.shields.io/badge/Made_In-Australia-00843D?labelColor=FFCD00&style=for-the-badge)

# Konnect 📱

All your favorite social media, combined.

- ✅ [Twitter-like feed](#twitter-like-feed)
- ✅ [Snapchat-like DMs](#snapchat-like-dms)
- ✅ [Real-time](#real-time)
- ✅ [Customizable theme](#customizable-theme)
- ✅ [And more!](#and-more)


## Acknowledgements 📜

 - [Twitter](https://twitter.com/)
 - [Snapchat](https://snapchat.com/)
 - [ExpressJS](https://expressjs.com/)
 - [MongoDB](https://www.mongodb.com/)
 - [Iconify](https://iconify.design/)


## Authors 👥

- [@what-question-mark](https://www.github.com/what-question-mark)


## Feedback 📝

If you have any feedback, please create a post in the [discussions tab](https://github.com/What-Question-Mark/Konnect/discussions/new?category=feedback).


## Contributing 🤝

Contributions are always welcome!

See `contributing.md` for ways to get started. Please adhere to this project's `code of conduct`.


## License 📝

If you want to use this a part of this code, please contact [@what-question-mark](https://www.github.com/what-question-mark) to negotiate a private license.


## Features 🧮

### Twitter-like feed 🐦

We have a Twitter-like feed, where you can create posts and interact with the community.

### Snapchat-like DMs 👻

We have a Snapchat-like DM system, where you can send messages to your friends in real time.

### Real-time 📡

We have real-time updates, so you can see your friends' posts and messages as soon as they are posted.

### Customizable theme 🎨

We have a customizable theme page, so you can change the colors of the app to your liking.

### And more! 🎉

We have many more features which would take to long to list here. Check out the app to see them all!

<sub>Not all features are implemented yet. We guarantee that all features will be implemented by the time the app is released.</sub>


## API Reference 📚

Our api is currently private, so we can improve the code without worrying about breaking third-party apps. However, we will be releasing it once the app is released, so you can make your own third-party apps with it.

### Get user 👤

Gets a users information.

#### Example 

```js
const getuser = require('https://konnect-api.herokuapp.com/api/getuser')

getUser(apikey, username).then((result) => {
    console.log(result);
});

/* Returns:
{
    type: 'user',
    displayname: 'Display Name',
    username: 'Username',
    bio: 'Bio' ,       
    verified: false,
    credentials: {
        email: 'Users email',
        password: 'Users hashed password'
    }
}
*/
```

### Get users 👥

Gets a list of users.

#### Example

```js
const getuser = require('https://konnect-api.herokuapp.com/api/getuser')

getUser(apikey).then((result) => {
    console.log(result);
});

/* Returns:
[ 'A', 'list', 'of', 'users' ]
*/
```

### Get posts 💬

Gets a list of posts.

#### Example

```js
const getposts = require('https://konnect-api.herokuapp.com/api/getposts')

getPosts(apikey).then((result) => {
    console.log(result);
});
```

### Get news 📰

Gets a list of news.

#### Example

```js
const getposts = require('https://konnect-api.herokuapp.com/api/getposts')

getNews(apikey).then((result) => {
    console.log(result);
});
```

### Insert user 👤➕

Inserts a user into the database.

#### Example

```js
const updateuser = require('https://konnect-api.herokuapp.com/api/updateusers')

insertUser(apiKey, username, email, password).then((result) => {
    console.log(result);
});

/* Returns:
Post inserted
*/
```

### Update user 👤✏

Updates a user in the database.

#### Example

```js
const updateuser = require('https://konnect-api.herokuapp.com/api/updateusers')

updateUser(apiKey, username).then((result) => {
    console.log(result);
});

/* Returns:
Post updated
*/
```

### Delete user 👤❌

Deletes a user from the database.

#### Example

```js
const updateuser = require('https://konnect-api.herokuapp.com/api/updateusers')

deleteUser(apiKey, username).then((result) => {
    console.log(result);
});

/* Returns:
User deleted
*/
```

### Insert post 💬➕

Inserts a post into the database.

#### Example

```js
const updateposts = require('https://konnect-api.herokuapp.com/api/updateposts')

insertPost(apiKey, username, content).then((result) => {
    console.log(result);
});

/* Returns:
Post inserted
*/
```

### Insert News 📰➕

Inserts a news post into the database.

#### Example

```js
const updateposts = require('https://konnect-api.herokuapp.com/api/updateposts')

insertNews(apiKey, content).then((result) => {
    console.log(result);
});

/* Returns:
Post inserted
*/
```

---

## Thats all for now! 🎉