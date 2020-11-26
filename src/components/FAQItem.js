import Component from 'react';

class FAQItem extends Component {
    state = {
        isShown: false,
        isShown2: false
    }
    handleIsShown = () => {
        this.setState({ isShown: !this.state.isShown, isShown2: false });
    }
    handleIsShown2 = () => {
        this.setState({ isShown2: !this.state.isShown2 });
    }
    render() {
        console.log(this.props);
        return (
            <div style={{ width: "400px" }}>
                <div className="flex">
                    <h4>{this.props.faq.question} </h4>
                    <button onClick={this.handleIsShown}> {!this.state.isShown ? "+" : "-"} </button>
                </div>
                <div className="flex" style={{ display: this.state.isShown ? "flex" : "none" }}>
                    <h4>{this.props.faq.answer}</h4>
                    <button onClick={this.handleIsShown2}> {!this.state.isShown2 ? "+" : "-"} </button>
                </div>
                <div style={{ display: this.state.isShown2 ? "block" : "none" }}>
                    {this.props.faq.answerLong}
                </div>
            </div>
        );
    }
}

export default FAQItem;