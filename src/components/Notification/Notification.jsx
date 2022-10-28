import css from './Notification.module.css'

import {MdAnnouncement} from 'react-icons/md';

export default function Notification({message}) {
  return (
    <div className={css.box}>
    <p className={css.message}>{message}</p>
    <MdAnnouncement/>
    </div>
    
  )
}
