import {addMessage, updateMessage} from "../../redux/dialogsReducer.ts";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessage: state.dialogPage.newMessage,
})

// const mapDispatchToProps = (dispatch) => ({
//     addMessage: () => dispatch(addMessageActionCreator()),
//     updateMessage: text => dispatch(updateMessageActionCreator(text))
// })

export default compose(
    connect(mapStateToProps, {addMessage, updateMessage}),
    WithAuthRedirect
)(Dialogs)