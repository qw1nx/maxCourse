import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.errorHandler}/>
}

const ModalOverlay = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.errorHandler}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className={classes.content}>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.errorHandler}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

const ErrorModal = props => {
    return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,
            document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
            document.getElementById('overlay-root'))}
    </React.Fragment>
    )
};

export default ErrorModal;