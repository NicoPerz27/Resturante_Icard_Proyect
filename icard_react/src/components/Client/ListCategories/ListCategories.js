import React from "react";
import { Image } from "semantic-ui-react";
import { map } from "lodash";
import { useLocation, useNavigate } from "react-router-dom";
import "./ListCategories.scss";

export function ListCategories({ categories }) {
  const location = useLocation();
  const navigate = useNavigate();
  const goToCategory = (id) => {
    navigate(`${location.pathname}/${id}`);
  };
  return (
    <div className="list-categories">
      {map(categories, (category) => (
        <div
          key={category.id}
          className="list-categories__category"
          onClick={() => goToCategory(category.id)}
        >
          <Image src={category.image} size="small" />
          <span>{category.title}</span>
        </div>
      ))}
    </div>
  );
}
