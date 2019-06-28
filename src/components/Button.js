import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    // Must be specifically called contextType:
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return <button className="ui button primary">{text}</button>;
    }
}

// Button.contextType = LanguageContext; is equivalent to declaring
// the static property inside of the Button class

export default Button;
