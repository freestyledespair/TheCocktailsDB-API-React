import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Detail from '../Detail';
import Home from '../Home';
import Ingredients from '../Ingredients';
import Error404 from '../Error404';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/ingredients/:name" element={<Ingredients />} />
                {/* <Route path="*" element={<h1>Not found 404</h1>} /> */}
                <Route path="*" element={<Error404 />} />
                {/* Добавлен Error404 из-за нечитаемости роутеров Github'ом */}
            </Routes>
        </div>
    );
};

export default Main;