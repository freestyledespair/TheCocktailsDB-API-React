import React from 'react';

const Ingredient = ({ name }) => {
    return (
        <div>
            <>
                {
                    name && <li>
                        <Link to={`/ingredients/` + name}>{name}</Link>
                    </li>
                }
            </>
        </div>
    );
};

export default Ingredient;