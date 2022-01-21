import {addMessage, updateMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessage: state.dialogPage.newMessage
})

// const mapDispatchToProps = (dispatch) => ({
//     addMessage: () => dispatch(addMessageActionCreator()),
//     updateMessage: text => dispatch(updateMessageActionCreator(text))
// })

export default connect(mapStateToProps, {
    addMessage,
    updateMessage
})(Dialogs)