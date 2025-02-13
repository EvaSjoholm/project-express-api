import express from "express";
import cors from "cors";
import booksData from "./data/books.json"

const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here to grt access. 
app.get("/", (req, res) => {
  const navigation = {
    guide: "Routes for books API",
    Endpoints: [
      {
        "/books": "Display all books",
        "/books/reversed": "Reversed order of all books",
        "/books/:id": "Search by id numbers (1-1461).",
        "/books/title/:title": "Search for a title that includes a word in title you want to see",
      },
    ],
  };
res.send(navigation);
});

//Get all data for books
app.get("/books", (req, res) => {
  let books = booksData 

  if (books) {

  res.status(200).json({
    success: true, 
    message: "OK",
    body: {
      content: "All books!",
      books: booksData
    }
  });
} else {
  res.status(404).json({
    success: false, 
    message: "Something went wrong",
    body: {}
  });
}
});

//Reverse order of books
  app.get("/books/reversed", (req, res) => {
    const booksDataReversed = booksData.reverse()
    res.status(200).json({booksDataReversed})
  })


// if the user searches for title 

app.get("/books/title/:title", (req, res) => {
  const title = req.params.title;

   let byTitle = booksData;

  if (title) {
    byTitle = byTitle
 .filter((data) => data.title.toLowerCase().includes(title.toLowerCase()));
   };
  if (byTitle.length === 0) {
    res.status(200).json({
      message: "There's no books here by that name",
       success: true,
       body: {}
     });
   } else {
    res.status(200).json({
      data: byTitle,
       success: true,
      body: {
        booksData
       }
     });
  };
   });

//Returning single book based on ID number if it exists otherwise 404-not found.

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
 const booksID = booksData.find((item) => {
   return item.bookID === Number(id)}
 );
 
  if (booksID) {
    res.status(200).json({
       success: true,
       message: "ok",
       body: {
        content: `Book with ID ${id}`,
         book: booksID
       }
     });
   } else {
     res.status(404).json({
       success: false,
       message: "Sorry, book not found",
        body: {}
     });
  } 
 })

// Start the server/application. It needs to listen to a port.
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
