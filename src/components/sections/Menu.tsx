import React, { Component } from 'react';
import { Data } from '../../Types';
import { authURL } from '../../gateway/http/HTTP';
import '../../assets/css/components/Menu.css';

export interface Props {
    user: Data
}

export interface State {}

export default class Menu extends Component<Props, State> {
    public render(): React.ReactFragment {
        return (
            <React.Fragment>
                <div className="menu-xiXYdm">
                    <div className="menu-xiXYdm-content-XDdyM">
                        <div className="menu-xiXYdm-brand-banner-Xufym">
                            <a onClick={() => window.location.assign("/")}><h1 id="menu-polls-banner-text-SUcyM">POLLS</h1></a>
                        </div>
                        <div className="menu-xiXYdm-items-floating-to-right-Xufdym">
                            <ul>
                                <a onClick={() => window.location.assign("/support")} className="menu-xiXYdm-item-xUSFm menu-xiXYdm-item-xUSFm-next-xSU">Support</a>
                                {this.props.user.id && 
                                    <a onClick={() => window.location.assign("/dashboard")} className="menu-xiXYdm-item-xUSFm menu-xiXYdm-item-xUSFm-next-xSU">Dashboard</a>
                                }
                                {!this.props.user.id && 
                                    <button onClick={() => window.location.assign(`${authURL}`)} className="menu-xiXYdm-item-xUSFm sign-in-button-on-menu-xSUusdM">Sign In</button>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}