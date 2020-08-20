import React, { FC } from 'react'
import graphql from 'babel-plugin-relay/macro'
import { useQuery } from 'relay-hooks'

import type { CardCharacterQuery } from './__generated__/CardCharacterQuery.graphql'

const query = graphql`
query CardCharacterQuery($characterId: ID) {
  character(id:$characterId) {
    name
  }
}
`
interface CardProps {
  /**
   * ID of character to show card.
   */
  id: string
}

const Card:FC<CardProps> = ( { id }:CardProps ) => {
  const { props, error } = useQuery<CardCharacterQuery>( query, { characterId: id } )

  if ( props ) {
    // For some reason the error is not getting back (showing me null) so this is a hack
    const name = props?.character ? props?.character?.name : 'Not Found: (Some sort of server error maybe)'
    return <div>{name}</div>
  } if ( error ) return <div>{error.message}</div>
  return <div>loading...</div>
}

export default Card
