import React from 'react'

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailErr,
        passwordErr
    } = props

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailErr}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordErr}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleSignIn}>Sign In</button>
                            <p>Dont have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                            <>
                                <button onClick={handleSignUp}>Sign Up</button>
                                <p>Already have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                            </>
                        )}
                </div>
            </div>
        </section>
    )
}

export default Login
