import { hot } from 'react-hot-loader/root';

import React from 'react';
import styles from './header.less'
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';

interface IStarWarsNameClassState {
    name: string;
    count: number;
}

function HeaderComponent() {
    return (
            <StarWarsNameClass></StarWarsNameClass>
    )
}

class StarWarsNameClass extends React.PureComponent<{}, IStarWarsNameClassState> {

    // Состояние через перегрузку
    state: Readonly<IStarWarsNameClassState> = { name: this.randomName(), count: 0 } // READONLY! !!

    // Состояния через конструктор 
    // constructor(props: {}) {
    //     super(props)
    //     this.state = { name: this.randomName() }
    // }

    render() {
        return (
        <section>
            <div className={styles.example}>{this.state.name}</div>
            <button onClick={this.handleClick}> Give me name!</button>
        </section>
        );
    }

    private handleClick = () => {
        this.setState( {name: this.randomName() } )
        this.setState( (state, props) => ({count: state.count + 1}), () => {console.log(this.state.count)})
    };

    private randomName(): string {
        return uniqueNamesGenerator({dictionaries: [starWars], length: 1})
    }    
}

export const Header = hot(HeaderComponent);