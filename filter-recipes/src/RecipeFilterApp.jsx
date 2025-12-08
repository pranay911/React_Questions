import React, { useState } from 'react'
import recipesData from "./recipeData.js"

const RecipeFilterApp = () => {

    // cart stores an array of recipe IDs user added
    const [cart, setCart] = useState([])

    // rating filter value (default: show recipes with rating 4+)
    const [rating, setRating] = useState(4)

    // Filter recipes based on selected minimum rating
    const filteredRecipes = recipesData.filter(
        (recipe) => recipe.rating >= rating
    )

    // Compute average rating of the filtered recipes
    // Divide by filteredRecipes.length or 1 to prevent dividing by 0
    const avgRating =
        filteredRecipes.reduce((sum, r) => sum + r.rating, 0) /
        (filteredRecipes.length || 1)

    // Total items added to cart
    const totalCartItems = cart.length

    // Add recipe to cart only if not already added
    const addToCart = (id) => {
        if (!cart.includes(id)) {
            setCart([...cart, id])
        }
    }

    return (
        <div>
            <h1>🍽️ Recipe Explorer</h1>

            {/* Top bar: rating filter dropdown and cart count */}
            <div className='top-bar'>
                <div>
                    <label htmlFor="ratingFilter">Filter by Rating: </label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                    >
                        <option value={4.0}>4.0+</option>
                        <option value={4.3}>4.3+</option>
                        <option value={4.5}>4.5+</option>
                        <option value={4.7}>4.7+</option>
                        <option value={4.9}>4.9+</option>
                    </select>
                </div>

                <div className="cart">
                    🛒 Cart Items: {totalCartItems}
                </div>
            </div>

            {/* Showing computed average rating */}
            <div className="average-rating">
                Average Rating: {avgRating.toFixed(2)} ({filteredRecipes.length} recipes)
            </div>

            {/* Show all filtered recipes */}
            <div className="recipes-grid">
                {filteredRecipes.map(recipe => (
                    <div key={recipe.id} className="recipe-card">
                        <img src={recipe.image} alt={recipe.name} />

                        <div className="recipe-card-content">
                            <h2>{recipe.name}</h2>
                            <h3>🍴 Cuisine: {recipe.cuisine}</h3>
                            <p>
                                ⭐ Rating: {recipe.rating} ({recipe.reviewCount} reviews)
                            </p>

                            {/* Add to cart button */}
                            <button onClick={() => addToCart(recipe.id)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeFilterApp
