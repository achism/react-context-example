import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // Must be specifically called contextType:
    // static contextType = LanguageContext;
    renderTranslation = value => {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton = color => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {value => this.renderTranslation(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

// Button.contextType = LanguageContext; is equivalent to declaring
// the static property inside of the Button class

export default Button;
