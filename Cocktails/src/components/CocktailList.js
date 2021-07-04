import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'
import Cocktail from './Cocktail';


const CocktailList = () => {
    const [page, setPage] = useState(0)
    // State situé dans notre fichier context / fonction useGlobalContext
    const {cocktails, setCocktails, loading} = useGlobalContext();

   console.log(cocktails);


    if(loading) {
        return <Loading/>
    }
    if(cocktails.length < 1) {
        return (

            <h2 className='section-title'>No cocktails matched your search criteria</h2>
        )
    }

    const nextPage = () => {
        setPage((oldPage) => {
          let nextPage = oldPage + 1
          if (nextPage > cocktails.length - 1) {
            nextPage = 0
          }
          return nextPage
        })
      }
      const prevPage = () => {
        setPage((oldPage) => {
          let prevPage = oldPage - 1
          if (prevPage < 0) {
            prevPage = cocktails.length - 1
          }
          return prevPage
        })
      }
    
      const handlePage = (index) => {
        setPage(index)
      }

    return (
        <section className='section cocktail-list'>
            <h2 className="section__title">cocktails</h2>
            <div className="cocktail">
                {
                    cocktails[page].map((item) => {
                        return <Cocktail key={item.id} {...item} />
                    })
                }
            </div>
            {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {cocktails.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}

        </section>
    )
}

export default CocktailList
