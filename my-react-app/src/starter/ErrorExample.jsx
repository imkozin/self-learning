import {useState} from 'react';

const ErrorExample = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
    }

    return (
      <div>
        <h2>You clicked {count} times</h2>
        <button type="button" className="btn" onClick={handleClick}>
          increase
        </button>
        <button type="button" className="btn" onClick={handleDecrease}>
          decrease
        </button>
      </div>
    )

}

export default ErrorExample;