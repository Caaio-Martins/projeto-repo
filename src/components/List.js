import React from 'react'
import Item from './Item'

const List = () => {
  return (
    <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1985} />
            <Item marca="Fiat" ano_lancamento={1964}/>
            <Item marca="Renault" />
            <Item marca="Chevrolet" ano_lancamento={1972}/>
        </ul>
    </>
  )
}

export default List