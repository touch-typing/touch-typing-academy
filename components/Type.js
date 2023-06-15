import React from 'react'
import styles from '../src/styles/Type.module.css'
import Image from 'next/image'

function Type() {
  return (
   <div className={styles.type_container}>
   <div className={styles.letter_t}><Image src="/letter_t.png" width={40} height={40}/></div>
   <div className={styles.letter_y}><Image src="/letter_y.png" width={40} height={40}/></div>
   <div className={styles.letter_p}><Image src="/letter_p.png" width={40} height={40}/></div>
   {/* <div className={styles.letter_e}><Image src="/letter_e.png" width={40} height={40}/></div> */}
    </div>
  )
}

export default Type;