import React from "react";
import SavedButton from "./SavedButton";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Recipe = ({ recipe }) => {
  const { label, image, calories, mealType } = recipe.recipe;

  return (
    <div className="d-flex justify-content-around">
<<<<<<< HEAD
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{label}</Card.Title>
          <Card.Text>
            Calories= {Math.round(calories / 5)} <br />
            Meal: {mealType}
          </Card.Text>
          <SavedButton />
        </Card.Body>
      </Card>
    </div>
=======
  <Card style={{ width: '18rem' }} className="card">
    <Link to={
      {pathname:'/recipe',
       recipe:recipe
      }
    }>
      <Card.Img  variant="top" src={image} />
    </Link>
    <Card.Body>
      <Card.Title>{label}</Card.Title>
      <Card.Text>
        Servings: {recipe.recipe.yield}<br/>
        Calories/serving= {Math.round(calories/recipe.recipe.yield)} <br />
        Meal: {mealType}
      </Card.Text>
      <SavedButton />
    </Card.Body>
  </Card>
  </div>

>>>>>>> main
  );
};

export default Recipe;
