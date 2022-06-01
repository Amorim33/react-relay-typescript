/* eslint-disable brace-style */
/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable array-bracket-spacing */
/* eslint-disable computed-property-spacing */
/* eslint-disable comma-dangle */
import { FC, useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';

import type { ListQuery } from './__generated__/ListQuery.graphql';

const query = graphql`
  query ListQuery($currentPage: Int) {
    characters(page: $currentPage) {
      results {
        name
        image
        status
      }
    }
  }
`;

interface ICharacter {
  readonly name: string | null;
  readonly image: string | null;
  readonly status: string | null;
}

const List: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [distanceToPageEnd, setDistanceToPageEnd] = useState(201);
  const [newPage, setNewPage] = useState<boolean>(false);
  const [currentList, setCurrentList] = useState<any>([]);

  const { props, error } = useQuery<ListQuery>(query, {
    currentPage,
  });

  // if distance is minor than 200px, it is time two fetch new characters, each page has 20 chars
  if (distanceToPageEnd <= 200 && !newPage) {
    setCurrentPage(currentPage + 1);
    setNewPage(true);
    setDistanceToPageEnd(201);
  }

  const handleScroll = () => {
    // Taking the scroll position and the max height of the page
    const position = window.pageYOffset;
    const maxPageOffset =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // The distance to the end of page is
    // The diference between the maximum height and the actual position

    setDistanceToPageEnd(maxPageOffset - position);
  };
  useEffect(() => {
    // Adding Scroll event listener in the DOM
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderList = (list: Readonly<Array<ICharacter | null>>) => {
    // aux array to store the List tsx
    const aux = [];
    for (let i = 0; i < list.length; i += 1) {
      if (list[i] === null) break;
      aux.push(
        <div>
          <h1 className='text-4xl font-bold'>{list[i]!.name}</h1>
          <img
            className='mx-auto'
            alt={list[i]!.name || undefined}
            src={list[i]!.image || undefined}
          />
          <h2>{list[i]!.status}</h2>
        </div>
      );
    }
    return aux;
  };
  // Checking if List is already fetched
  if (props) {
    const fetchedList = props?.characters ? props.characters.results : null;
    // eslint-disable-next-line no-console
    console.log(currentList);
    // Checking if currentList is empty, in order to avoid excessive rerendering
    if (currentList.length === 0) {
      setCurrentList(fetchedList);
    }
    // Checking if new pages are fetched, in order to concatenate them with the existing ones
    else if (newPage) {
      const aux: any = fetchedList;
      // Using spread operator to say that is to concatenate the elements of the array
      setCurrentList([...currentList, ...aux]);
      setNewPage(false);
    }

    return <div>{renderList(currentList)}</div>;
  }

  if (error) return <div>{error.message}</div>;
  return <div>loading...</div>;
};

export default List;
