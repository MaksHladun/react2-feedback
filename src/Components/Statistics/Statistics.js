 import PropTypes from 'prop-types';

const Statistics = ({good,neutral,bad,total,countFeedback}) => {
    
  return  <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total:{total}</li>
             <li>Positive feedback: {countFeedback}%</li>
          </ul>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  countFeedback: PropTypes.number.isRequired,
};

export default Statistics;