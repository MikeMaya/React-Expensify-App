// Higher orde component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state
import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props)=> (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, Pls dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requiereAuthentication = (WrappedComponent) => {
    return (props) => (
        <div> 
            {props.isAuthenticted ? 
            (<WrappedComponent {...props} />) : (<p>Please Sign in</p>) }
        </div>
    );
};  

//requiereAuthentication

const AuthInfo = requiereAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="Theses are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticted={true} info="Theses are the details"/>, document.getElementById('app'));