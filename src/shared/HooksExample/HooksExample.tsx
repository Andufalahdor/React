import React from 'react';
import styles from './hooksexample.css';

// Какие бывают хуки:

// 1. useState 
// 2. useEffect
// 3. useRef
// 4. useReducer
// 5. useMemo
// 6. useContext
// 7. UseCallback
// 8. useImperativeHandle
// 9. useLayoutEffect
// 10. useDebugValue

export function HooksExample({title, id} : {title: string, id?: string}) {

  // Если не передавать зависимость 2 аргументом в useEffect, хук будет отрабатывать как componentDidMount и componentWillUpdate
  // React.useEffect(() => {
  //   console.log('componentDidMount');
  //   console.log('componentWillUpdate');
  // });

  // Если передать пустой массив 2 аргументом, хук будет отрабатывать как componentDidMount
  // React.useEffect(() => {
  //   console.log('componentDidMount');
  //   return () => {
  //         console.log('componentWillUnmount');
          
  //       }
  // }, []);

  // В данном примере useEffect будет срабатывать каждый раз когда будет изменено свойство title, включая первый рендер.
  // React.useEffect(() => {
  //   console.log('componentWillReceiveProps: ', title);
  // }, [title]);


  // React.useEffect(() => {
  //   console.log('componentDidMount');
  //   // Можем вернуть функцию которая будет вызвана перед componentWillUnmount
  //   return () => {
  //     console.log('componentWillUnmount');
      
  //   }
  // }, []);


  // const [isMounted] = useIsMounted();

  // React.useEffect(() => {
    // console.log('isMounted', isMounted);
    
  // }, [isMounted])

  const items = 10
const multiplier = 5
  const result = React.useMemo(
    () => {
      console.log('CALC');
      calculate(items, multiplier)
    },
    [items, multiplier]
  )

  return (
<div>{title} {id} {result}</div>
  );

    
}

// Пишем собственный хук 
export function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return [isMounted]
}

function calculate(items: number, multiplier: number) {
  return new Array(items).fill(1).reduce((a, v) => a * multiplier);
}