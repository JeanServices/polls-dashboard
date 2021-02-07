import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { getUser } from './gateway/http/HTTP'; 
import { Data } from './Types';

import Menu from './components/sections/Menu';
import GuildsPage from './pages/Guilds';

export interface Props {}

export interface State {
    user: Data
    loading: boolean
    error: {
        _: boolean,
        data: {
            code: string | number | any
            message: string | any
        }
    }
}

export default class App extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            user: {
                id: null,
                username: null,
                discriminator:null,
                avatar: null,
                sessionToken: null,
                guilds: []
            },
            loading: true,
            error: {
                _: false,
                data: {
                    code: null,
                    message: null
                }
            }
        }

        this.setLoading = this.setLoading.bind(this);
        this.setError = this.setError.bind(this);
    }

    public async componentDidMount(): Promise<void | any> {
        let _user: Data = await getUser();
        if(_user && _user.id && _user.sessionToken && _user.guilds) {
            this.setState({
                user: _user
            });
        }

        return true;
    }

    public setLoading(_: boolean) {
        this.setState({
            loading: _
        });

        return true;
    }

    public setError(_: State["error"]["_"], code: State["error"]["data"]["code"], message: State["error"]["data"]["message"]) {
        this.setState({
            error: {
                _,
                data: {
                    code,
                    message
                }
            }
        });

        return true;
    }

    public getRouter() {
        return (
            <React.Fragment>
                <Router history={createBrowserHistory()}>
                    <Menu user={this.state.user} />
                    <Route exact path="/dashboard/guilds">
                        <GuildsPage setLoading={this.setLoading} setError={this.setError} guilds={this.state.user.guilds} loading={this.state.loading} user={this.state.user} />
                    </Route>
                </Router>
            </React.Fragment>
        );
    }

    public render(): React.ReactFragment {
        if(this.state.loading === false && this.state.error._ === false && this.state.error.data.message === null && this.state.user.id && this.state.user.guilds && this.state.user.sessionToken) {
            return (this.getRouter());
        } else if(this.state.loading === false && this.state.error._ === true && typeof this.state.error.data.message === "string") {
            return (
                <React.Fragment>
                    <h1>Error: {`${this.state.error.data.message} (x${this.state.error.data.code})`}</h1>
                </React.Fragment> 
            );
        } else {
            return (this.getRouter());
        }
    }
}