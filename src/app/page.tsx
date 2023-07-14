'use client'

import styles from './page.module.css'
import {newClient} from "@worksheets/sdk"
import { Box, Button } from '@mui/material'

export default function Home() {
  const ws2 = newClient({})
  
  
  function addTwoNumbers(x: number, y: number) { 
    ws2.sys().log({message: "addTwoNumbers", x, y}).then(console.info).catch((err) => alert(err)) 
    ws2.time().now({}).then(console.info).catch((err) => alert(err)) 
  }
  
  return (
    <main className={styles.main}>
      <Box>Hello !</Box>
      <Button onClick={() => addTwoNumbers(1, 2)}>Hello!</Button>
    </main>
  )
}
