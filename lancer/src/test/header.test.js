import React, { useContext } from 'react';
import {render, cleanup, getByTitle} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../component/Header'
import AuthContext from '../context/auth-context';


describe("Testing the header component", ()=>{
    
    afterEach(cleanup);
//really we shouldnt use a snapshot afterwards for subsequent states becasue the login button changes state
    it ("Displays the header",() =>{
        const tree = renderer.create(<Header></Header>)
        expect(tree).toMatchSnapshot();
    });

    it ("Displays a logout button if logged in", ()=>{
        const header = () => {
            const loginStatus = useContext(AuthContext)
            return <div>
                <AuthContext.Provider value={
                    {
                    authenticated: true,
                    login: () => {
                        setUser({ loggedIn: true })
                    },
                    logout: () => {
                        setUser({ loggedIn: false })
                    }
                    }
                }>
                    <Header></Header>
                </AuthContext.Provider>
            </div>
        }
        const {getByTitle} = render(header)
        expect(getByTitle("loginButton").toHaveTextContent("Login"))
    });

})
