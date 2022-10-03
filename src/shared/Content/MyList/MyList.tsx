import React from 'react';
import styles from './mylist.css';

interface IItem {
  text: string;
  id: string;
  onClick: (id: string) => void; // 2 способ
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

// interface IMyListProps {
//   list: IItem[];
//   // onClicks: (id: string) => void; // 1 способ
// }

// export function MyList({list}: IMyListProps) {
//   return (
//     <ul>
//       {list.map((item: IItem) => (
//         <li onClick={() => item.onClick(item.id)} key="item.id">{item.value}</li>
//       ))}
//     </ul>
//   );
// }

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {

  return (
    <> 
    {console.log(list)}
      {list.map(( { As = 'li', text, onClick, className, id, href}) => (
      <As 
      className={className}
      onClick={() => onClick(id)}
      key={id}
      href={href}
      >
        {text}
      </As>
    ))}
    </>
  )
}

