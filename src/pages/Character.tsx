import React, { FC, useState, useEffect } from 'react'
import { useParams, Link } from '@reach/router'

import { PageProps } from '../lib/types'
import { CharacterCard } from '../components'

const Character:FC<PageProps> = () => {
  const { characterId } = useParams()
  const [ previousPage, setPreviousPage ] = useState( 0 )
  const [ nextPage, setNextPage ] = useState( 0 )

  // Very naive way to keep track of next/previous pages
  useEffect( () => {
    const intCharId = +characterId

    // There cannot be negative characters we don't go below 1
    if ( intCharId - 1 <= 0 ) setPreviousPage( 1 )
    else setPreviousPage( intCharId - 1 )

    // There are 671 Characters we don't go above that
    if ( intCharId + 1 >= 671 ) setNextPage( 671 )
    else setNextPage( intCharId + 1 )
  }, [ characterId ] )

  return (
    <div>
      <Link to="/">Home</Link>
      <CharacterCard id={characterId} />
      <Link to={`/character/${previousPage}`}>Previous</Link>
      <Link to={`/character/${nextPage}`}>Next</Link>
    </div>
  )
}

export default Character
