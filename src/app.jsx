import React from "react";
import "./style.scss";
import Button from './components/button/button';
import { Title, Wrapper } from "./components/button/button.styles";


const App = () => {
        return (
            // Use them like any other React component – except they're styled!
            <Wrapper>
              <Title>Hello World, this is my first styled component!</Title>
              <Button />
            </Wrapper>
          );
}

const devMode = process.env.NODE_ENV === 'development';

if(devMode && module && module.hot){
    module.hot.accept();
}

export default App;