# lab-08-mongoDB-server


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

## Test routes

http get :3002/authors

http post :3002/authors name="test author name" handle="TAN"

http delete :3002/authors/5e4dd109d147d22523bd5661

http put :3002/authors/5e4dd028d147d22523bd5660 name="Test Author" handle="TA"
