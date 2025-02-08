import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

// get root div element
const root = ReactDOM.createRoot(document.getElementById("root"));

function Header() {
    // const style = {color: "red", fontSize: "32px", textTransform: "uppercase"};
    const style = {};
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzaNum = pizzaData.length;
    // const pizzaNum = 0;
    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {pizzaNum > 0 ? (
                <>
                    <p>Super authentic Italian Pizzas</p>
                    <ul className="pizzas">
                        {pizzaData.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                        {/* {pizzaData.map((pizza) => (
                        <Pizza
                            name={pizza.name}
                            ingredienst={pizza.ingredients}
                            photoName={pizza.photoName}
                            price={pizza.price}
                        />
                    ))} */}
                    </ul>
                </>
            ) : (
                <p>No pizzas available</p>
            )}
            {/* <Pizza
                name="Pizza Prosciutto"
                ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
                photoName="pizzas/prosciutto.jpg"
                price={10}
            /> */}
        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    // if(hour < openHour || hour >= closeHour) {
    //     alert("Sorry, We're Closed.")
    // }
    // else {
    //     alert("We're Open!")
    // }
    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} />
            ) : (
                <p>Sorry, We're closed. We open at {openHour}:00</p>
            )}
        </footer>
    );
}

function Order({ closeHour }) {
    return (
        <div className="order">
            <p>We're open till {closeHour}:00. Come visit us or order online</p>
            <button className="btn">Order</button>
        </div>
    );
}

function Pizza({ pizzaObj }) {
    // if (pizzaObj.soldOut) {
    //     return null;
    // }
    // const classDet = "pizza" + (pizzaObj.soldOut ? " sold-out" : "");
    return (
        // <li className={classDet}>
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>
                    {pizzaObj.soldOut ? "Sold Out" : "$" + pizzaObj.price}
                </span>
            </div>
        </li>
    );
}

// function Pizza(props) {
//     return (
//         <div className="pizza">
//             <img src={props.photoName} alt={props.name} />
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.ingredient}</p>
//                 <span>{props.price}</span>
//             </div>
//         </div>
//     );
// }

// Strict Mode to render code twice to catch possible bugs
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
