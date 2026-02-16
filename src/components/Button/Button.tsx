import React from 'react'
import styles from './Button.module.css'

type Props = { label: string; onClick?: () => void; disabled?: boolean }

const Button: React.FC<Props> = ({ label, onClick, disabled = false }) => (
  <button className={styles.btn} onClick={onClick} disabled={disabled}>
    {label}
  </button>
)

export default Button
