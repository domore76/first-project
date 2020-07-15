import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogItem name="Nikita" id="1"/>
                <DialogItem name="Masha" id="2"/>
                <DialogItem name="Petr" id="3"/>
                <DialogItem name="Vova" id="4"/>
                <DialogItem name="Mitya" id="5"/>

            </div>
            <div className={s.messages}>

                <MessageItem text="Hi, what is you name?"/>
                <MessageItem text="How are your it-kamasutra?"/>
                <MessageItem text="Yo"/>
                <MessageItem text="Yo"/>
                <MessageItem text="Yo"/>

            </div>
        </div>
    );
};

export default Dialogs;

