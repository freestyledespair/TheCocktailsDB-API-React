import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../Detail';
import { SEARCH_BY_INGR } from '../../api/index';
import axios from 'axios';

const Ingredients = () => {
    const { name } = useParams()
    const [ingredient, setIngredient] = useState({})

    // const getIngredientInfo = async () => {
    //     const req = await fetch(SEARCH_BY_INGR + name)
    //     const res = await req.json()
    //     setIngredient(res.ingredients[0])
    // }

    const getIngredientInfo = async () => {
        // axios.get(SEARCH_BY_INGR + name)
        //     .then(response => setIngredient(response?.data.ingredients[0]))
        //     .catch(error => console.error(error))
        const res = await axios.get(SEARCH_BY_INGR + name)
        setIngredient(res?.data.ingredients[0])
    }

    console.log(ingredient)
    useEffect(() => {
        getIngredientInfo()
    }, [name])

    return (
        <div>
            <h1>Name of ingredient: {ingredient.strIngredient}</h1>
            <img src={`https://www.thecocktaildb.com/images/ingredients/${name}-Medium.png`} alt={name} />
            <h2>Alcohol: {ingredient.strAlcohol}</h2>
            <h3>Описание: {ingredient.strDescription ? ingredient.strDescription : "None description"}</h3>
        </div>
    );
};


export default Ingredients;