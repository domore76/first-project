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

    let dialogsData = [
        {id: 1, name: "Nikita"},
        {id: 2, name: "Masha"},
        {id: 3, name: "Petr"},
        {id: 4, name: "Vova"},
        {id: 5, name: "Mitya"}
    ];

    let messageData = [
        {id: 1, text: "Hi, what is you name?"},
        {id: 2, text: "How are your it-kamasutra?"},
        {id: 3, text: "Yo"},
    ]



const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>


            </div>
            <div className={s.messages}>

                <MessageItem text={messageData[0].text} id={messageData[0].id}/>
                <MessageItem text={messageData[1].text} id={messageData[1].id}/>
                <MessageItem text={messageData[2].text} id={messageData[2].id}/>
            </div>
        </div>
    );
};

export default Dialogs;

