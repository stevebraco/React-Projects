import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { useGlobalContext } from "../context";


export default function Home() {
    return (
        <main className='container'>
            <SearchForm/>
            <CocktailList/>
        </main>
    )
}
