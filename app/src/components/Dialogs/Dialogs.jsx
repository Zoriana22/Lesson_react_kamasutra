import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;

  return (
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to={path}>{props.name}</NavLink>
        </div>
  )
}

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Vasja'},
  ]

  let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'I am happy'},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
      </div>
        
      <div className={s.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id}/>
        <Message message={messagesData[1].message} id={messagesData[1].id}/>
        <Message message={messagesData[2].message} id={messagesData[2].id}/>
        <Message message={messagesData[3].message} id={messagesData[3].id}/>
      </div>
    </div>
  )
}

export default Dialogs;
