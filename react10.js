import React from 'react';
class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.state={isLoggedIn:false};
    this.handleLoginClick=this.handleLoginClick.bind(this);
    this.handleLogoutClick=this.handleLogoutClick.bind(this);
  }
  handleLoginClick(){
    this.setState({isLoggedIn:true});
  }
  handleLogoutClick(){
    this.setState({isLoggedIn:false});
  }
  render(){
    const isLoggedIn=this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
      button=<LogoutButton onClick={this.handleLogoutClick} />;

    }else{
      button=<LoginButton onClick={this.handleLoginClick} />;

    }
    return(
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
        </div>
    
    );
      }

}
function Greeting(props){
  const isLoggedIn=props.isLoggedIn;
  if(isLoggedIn){
    return <h1> Welcome!</h1>;

  }
  return <h1>Please signup</h1>;
}

function LoginButton(props){
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props){
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default LoginControl;