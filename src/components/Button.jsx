import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ onClick, className, outline, children }) => {
  const [ count, setCount] = useState(0);

  onClick = (event) => {
    if (event.target) {
      setCount(count + 1)
      console.log(`You buy many pizza's ${count}`)
    };
  }
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
