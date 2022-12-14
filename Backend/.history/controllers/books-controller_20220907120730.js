const Book = require("../model/Book");

const getAllBooks = async(req,res,next) =>{
    let books;
try{
    books = await Book.find();
} catch (err) {
    console.log(err);
}
if(!books) {
    return res.status(404).json({ message: "No products found" });
}
return res.status(200).json({ books });
};

const addBooks = async (req, res, next) =>{
    let book;
    try{
        book = new book({
            name: req.body.name
        })
    }
}




exports.getAllBooks = getAllBooks;