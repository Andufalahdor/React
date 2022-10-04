import React, { useState } from "react";
import './main.global.css'
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
// import { HooksExample, useIsMounted } from "./shared/HooksExample";
// import { getValue } from "./utils/react/pickFromSyntheticEvent";
// import { generateId, generateRandomString } from "./utils/react/generateRandomIndex";
// import { GenericList} from "./shared/Content/MyList";
// import { merge } from './utils/js/merge';
// import { Dropdown } from './shared/Dropdown/Dropdown';

// const LIST = [
//     { value: 'some'},
//     { value: 'other some'},
//     { value: 'some'},
// ].map(generateId)

// const LIST = [
//     { text: 'some'},
//     { text: 'other some'},
//     { text: 'some'},
// ].map(generateId)

export function AppComponent() {
    // const [isVisible, setIsVisible] = React.useState(false);
    // const [title, setTitle] = React.useState('');
    // const [isVisible] = useIsMounted()
    // const [list, setList] = React.useState(LIST);

    // handle delete items
    // const handleItemClick = (id: string) => {
    //     setList(list.filter((item) => item.id != id));
    //     // console.log(id)
    // }

    // handle add items 
    // const handleAdd = () => {
    //     setList(list.concat(
    //         generateId({ text: generateRandomString() })))
    // }

    return (
    <Layout>
        <Header />
        <Content>
            <CardsList />
            {/* <button onClick={() => setIsVisible(!isVisible)}> Change me! </button> */}
            {/* <input type="text" onChange={getValue(setTitle)} /> */}
            {/* {isVisible && <HooksExample title={title} id="10" />} */}
            {/* <HooksExample title={title} id="10"/> */}
            {/* {console.log(LIST)} */}
            {/* <button onClick={handleAdd}>Add element</button> */}
            {/* <MyList list={list.map(merge({ onClick: handleItemClick}))}/> */}
            {/* <GenericList list={list.map(merge({ onClick: handleItemClick}))}/> */}
        </Content>
        {/* <Dropdown 
            onClose={() => console.log('closed')}
            onOpen={() => console.log('open')}
            isOpen={false}
            button={<button>Test</button>}>

            <div style={{ padding: 20 }}>
            <br/>
            <ul>
                <li onClick={console.log}>
                    Click me!
                </li>
                <li>Don't click me!</li>
            </ul>
            </div>
        </Dropdown> */}
    </Layout>
    );
}

export const App = hot(() => <AppComponent />)