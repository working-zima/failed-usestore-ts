import useCounterStore from '../hooks/useCounterStore';

/**
 * count state UI 담당 컴포넌트
 */
function Counter() {
  const [{ count }] = useCounterStore();

  return (
    <div>
      <p>
        Count:
        {' '}
        {count}
      </p>
    </div>
  );
}

export default Counter;
