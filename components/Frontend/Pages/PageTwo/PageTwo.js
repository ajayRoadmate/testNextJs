'use client'

import React, { useEffect } from 'react'
import styles from './PageTwo.module.css';
import Link from 'next/link';
import CustomModal from '../../SharedComponents/Modal/CustomModal/CustomModal';
import ModalModule from '../../SharedModules/ModalModule';

import DialogueModule from '../../SharedModules/DialogueModule';

export default function PageTwo() {

  const {openDialogue, DialogueBoxState} = DialogueModule();

  return (
    <div className={`${styles.mainWrapper}`}>
      <div>
        Hello test page Two
      </div>
      <Link href={'pageOne'}> go to page One </Link>

      <button onClick={()=>{openDialogue({title: 'This is custom title',description: 'this is custom description'}) }}>Open Modal</button>
    </div>
  )
}
