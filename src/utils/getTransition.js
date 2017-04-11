module.exports = function() {
    const {location} = this.props;
    return location.state.transition;
}