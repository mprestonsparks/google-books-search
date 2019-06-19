# Google Books Search
 [View Demo](https://r3act-book-s3arch.herokuapp.com/)
 <br><br>
 
 
### Overview

This is a React-based Google Books Search app.




## Technologies Used
```
* React via Create-React-App
* MongoDB
* Mongoose
* Express
* Google Books API
```

### Instructions

* This application has 2 pages:
```
  * Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

  * Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.
 ```

 At a minimum, books should have each of the following fields:
 ```
* `title` - Title of the book from the Google Books API

* `authors` - The books's author(s) as returned from the Google Books API

* `description` - The book's description as returned from the Google Books API

* `image` - The Book's thumbnail image as returned from the Google Books API

* `link` - The Book's information link as returned from the Google Books API
```

