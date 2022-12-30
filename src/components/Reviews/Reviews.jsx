import { getMovieReview } from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { ReviewsWrap, ReviewsListItem, ReviewsAuthor } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setIsLoading(true);
        const reviews = await getMovieReview(movieId);
        if (reviews.length > 0) {
          setReviews(reviews);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {reviews.length === 0 ? (
        "Unfortunately we didn't find anything..."
      ) : (
        <ReviewsWrap>
          {reviews.map(({ author, content, id }) => (
            <ReviewsListItem key={id}>
              <ReviewsAuthor>Author: {author}</ReviewsAuthor>
              <p>Content: {content}</p>
            </ReviewsListItem>
          ))}
        </ReviewsWrap>
      )}

      {isLoading && reviews.length > 0 && <Loader />}
    </>
  );
};

export default Reviews;
