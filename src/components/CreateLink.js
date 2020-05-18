import React, { Component } from "react";

class CreateLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            url: "",
        };
    }

    render() {
        return(
        <div>
            <div classeName='flex flex-column mt3'>
                <input
                    className='mb2'
                    value={this.state.description}
                    onChange={(e) => {
                        this.setState({ description: e.target.value });
                    }}
                    type='text'
                    placeholder='A description for the link'
                />
                <input
                    className='mb2'
                    value={this.state.url}
                    onChange={(e) => this.setState({ url: e.target.value })}
                    type='text'
                    placeholder='The uri for the link'
                />
            </div>
        </div>);
    }
}
export default CreateLink