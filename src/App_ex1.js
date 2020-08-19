import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodIlike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://geumchi.com/product/%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98/20/",
    rating: 2.5,
  },
  {
    id: 2,
    name: "Bibimbap",
    image:
      "https://ko.wikipedia.org/wiki/%EB%B9%84%EB%B9%94%EB%B0%A5#/media/%ED%8C%8C%EC%9D%BC:Dolsot-bibimbap.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Samgyeopsal",
    image:
      "http://kormedi.com/1312635/%EB%A9%B4%EC%97%AD-%EC%98%81%EC%96%91-%EA%B1%B1%EC%A0%95-%EB%82%A0%EB%A6%B4-%EC%82%BC%EA%B2%B9%EC%82%B4%EB%8D%B0%EC%9D%B4%EC%9D%98-%EA%B6%81%ED%95%A9-%EC%A7%80%EC%B1%85/",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://hub.zum.com/daily/41951",
    rating: 5.5,
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} rating={dish.rating} />;
}

function App() {
  return (
    <div>
      {foodIlike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
