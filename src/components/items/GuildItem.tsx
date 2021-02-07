import React, { Component } from 'react';
import { clientURL } from '../../gateway/http/HTTP';
import { Guild } from '../../Types';
import '../../assets/css/components/GuildItem.css';

export interface Props {
    guild: Guild
}

export interface State {}

export default class GuildItem extends Component<Props, State> {
    public render(): React.ReactFragment {
        return (
            <div onClick={() => window.location.assign(`${clientURL}/guild/${this.props.guild.id}`)} className="guild-for-guilds-page-mYznIq">
                <div className="guild-for-guilds-page-mYznIq-floating-to-left-xUsdm">
                    <div className="guild-for-guilds-page-mYznIq-floating-to-left-xUsdm-img-DUfy-to-left">
                        {this.props.guild.icon && typeof this.props.guild.icon === "string" && 
                            <img className="guild-for-guilds-page-mYznIq-floating-to-left-xUsdm-img-guild-xYF" src={`https://cdn.discordapp.com/icons/${this.props.guild.id}/${this.props.guild.icon}.jpg?size=2048`} alt="" loading="lazy" />
                        }
                        {!this.props.guild.icon &&
                            <img className="guild-for-guilds-page-mYznIq-floating-to-left-xUsdm-img-guild-xYF" src={`https://cdn.discordapp.com/embed/avatars/1.png`} alt="" loading="lazy" />
                        }
                    </div>
                    <div className="guilds-guild-data-XdyCm">
                        <p className="guild-for-guilds-page-mYznIq-floating-to-left-xUsdm-text">{(this.props.guild && this.props.guild.name) || "Server"} <br/>
                        {this.props.guild.joined && 
                            <p id="guilds-guild-ID-xYDmDS">{this.props.guild.memberCount || 0} Members</p>
                        }
                        {!this.props.guild.joined &&
                            <button id="guilds-button-invite-usXYTdm">Invite</button>
                        }
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}