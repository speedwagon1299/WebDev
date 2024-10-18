const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const books = getBook(3);

console.log(books)

const {title, pages, author, genres} = books;

console.log(title, author, pages);

const [primaryGenre, secondaryGenre] = genres

console.log(primaryGenre, secondaryGenre);


// RestSpread Operator

const [primGenre, secGenre, ...otherGenres] = genres;

console.log(primGenre, secGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"]

console.log(newGenres)

const updatedBook = {...books, 
    // Adding new property
    moviepublicationDate: "2001-12-19", 
    // Overwriting existing property
    pages: 1210
}

console.log(updatedBook)


// Template Literals

const summary = `${title}, a ${pages}-page book was written by ${author}`;

console.log(summary)


// Ternary Operator

const pgRange = pages > 1000 ? `Over a thousand pages` : `Under a thousand pages`;
console.log(pgRange)


// Arrow Functions

// function getYear(str) {
//     return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(books.publicationDate))


// Short Circuit && || ??

// falsey => 0, "", null, undefined, NaN, false
console.log("srihari" && "hello there")
console.log(0 && "hello there")
console.log("hello there" && 0)
console.log("" || "hi")
console.log("hi" || 0)

const spanishTranslation = books.translations.spanish || "No translation available";
console.log(spanishTranslation)


// Optional Chaining

// considers only null and undefined as falsey
const count = books.reviews.librarything?.reviewsCount ?? "No reviews available";
console.log(count)

const getTotalReviewCount = (books) => books.reviews.goodreads.reviewsCount + (books.reviews.librarything?.reviewsCount ?? 0);

console.log(getTotalReviewCount(books))


// Array Map

const sqr = [1,2,3,4,5].map((num) => num * num);

console.log(sqr)

const allBooks = getBooks()

const bookTitles = allBooks.map((book) => book.title);

console.log(bookTitles)

const essentialData = allBooks.map((book) => {
    return {
        title: book.title,
        author: book.author,
    };
});

console.log(essentialData)


// Array Filter

const longBooks = allBooks.filter((book) => book.pages > 750);

console.log(longBooks.map((book) => {
    return {
        title: book.title,
        pages: book.pages
    }
}))

const longMovieBook = allBooks
                .filter((book) => book.hasMovieAdaptation)
                .filter((book) => book.pages > 500);

console.log(longMovieBook.map((book) => {
    return {
        title: book.title,
        pages: book.pages
    }
}))

const adventureBooks = allBooks
                .filter((book) => book.genres.includes("adventure"))
                .map((book) => {
                    return {
                        title: book.title,
                        genres: book.genres
                    }
                });

console.log(adventureBooks)


// Array Reduce

const pageAllBooks = allBooks.reduce((acc,book) => acc + book.pages, 0);

console.log(pageAllBooks)


// Array sort

const x = [3, 7, 1, 9, 6];

const sorted = x.slice().sort((a,b) => a - b);      // b - a for descending order

console.log(sorted);

console.log(x);

const sortedByPages = allBooks.slice().sort((a,b) => b.pages - a.pages);

console.log(sortedByPages.map((book) => book.title));


// IMPORTANT: Immutable array Add, Delete, Update

const newBook = {
    id: 6,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
};
const bookAfterAdd = [...allBooks, newBook];
console.log(bookAfterAdd.length);

const bookAfterDel = bookAfterAdd.filter((book) => book.id !== 3);
console.log(bookAfterDel.length);

const bookAfterUpdate = bookAfterDel.map((book) => book.id == 1 ? {
    ...book, pages: 1210
} : book);
console.log(bookAfterUpdate[0].pages);


// Asynchronous

// fetch("https://jsonplaceholder.typicode.com/todos/1") // async
//         .then((res) => res.json())          // async
//         .then((data) => console.log(data));

console.log("Hello there")

async function getTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
}

getTodos();
const todos = getTodos();
console.log(todos)