import Image from 'next/image'

import Counter from './Counter'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Image src="nart.svg" alt="Nart Logo" width={128} height={128} />
        <h1>Next.js App Router Template v1.0.0</h1>
        <Counter />
      </div>
      <div className={styles.docs}>
        <a
          className={styles.nart}
          href="https://github.com/dangminhngo/next-app-router-template"
          target="_blank"
          rel="noreferrer"
        >
          Read Our Docs
        </a>
        <a
          className={styles.next}
          href="https://beta.nextjs.org/docs"
          target="_blank"
          rel="noreferrer"
        >
          Next.js Beta Docs
        </a>
        <a
          className={styles.react}
          href="https://beta.reactjs.org/"
          target="_blank"
          rel="noreferrer"
        >
          React Beta Docs
        </a>
      </div>
    </main>
  )
}
