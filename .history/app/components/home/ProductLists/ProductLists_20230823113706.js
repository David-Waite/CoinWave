"use client";
// list of products
import styles from "./productLists.module.css";

import { useState } from "react";
import Menu from "../Menu/Menu";
import ProductCards from "../ProductCards/ProductCards";
import SearchBar from "../SearchBar/SearchBar";

export default function ProductLists() {
  // dummy data for each of the products
  const ITEMSDUMMY = [
    {
      id: 1,
      description:
        "Bucket of Golden Bon Bons is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Bucket of Golden Bon Bons",
      imageURL: "/Bucket of Golden Bon Bons.png",
      altText: "Bucket of Golden Bon Bons",
      author: "AB",
      price: 10,
    },
    {
      id: 2,
      description:
        "Deluxe Golden Ultra Chicken is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Deluxe Golden Ultra Chicken",
      imageURL: "/Deluxe Golden Ultra Chicken.png",
      altText: "Deluxe Golden Ultra Chicken",
      author: "AB",
      price: 20,
    },
    {
      id: 3,
      description:
        "Epic Golden Cow is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Epic Golden Cow",
      imageURL: "/Epic Golden Cow.png",
      altText: "Epic Golden Cow",
      author: "AB",
      price: 30,
    },
    {
      id: 4,
      description:
        "Exclusive Boba of Liquid Gold is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Exclusive Boba of Liquid Gold",
      imageURL: "/Exclusive Boba of Liquid Gold.png",
      altText: "Exclusive Boba of Liquid Gold",
      author: "AB",
      price: 40,
    },
    {
      id: 5,
      description:
        "Ghost spirit of Ghostliness is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Ghost spirit of Ghostliness",
      imageURL: "/Ghost spirit of Ghostliness.png",
      altText: "Ghost spirit of Ghostliness",
      author: "AB",
      price: 50,
    },
    {
      id: 6,
      description:
        "Golden Bag of Traveling is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Bag of Traveling",
      imageURL: "/Golden Bag of Traveling.png",
      altText: "Golden Bag of Traveling",
      author: "AB",
      price: 60,
    },
    {
      id: 7,
      description: "Golden Bricks is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Bricks",
      imageURL: "/Golden Bricks.png",
      altText: "Golden Bricks",
      author: "AB",
      price: 70,
    },
    {
      id: 8,
      description: "Golden Bug is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Bug",
      imageURL: "/Golden Bug.png",
      altText: "Golden Bug",
      author: "AB",
      price: 80,
    },
    {
      id: 9,
      description:
        "Golden Camera of Documentary is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Camera of Documentary",
      imageURL: "/Golden Camera of Documentary.png",
      altText: "Golden Camera of Documentary",
      author: "AB",
      price: 90,
    },
    {
      id: 10,
      description: "Golden Car is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Car",
      imageURL: "/Golden Car.png",
      altText: "Golden Car",
      author: "AB",
      price: 100,
    },
    {
      id: 11,
      description:
        "Golden Duck of the Pond is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Duck of the Pond",
      imageURL: "/Golden Duck of the Pond.png",
      altText: "Golden Duck of the Pond",
      author: "AB",
      price: 110,
    },
    {
      id: 12,
      description:
        "Golden Gadget of Games is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Gadget of Games",
      imageURL: "/Golden Gadget of Games.png",
      altText: "Golden Gadget of Games",
      author: "AB",
      price: 120,
    },
    {
      id: 13,
      description:
        "Golden Gas Mask is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Gas Mask",
      imageURL: "/Golden Gas Mask.png",
      altText: "Golden Gas Mask",
      author: "AB",
      price: 130,
    },
    {
      id: 14,
      description:
        "Golden Gem of Power is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Gem of Power",
      imageURL: "/Golden Gem of Power.png",
      altText: "Golden Gem of Power",
      author: "AB",
      price: 140,
    },
    {
      id: 15,
      description:
        "Golden Great Ball is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Great Ball",
      imageURL: "/Golden Great Ball.png",
      altText: "Golden Great Ball",
      author: "AB",
      price: 150,
    },
    {
      id: 16,
      description: "Golden Moth is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Moth",
      imageURL: "/Golden Moth.png",
      altText: "Golden Moth",
      author: "AB",
      price: 160,
    },
    {
      id: 17,
      description:
        "Golden Orb of Mystical Power is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Orb of Mystical Power",
      imageURL: "/Golden Orb of Mystical Power.png",
      altText: "Golden Orb of Mystical Power",
      author: "AB",
      price: 170,
    },
    {
      id: 18,
      description:
        "Golden Peglin of Power is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Peglin of Power",
      imageURL: "/Golden Peglin of Power.png",
      altText: "Golden Peglin of Power",
      author: "AB",
      price: 180,
    },
    {
      id: 19,
      description:
        "Golden Penguin is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Penguin",
      imageURL: "/Golden Penguin.png",
      altText: "Golden Penguin",
      author: "AB",
      price: 190,
    },
    {
      id: 20,
      description:
        "Golden Pinapple is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Pinapple",
      imageURL: "/Golden Pinapple.png",
      altText: "Golden Pinapple",
      author: "AB",
      price: 200,
    },
    {
      id: 21,
      description:
        "Golden Planet of Riches is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Planet of Riches",
      imageURL: "/Golden Planet of Riches.png",
      altText: "Golden Planet of Riches",
      author: "AB",
      price: 210,
    },
    {
      id: 22,
      description:
        "Golden Skull of Ancientness is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Skull of Ancientness",
      imageURL: "/Golden Skull of Ancientness.png",
      altText: "Golden Skull of Ancientness",
      author: "AB",
      price: 220,
    },
    {
      id: 23,
      description:
        "Golden Wool of Crocheting is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Golden Wool of Crocheting",
      imageURL: "/Golden Wool of Crocheting.png",
      altText: "Golden Wool of Crocheting",
      author: "AB",
      price: 230,
    },
    {
      id: 24,
      description:
        "Legendary Guitar is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Legendary Guitar",
      imageURL: "/Legendary Guitar.png",
      altText: "Legendary Guitar",
      author: "AB",
      price: 240,
    },
    {
      id: 25,
      description:
        "Legendary Moon Stick is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Legendary Moon Stick",
      imageURL: "/Legendary Moon Stick.png",
      altText: "Legendary Moon Stick",
      author: "AB",
      price: 250,
    },
    {
      id: 26,
      description:
        "Rare King Squid of the Deep is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Rare King Squid of the Deep",
      imageURL: "/Rare King Squid of the Deep.png",
      altText: "Rare King Squid of the Deep",
      author: "AB",
      price: 260,
    },
    {
      id: 27,
      description:
        "Ultra Rare Golden Potato is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Ultra Rare Golden Potato",
      imageURL: "/Ultra Rare Golden Potato.png",
      altText: "Ultra Rare Golden Potato",
      author: "AB",
      price: 270,
    },
    {
      id: 28,
      description:
        "Worlds First Light Bulb is a cool pfp apart of the golden collection",
      category: "pfp",
      productName: "Worlds First Light Bulb",
      imageURL: "/Worlds First Light Bulb.png",
      altText: "Worlds First Light Bulb",
      author: "AB",
      price: 280,
    },
    {
      id: 29,
      description: "Diamond Chalic of Challenges beautiful art",
      category: "art",
      productName: "Diamond Chalic of Challenges",
      imageURL: "/Diamond Chalic of Challenges.png",
      altText: "Diamond Chalic of Challenges",
      author: "aarrtist",
      price: 208,
    },
    {
      id: 30,
      description: "Scary Goblet Skull Thing beautiful art",
      category: "art",
      productName: "Scary Goblet Skull Thing",
      imageURL: "/Scary Goblet Skull Thing.png",
      altText: "Scary Goblet Skull Thing",
      author: "aarrtist",
      price: 197,
    },
    {
      id: 31,
      description: "Loot box pirate chest membership",
      category: "memberships",
      productName: "Golden Chest of Glowing Lootbox membership",
      imageURL: "/Golden Chest of Glowing.png",
      altText: "Golden Chest of Glowing",
      author: "arrrr b",
      price: 55,
    },
    {
      id: 32,
      description: "One Legendary Frost Egg a month in Frost Dragons NFT game",
      category: "memberships",
      productName: "Membership to Frost Dragons",
      imageURL: "/Legendary Frost Egg.png",
      altText: "Legendary Frost Egg",
      author: "not wynning g",
      price: 67,
    },
    {
      id: 33,
      description: "photo of a real Shiny Magikarp",
      category: "photography",
      productName: "Shiny Magikarp Photo",
      imageURL: "/Shiny Magikarp.png",
      altText: "Shiny Magikarp photo",
      author: "poke hunter irl",
      price: 26000,
    },
    {
      id: 34,
      description: "photo of a crazy detailed Legendary Ice Block",
      category: "photography",
      productName: "Legendary Ice Block Photo",
      imageURL: "/Legendary Ice Block.png",
      altText: "Legendary Ice Block photo",
      author: "but why photos",
      price: 93,
    },
  ];

  // logic for the menu can filter

  const [selected, setSelected] = useState("");
  const [selectedItems, setSelectedItems] = useState(ITEMSDUMMY);

  // when a category is selected sets the selected items to the value passed in
  function handleMenuSelect(select) {
    setSelected(select);
    setSelectedItems(selectItemsByCategory(select));
  }

  // function to handle search bar, filters items by title
  function handleSearch(searchQueryInput) {
    if (searchQueryInput != "") {
      console.log(searchQueryInput);
      setSelectedItems(selectItemsBySearch(searchQueryInput));
    } else {
      setSelectedItems(selectItemsByCategory(selected));
    }
  }

  // function to select items by category, returns all if the same item is pressed again
  function selectItemsByCategory(select) {
    return ITEMSDUMMY.filter((item) =>
      item.category === select ? item : select === "" && item
    );
  }

  // function to handle search bar, filters items by title
  function selectItemsBySearch(search) {
    let filteredItems = [];
    ITEMSDUMMY.forEach((item) => {
      if (item.productName.toLowerCase().includes(search.toLowerCase())) {
        filteredItems.push(item);
      }
    });

    return filteredItems;
  }

  // returns nothing to see if no items match the search
  const productCardsElement =
    selectedItems.length > 0 ? (
      <ProductCards items={selectedItems} />
    ) : (
      <div>nothing to see</div>
    );

  // jsx to be returned
  return (
    <main className={styles.container}>
      <div className={styles.menuContainer}>
        <Menu selected={selected} onClick={handleMenuSelect} />

        <SearchBar onChange={(e) => handleSearch(e.target.value)} />
      </div>

      {productCardsElement}
    </main>
  );
}
