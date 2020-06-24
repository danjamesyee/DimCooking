import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleDemo(e) {
        if (e.which === 13) {
            e.preventDefault();
        } else {
        this.props.login({
            username: 'gilbert12',
            password: '1234566'
        }).then(this.props.closeModal)
        }
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
                    <p>Unlock Dim Sum recipes and your personal recipe
                        box with a free account.
                    </p>
                </div>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.props.welcome}
                    
                    <button className="demo-submit" onClick={this.handleDemo}>
                        🥟  Continue with Demo
                    </button>
                    {this.renderErrors()}
                    
                    <p className="separator"></p>
                    <div className="login-form">
                        <label className='login-label'>Username
                            <br />
                            <input type="text" 
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label >
                        <br/>
                        <label className='login-label'>Password
                            <br/>
                            <input type="password"
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
                        <br/>
                        <br />
                        <div className="other-form">
                            {this.props.otherForm}
                            <br/>
                            <p>This site is protected by my extremely powerful willpower. Conditions apply.</p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;