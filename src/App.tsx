import React, { useState } from "react";
import './main.global.css'
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { HooksExample, useIsMounted } from "./shared/HooksExample";
import { getValue } from "./utils/react/pickFromSyntheticEvent";

export function AppComponent() {
    // const [isVisible, setIsVisible] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [isVisible] = useIsMounted()

    return (
    <Layout>
        <Header />
        <Content>
            <CardsList />
            {/* <button onClick={() => setIsVisible(!isVisible)}> Change me! </button> */}
            <input type="text" onChange={getValue(setTitle)} />
            {isVisible && <HooksExample title={title} id="11" />}
        </Content>
    </Layout>
    );
}

export const App = hot(() => <AppComponent />)