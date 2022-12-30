import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastListWrap,
  CastImage,
  CastListItem,
  CastName,
  CastCharacter,
} from './Cast.styled';

import { getCast, getPoster } from '../../services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCastById() {
      try {
        const cast = await getCast(movieId);
        if (cast.length > 0) {
          setCast(cast);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getCastById();
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <CastListWrap>
          {cast.map(({ id, profile_path, name, character }) => (
            <CastListItem key={id}>
              <CastImage src={getPoster(profile_path)} alt={name} />
              <CastName>Name: {name}</CastName>
              <CastCharacter>Character: {character}</CastCharacter>
            </CastListItem>
          ))}
        </CastListWrap>
      ) : (
        'Cast was not found'
      )}
    </>
  );
};

export default Cast;
