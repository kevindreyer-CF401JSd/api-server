# lab-08-mongoDB-server
labs 7 through 10

## simple api

- [x] Express Server Connected to MongoDB
- [x] Morgan Logger
- [x] Error Handling
   - [x] 404 error handling
   - [x] 500 error handling
- [x] 2 mongo connected Data Models: authors and categories
- [x] Full set of CRUD routes
- [x] Modular route and handler functions
- [x] Common handler function
- [x] DRY routes
- [x] Test error handling
- [x] Tests with supergoose
   - [x] get
   - [x] post
   - [x] put
   - [x] delete

### Author: Kevin Dreyer

### Links and Resources

Used this help with error handling
- [//https://dev.to/nedsoft/central-error-handling-in-express-3aej](//https://dev.to/nedsoft/central-error-handling-in-express-3aej)

- [https://humanwhocodes.com/blog/2009/03/10/the-art-of-throwing-javascript-errors-part-2/](https://humanwhocodes.com/blog/2009/03/10/the-art-of-throwing-javascript-errors-part-2/)
- [https://gist.github.com/zcaceres/2854ef613751563a3b506fabce4501fd](https://gist.github.com/zcaceres/2854ef613751563a3b506fabce4501fd)
- [https://stackoverflow.com/questions/3426979/javascript-checking-if-an-object-has-no-properties-or-if-a-map-associative-arra](https://stackoverflow.com/questions/3426979/javascript-checking-if-an-object-has-no-properties-or-if-a-map-associative-arra)
- [https://vegibit.com/mongoose-validation-examples/](https://vegibit.com/mongoose-validation-examples/)


## Test routes

http get :3000/api/v1/authors

http post :3000/api/v1/authors name="test author name" handle="TAN"

http delete :3000/api/v1/authors/5e4dd109d147d22523bd5661

http put :3000/api/v1/authors/5e4dd028d147d22523bd5660 name="Test Author" handle="TA"
