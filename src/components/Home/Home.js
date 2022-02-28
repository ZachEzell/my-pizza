import React from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import { useState } from "react";

function Home() {
  const pizzas = [
    {
      id: "1",
      name: "Cheese Pizza",
      slug: "cheese-pizza",
      toppings: ["mozzerella cheese"],
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "2",
      name: "Meat Feast",
      slug: "meat-feast",
      toppings: ["mozzerella cheese"],
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "3",
      name: "Supreme",
      slug: "supreme",
      toppings: ["mozzerella cheese"],
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "4",
      name: "Pepperoni",
      slug: "pepperoni",
      toppings: ["mozzerella cheese"],
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "5",
      name: "Smoked Sausage Pizza",
      slug: "smoked-sausage-pizza",
      toppings: ["mozzerella cheese"],
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "6",
      name: "Egg & Sausage Pizza",
      slug: "egg-and-sausage-pizza",
      toppings: ["mozzerella cheese"],
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  const [keyword, setKeyword] = useState("");

  const filteredPizzas = pizzas.filter(
    (pizza) =>
      pizza.name.toLowerCase().includes(keyword) ||
      pizza.toppings.includes(keyword)
  );

  const onInputChange = (e) => {
    // Don't refresh
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <div>
      <div className={styles.searchWrapper}>
        <input
          placeholder="search for pizza or toppings.."
          className={styles.searchBar}
          onChange={onInputChange}
        />
      </div>
      <div className={styles.pizzaContainer}>
        {filteredPizzas < 1 ? (
          <div className={styles.nopeContainer}>
            There is no pizza or topping with {keyword}
          </div>
        ) : (
          filteredPizzas.map((pizza) => {
            return (
              <div className={styles.pizzaItem} key={pizza.id}>
                <Link href={`/${pizza.slug}`}>
                  <a className={styles.pizzaImageBox}>
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      className={styles.pizzaImage}
                    />
                  </a>
                </Link>
                <div className={styles.pizzaText}>
                  <p className={styles.pizzaHeader}>{pizza.name} </p>
                  <p className={styles.pizzaToppings}>
                    {pizza.toppings.map((topping) => topping).join(", ")}
                  </p>
                  <p className={styles.pizzaPrice}>${pizza.price}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
