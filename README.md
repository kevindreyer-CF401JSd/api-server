# API Server

Full CRUD express server api connecting to MongoDB with mongoose.

## api

### Author: Kevin Dreyer

- .env vars
  - `MONGODB_URI=<path to mongodb>`
  - `PORT` if local

### Links and Resources

[https://kdreyer-api-server.herokuapp.com/](https://kdreyer-api-server.herokuapp.com/)
  - [api server authors](https://kdreyer-api-server.herokuapp.com/api/v1/authors)
  - [api server categories](https://kdreyer-api-server.herokuapp.com/api/v1/categories)

Used this help with error handling
- [//https://dev.to/nedsoft/central-error-handling-in-express-3aej](//https://dev.to/nedsoft/central-error-handling-in-express-3aej)

Other Resources
- [https://humanwhocodes.com/blog/2009/03/10/the-art-of-throwing-javascript-errors-part-2/](https://humanwhocodes.com/blog/2009/03/10/the-art-of-throwing-javascript-errors-part-2/)
- [https://gist.github.com/zcaceres/2854ef613751563a3b506fabce4501fd](https://gist.github.com/zcaceres/2854ef613751563a3b506fabce4501fd)
- [https://stackoverflow.com/questions/3426979/javascript-checking-if-an-object-has-no-properties-or-if-a-map-associative-arra](https://stackoverflow.com/questions/3426979/javascript-checking-if-an-object-has-no-properties-or-if-a-map-associative-arra)
- [https://vegibit.com/mongoose-validation-examples/](https://vegibit.com/mongoose-validation-examples/)


### Test routes
Routes: 
```
authors
    name: { type: String, required: true },
    handle: { type: String }
```

```
categories
    subject: { type: String },
    keywords: { type: [String] },
    description: { type: String }
```

`http get :3000/api/v1/authors`

`http post :3000/api/v1/authors name="test author name" handle="TAN"`

`http delete :3000/api/v1/authors/5e4dd109d147d22523bd5661`

`http put :3000/api/v1/authors/5e4dd028d147d22523bd5660 name="Test Author" handle="TA"`

`http post https://kdreyer-api-server.herokuapp.com/api/v1/categories subject="test4" keywords:='["one", "two"]' subject="test stuff"`

