import { useEffect, useState } from 'react'

export default function App() {
  const [status, setStatus] = useState('carregando...')

  useEffect(() => {
    fetch('http://localhost:3000/healthz')
      .then((r) => r.json())
      .then((body: unknown) => setStatus(JSON.stringify(body)))
      .catch((err: Error) => setStatus(`erro: ${err.message}`))
  }, [])

  return (
    <main>
      <h1>TEP IHM</h1>
      <p>api: {status}</p>
    </main>
  )
}
