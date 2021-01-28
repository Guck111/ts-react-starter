import React, { ChangeEvent } from "react"
import { connect } from "react-redux"
import { updateNewMessageBodyCreator } from "@redux/dialogs-reducer"

type Props = {
  newMessageBody: string
  updateNewMessageBodyCreator: (value: string) => void
}

const MessageField = (props: Props) => {
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const body = e.target.value
    props.updateNewMessageBodyCreator(body)
  }

  return (
    <div>
      <textarea
        onChange={onNewMessageChange}
        value={props.newMessageBody}
      ></textarea>
    </div>
  )
}

export const MessageFieldContainer = connect(
  (state) => ({ newMessageBody: state.dialogsPage.newMessageBody }),
  (dispatch) => ({
    updateNewMessageBodyCreator: (payload: string) =>
      dispatch(updateNewMessageBodyCreator(payload)),
  })
)(MessageField)
