import { hot } from 'react-hot-loader/root';

import React from 'react';
import styles from './test.css'
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';

// interface IStarWarsNameClassState {
//     name: string;
//     count: number;
// }

interface IStarWarsNameFunctionState {
name: string;
count: number;
}

function HeaderComponent() {
    return (
            // <StarWarsNameClass></StarWarsNameClass> // Компонент class 
            <StarWarsNameFunction></StarWarsNameFunction> // Компонент function

    )
}

// class Components

// class StarWarsNameClass extends React.PureComponent<{}, IStarWarsNameClassState> {

    // Состояние через перегрузку
    // state: Readonly<IStarWarsNameClassState> = { name: this.randomName(), count: 0 } // READONLY! !!

    // Состояния через конструктор 
    // constructor(props: {}) {
    //     super(props)
    //     this.state = { name: this.randomName() }
    // }

//     render() {
//         return (
//         <section>
//             <div className={styles.example}>{this.state.name}</div>
//             <button onClick={this.handleClick}> Give me name!</button>
//         </section>
//         );
//     }

//     private handleClick = () => {
//         this.setState( {name: this.randomName() } )
//         this.setState( (state, props) => ({count: state.count + 1}), () => {console.log(this.state.count)})
//     };

//     private randomName(): string {
//         return uniqueNamesGenerator({dictionaries: [starWars], length: 1})
//     }    
// }



// Functional Components 

export function StarWarsNameFunction() {
    const randomName = () => uniqueNamesGenerator({dictionaries: [starWars], length: 1})

    // // Объявляем состояние через хук. 
    // const [name, setName] = React.useState(randomName);
    // // Атомарное состояния
    // const [count, setCount] = React.useState(0);

    // const handleClick = () => {
    //     setName(randomName);
    //     setCount((prevCount: number) => prevCount + 1);
    // };
    // console.log(count);

    // Объявляем Комплексное состояние в виде объекта 
    const [state, setState] = React.useState<IStarWarsNameFunctionState>({name: randomName(), count: 0})
    
    const handleClick = () => {
        // setState ( (prevState: IStarWarsNameFunctionState) => ({ name: randomName(), count: prevState.count + 1 }));

        // изменения состояния по отдельности с помощью спред (...prevState)
        setState ( (prevState: IStarWarsNameFunctionState) => ({...prevState, name: randomName() }));
        setState ( (prevState: IStarWarsNameFunctionState) => ({...prevState, count: prevState.count + 1 }));
    }

    console.log(state.count);

    return (
        <section>
            <div className={styles.example}> {state.name} </div>
            <button onClick={handleClick}> Give me name!</button>
        </section>
    )
}

// HMR
export const Header = hot(HeaderComponent);