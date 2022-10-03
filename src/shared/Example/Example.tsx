import React from 'react';
import styles from './example.css';
import { preventDefault } from '../../utils/react/preventDefault';
import { stopPropagation } from '../../utils/react/stopPropagation';
import { withKey } from '../../utils/react/withKey';
import { getValue, pickFromSyntheticEvent } from '../../utils/react/pickFromSyntheticEvent';

export function Example() {
  return (
    <div>work ! 2 3</div>
  );
}

// Карирование - отложенный вызов функции |  Функция высшего порядка (возвращает другую функцию или принимает другую функцию)
// Пример 
// add(1)(1) // => 2
// Реализация 
// function add (leftSide: number) {
//   return (rightSide: number) => leftSide + rightSide
// }

// const add = (leftSide:number) => (rightSide: number) => leftSide + rightSide;
// const addOne = add(1);
// addOne(5) // => 6

// addEventListener функция высшего порядка, в качестве аргумента принимает другую функцию, коллбек. 
// window.addEventListener('resize', () => {})


// Функция withKey - функция высшего порядка принимает в себя строковый ключ и возвращает функцию которая принимает в себя компонент. 
const withIdKey = withKey('id');

function Feed(props: {blocks: IBlockProps[]}) {
  return (
    <div>
      {/* {props.blocks.map(block: IBlockProps) => {
        <Block key={block.id} {...block} />
      }} */}
      {props.blocks.map(withIdKey(Block))}
    </div>
  )
}

interface IBlockProps {
  title: string,
  id: string,
}

function Block(props: IBlockProps) {
  return (
    <div> {props.title}</div>
  )
}

function Input(props: { onChange: (value: string) => void, value: string}) {
  return (
    // <input value={props.value} onChange={(e) => props.onChange(e.currentTarget.value)}/>
    <input value={props.value} onChange={getValue(props.onChange)}/>
  )
}

function Checkbox(props: {onChange: (value: boolean) => void, value: boolean}) {
  return (
    // <input type="checkbox" checked={props.value} onChange={(e) => props.onChange(e.currentTarget.checked)} />
    // <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
    123
  )
}

function NotStandardLink(props: any) {
  const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    e.preventDefault();
    props.onClick()
  }

  return (
    // <a onClick={handleClick}>Hello</a>
    <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>

  )
}

