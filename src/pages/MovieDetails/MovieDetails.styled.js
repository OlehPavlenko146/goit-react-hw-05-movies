import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsWrap = styled.div`
  padding: 20px;
`;

export const GoBackLink = styled(NavLink)`
  display: block;
  padding: 8px 0;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;

  :hover {
    color: green;
  }
`;

export const MainMovieInfo = styled.div`
  display: flex;
  gap: 20px;
  width: 1000px;
`;

export const TitleMovie = styled.p`
  padding: 20px 0;
  font-weight: 500;
`;

export const Overview = styled.p`
  padding: 20px 0;
`;

export const CastAndReviewWrap = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 20px;
`;

export const CastLink = styled(NavLink)`
  display: block;
  padding: 8px 0;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;

  :hover {
    color: green;
  }
`;

export const ReviewsLink = styled(NavLink)`
  display: block;
  padding: 8px 0;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;

  :hover {
    color: green;
  }
`;
