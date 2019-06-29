import React from 'react';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import UserCreate from './UserCreate';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'english'
        }
    }

    onLanguageChange = language => {
        this.setState({ language });
    }

    render() {
        return (
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;
