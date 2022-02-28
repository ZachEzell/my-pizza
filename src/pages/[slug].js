import React from "react";
import styles from "../styles/Pizza.module.css";
import Head from "next/head";
import Link from "next/link";

export default function slug({ pizza, otherPizzas }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pizza.name}</title>
      </Head>
      <div className={styles.pizzaWrapperLeft}>
        <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
      </div>
      <div className={styles.pizzaWrapperRight}>
        <div className={styles.pizzaInfo}>
          <p className={styles.pizzaTitle}>{pizza.name}</p>
          <p className={styles.pizzaDescription}>{pizza.description}</p>
          <p className={styles.pizzaPrice}>${pizza.price}</p>
          <p className={styles.pizzaToppings}>
            {pizza.toppings.map((topping) => topping).join(", ")}
          </p>
        </div>
        <div className={styles.otherPizzasWrapper}>
          {otherPizzas.map((otherpizza) => {
            return (
              <div className={styles.otherPizzas} key={otherpizza.id}>
                <Link href={"/" + otherpizza.slug}>
                  <a>
                    <img src={otherpizza.image} alt={otherpizza.name} />
                    <p>{otherpizza.name}</p>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
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
  const paths = pizzas.map((pizza) => ({
    params: { slug: `${pizza.slug}` },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
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
  const pizza = pizzas.filter((pizza) => pizza.slug.includes(params.slug));
  const otherPizzas = pizzas.filter((pizza) => pizza.slug !== params.slug);

  return {
    props: {
      pizza: pizza[0],
      otherPizzas: otherPizzas
        .sort(() => Math.random() - Math.random())
        .slice(0, 3),
    },
  };
};
