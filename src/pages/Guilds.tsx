import React, { Component } from 'react';
import GuildItem from '../components/items/GuildItem';
import { authURL } from '../gateway/http/HTTP';
import { Data, Guild } from '../Types';
import '../assets/css/pages/Guilds.css';

export interface Props {
    loading: boolean
    setLoading: Function
    setError: Function
    guilds: Array<Guild>
    user: Data
}

export interface State {}

export default class Guilds extends Component<Props, State> {
    public async componentDidMount(): Promise<void | any> {
        console.log(this.props.guilds)
        if(this.props.guilds.length && this.props.guilds.length <= 0) return window.location.assign(`${authURL}`);
        if(!this.props.user || (this.props.user && !(this.props.user.id || this.props.user.guilds || this.props.user.sessionToken))) return window.location.replace(`${authURL}`);

        this.props.setLoading(false);
    }

    public render(): React.ReactFragment {
        if(this.props.loading) return <></>;

        return (
            <React.Fragment>
                <div className="guilds-page-UxcyDM">
                    <div className="guilds-page-header-SxSudO">
                        <h1 className="guilds-page-select-some-discord-server-title-XudyM">Select some Discord server</h1>
                    </div>
                    {this.props.guilds.length >= 1 && this.props.guilds.filter((guild: Guild) => guild.permissions === 2147483647 || guild.permissions_new === "2147483647").map((_guild: any): any => <GuildItem guild={_guild} />)}
                    {this.props.guilds.length <= 0 && "You don't have guilds."}
                </div>
            </React.Fragment>
        );
    }
}