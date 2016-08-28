import React, { Component } from 'react';
import ListItem from './ListItem.jsx';

class List extends Component {
    render() {
        const bgColor = this.props.bgColor || '#357db5';
        const textColor = this.props.textColor || '#ffffff';

        const listPanelStyle = {
            borderLeft: bgColor,
            borderRight: bgColor,
            borderTop: bgColor
        };

        const listPanelHeadingStyle = {
            background: bgColor,
            color: textColor
        };

        const panelBodyStyle = {
            display: (this.props.items.length ? 'none' : 'block')
        }

        var createListItem = function(itemDetails, index) {
            return (<ListItem key={itemDetails.id + index}
                itemDetails={itemDetails}
                onListItemDelete={this.props.onListItemDelete}/>)
        }.bind(this);

        return (
            <div className="list-holder">
                <div className="panel panel-default" style={listPanelStyle}>
                    <div className="panel-heading" style={listPanelHeadingStyle}>
                        <h3 className="panel-heading-title">{this.props.title}</h3>
                    </div>
                    <ul className="list-group">
                        {this.props.items.map(createListItem)}
                    </ul>
                    <div className="panel-body" style={panelBodyStyle}></div>
                </div>
            </div>
        );
    }
}

export default List;
