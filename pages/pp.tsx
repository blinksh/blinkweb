import Head from 'next/head'
import SimpleLayout from '../components/SimpleLayout'

const PP = () => (
    <SimpleLayout>
      <Head>
        <title>Blink Shell &amp; Code Editor Pivacy Policy</title>
        <meta
          name="keywords"
          content="blink, shell, terminal, mosh, ios, ssh, emulator, code editor"
        />
      </Head>
      <h2>The Easiest to Understand Privacy Policy</h2>
      <p>
        Blink Shell app doesn't store your data. We don't even have where.
      </p>
      <p>
        If you enable iCloud, the information of your hosts will be stored within iCloud conveniently protected by Apple. Even in that scenario, your keys or other protected data will never leave your device.
      </p>
        If we were to change this in the future, we will always allow you to opt-in.
      <p>
        That's all there is to understand. That was easy.
      </p>
    </SimpleLayout>
  )


export default PP