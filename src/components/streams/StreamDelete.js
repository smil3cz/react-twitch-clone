import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent = () => {
    if (!this.props.stream) {
      return `Are you sure you want to delete this stream?`;
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  };

  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  };

  render() {
    return (
      <Modal
        title="Delete a stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
