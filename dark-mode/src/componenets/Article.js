import React from 'react'
import moment from 'moment'
export const Article = ({title, snippet, date, length}) => {
    return (
        <article className='post'>
            <h2> {title} </h2>
            <div className="post__info">
                <span>  {moment(date).format('ddd Do, YYYY')} </span>
                <span> {length} min read </span>
            </div>
            <p> {snippet} </p>
        </article>
    )
}
