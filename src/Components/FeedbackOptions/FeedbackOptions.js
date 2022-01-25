import PropTypes from 'prop-types';

const FeedbackOptions = ({value, onLeaveFeedback}) => {
    return <>
        {Object.keys(value).map(name =>
            <button
            key={name}
            type="button"
             onClick={() => onLeaveFeedback(name)}
            >
                {name}
            </button>
            
    )}
    </>
  
    
    
}
FeedbackOptions.propTypes = {
  value: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions