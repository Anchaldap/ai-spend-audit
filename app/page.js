"use client"

import { useState } from "react"

export default function Home() {
  const [result, setResult] = useState(null)

  const runAudit = () => {
    const savings = 20
    setResult({
      monthly: savings,
      yearly: savings * 12
    })
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>AI Spend Auditor</h1>

      <button onClick={runAudit}>
        Run Audit
      </button>

      {result && (
        <div>
          <h2>Monthly Savings: ${result.monthly}</h2>
          <h3>Yearly: ${result.yearly}</h3>
        </div>
      )}
    </main>
  )
}
