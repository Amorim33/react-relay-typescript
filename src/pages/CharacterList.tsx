import { FC } from 'react';
import { Link } from '@reach/router';

import { homepage } from '../../package.json';
import { PageProps } from '../lib/types';
import { CharacterList } from '../components';

const CharacterListPage: FC<PageProps> = () => (
  <div className='flex flex-col'>
    <div className='mx-auto text-center'>
      <Link
        to={`/${homepage}`}
        className='text-blue-600 text-xl hover:text-red-600'
      >
        Home
      </Link>
      <div className='flex justify-between text-blue-600 text-2xl'>
        <CharacterList />
      </div>
    </div>
  </div>
);

export default CharacterListPage;
