import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    };

    render() {
        return(
            <div className="login-form-container">
                <div className="login-image">
                    <h2>Unlock Dim Sum recipes and your personal recipe
                        box with a free account.
                    </h2>
                </div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.props.welcome}
                    <br />
                    {this.renderErrors()}
                    <p>Or use your username</p>
                    <div className="login-form">
                        <label>Username
                            <br />
                            <input type="text" 
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br/>
                        <label>Password
                            <br/>
                            <input
                                value={this.state.password}
                                onChange={this.update('password')}
                                className='login-input'
                            />
                        </label>
                        <br/>
                        <p>By creating an account, you agree to absolutely nothing.</p>
                        <br/>
                        <input 
                            className="session-submit" 
                            type="submit"
                            value={this.props.formType} 
                        />
                        {this.props.navLink}
                        <br/>
                        <p>This site is protected by my extremely powerful willpower. Conditions apply.</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;