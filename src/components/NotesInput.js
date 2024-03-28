import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // initialization
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return(
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <input type="text" placeholder="Body" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default NoteInput;