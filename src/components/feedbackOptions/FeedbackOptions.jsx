import { ReviewButton } from './reviewButton/ReviewButton';
import PropTypes from 'prop-types';

export const FeedbackOptions = props => (
  <div className="button-container">
    {Object.keys(props.options).map(option => (
      <ReviewButton
        key={option}
        handleClick={() => props.onLeaveFeedback(option)}
      >
        {option}
      </ReviewButton>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  onLeaveFeedback: PropTypes.func,
};
