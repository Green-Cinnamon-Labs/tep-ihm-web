import { useEffect, useState } from 'react'

export default function Health() {
  const [status, setStatus] = useState('carregando...')

  useEffect(() => {
    fetch('http://localhost:3000/healthz')
      .then((r) => r.json())
      .then((body: unknown) => setStatus(JSON.stringify(body)))
      .catch((err: Error) => setStatus(`erro: ${err.message}`))
  }, [])

  return <p>api: {status}</p>
}
