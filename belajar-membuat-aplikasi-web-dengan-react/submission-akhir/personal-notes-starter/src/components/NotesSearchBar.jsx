import React from "react";

class NotesSearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
        }

        this.onSearchChange = this.onSearchChange.bind(this);        
    }

    onSearchChange(event) {
        this.setState(() => {
            return {
                keyword: event.target.value,
            }
        });

        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <div className="note-search">
                <input type="text" onChange={this.onSearchChange} value={this.state.keyword} placeholder="Find notes..." />
            </div>
        )
    }
}

export default NotesSearchBar;