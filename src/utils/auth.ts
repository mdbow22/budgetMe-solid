const Auth = {
    setToken: function(token) {
        localStorage.setItem('login_token',token);
    },
}

export default Auth;