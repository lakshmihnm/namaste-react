import React from "react";
import ReactDOM from "react-dom/client";

const resData =[
  {
    "image": "https://www.tasteofhome.com/wp-content/uploads/2024/03/Margherita-Pizza-_EXPS_TOHVP24_275515_MF_02_28_1.jpg?fit=300,300&webp=1",
    "name": "La Bella Italia",
    "cuisine": ["Italian", "Vegetarian"],
    "rating": 4.5,
    "price": 299
  },
  {
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani.webp",
    "name": "Hydrabadi House",
    "cuisine": ["Indian", "Mughlai"],
    "rating": 4.7,
    "price": 249
  },
  {
    "image": "https://sushistaycation.com/wp-content/uploads/2024/03/salmon_nigiri_sake_final_1.jpg",
    "name": "Tokyo Sushi Bar",
    "cuisine": ["Japanese", "Seafood"],
    "rating": 4.3,
    "price": 399
  },
  {
    "image": "https://www.onceuponachef.com/images/2023/08/Beef-Tacos-760x570.jpg",
    "name": "El Taco Loco",
    "cuisine": ["Mexican", "Street Food"],
    "rating": 4.6,
    "price": 199
  },
  {
    "image": "https://www.recipetineats.com/tachyon/2018/05/Chicken-Pad-Thai_9.jpg?resize=900%2C1260&zoom=0.72",
    "name": "Bankok Bites",
    "cuisine": ["Thai", "Noodles"],
    "rating": 4.4,
    "price": 279
  }
]

const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" 
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-1536x1536.png" 
          alt="Edureka Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  )
}

const RestaurantCard = (props) => {

  const {image, name,cuisine, rating, price} = props.resData;
  return (
    <div className="res-card">
      <img className="res-logo" 
        src={image} 
        alt="Restaurant Logo" />
      <h3>{name}</h3>
      
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating}</h4>
    </div>
  )
}



const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.name}
              resData={restaurant}
            />
          )
        })
        }
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}
// created a root for react application
const root = ReactDOM.createRoot(document.getElementById("root"));
// this will replace the code in the root
// library - it can make small portion of the app
root.render(<AppLayout />);
