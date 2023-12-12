import React from "react"

class InputField extends React.Component {
    constructor(props) {
        super(props)
        this.setHook = props.setter
        this.id = props.id
        this.reset()
    }

    reset() {
        this.state = {
            inputValue: ""
        }
    }

    render() {
        return (
            <input id={this.id} value={this.state.inputValue} onChange={(event) => this.updateInputValue(event)} />
        )
    }

    //custom methods
    /**
     * updates the hook every time the text field is typed in
     * @param {Event} event the onChange event generated every time there's an input
     */
    updateInputValue(event) {
        //get whatever the input was
        const value = event.target.value;
        this.setState({
            inputValue: value
        })
        this.setHook(value)
    }
}

export default InputField