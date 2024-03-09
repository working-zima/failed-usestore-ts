import useCounterStore from '../hooks/useCounterStore';

/**
 * increase, decrease 버튼 UI 담당 컴포넌트
 */
export default function CountControl() {
  const [, store] = useCounterStore();

  return (
    <div>
      <button type="button" onClick={() => store.increase()}>
        Increase
      </button>
      <button type="button" onClick={() => store.increase(10)}>
        Increase 10
      </button>
      <button type="button" onClick={() => store.decrease()}>
        Decrease
      </button>
      <button type="button" onClick={() => store.decrease(10)}>
        Decrease 10
      </button>
    </div>
  );
}
