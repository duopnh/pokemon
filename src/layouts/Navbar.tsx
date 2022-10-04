import React from 'react';

export const Navbar = () => (
    <nav className="w-full h-36 px-4 px-6 flex items-center">
        <div className="w-40 h-full flex items-center">
            <img src="/logo.png" alt="Logo pokemon" />
        </div>
        <ul className="ml-auto flex">
            <li className="mr-4 text-white bg-primary/25 p-2 rounded-md"><a href="/#">Pokedex</a></li>
            <li className="mr-4 text-disable p-2 rounded-md"><a href="/#">Pokedex 2</a></li>
            <li className="text-disable p-2 rounded-md"><a href="/#">Pokedex 3</a></li>
        </ul>
    </nav>
);