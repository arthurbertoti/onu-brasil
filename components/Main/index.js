/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Main.module.css'

export default function Main(){
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <img className={styles.image} src="/images/imagem_1.jpg" alt="3 Mulheres olhando para o horizonte" />
        <h3>15 de semtembro</h3>
      </div>
      <div className={styles.card}>
        <img className={styles.image} src="/images/imagem_2.jpeg" alt="3 Mulheres olhando para o horizonte" />
        <h3>15 de semtembro</h3>
      </div>
      <p>Conteúdo principal</p>
    </div>



  )
}