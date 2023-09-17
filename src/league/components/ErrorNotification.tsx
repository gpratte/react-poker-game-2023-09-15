import {Button, Toast} from "react-bootstrap";
import {isEmpty} from "lodash";
import React from "react";

function ErrorNotification(props) {
  return (
    <Toast show={!isEmpty(props.notification)}
           autohide={true}
           delay={7000}
           onClose={() => props.closeNotification(props.notification.id)}>
      <Toast.Header closeButton={false}>
        <strong className="me-auto">{props.notification.type}</strong>
        <Button variant={"secondary"}
                onClick={() => props.deleteNotification(props.notification.id)}>Close</Button>
      </Toast.Header>
      <Toast.Body>{props.notification.message}</Toast.Body>
    </Toast>
  )
}

export default ErrorNotification;