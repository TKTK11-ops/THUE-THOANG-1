const COMMON_DOMAINS = [
  'gmail.com', 'googlemail.com',
  'yahoo.com', 'yahoo.co.uk', 'yahoo.fr', 'yahoo.de',
  'hotmail.com', 'hotmail.co.uk', 'hotmail.fr',
  'outlook.com', 'outlook.co.uk',
  'live.com', 'live.co.uk',
  'icloud.com', 'me.com', 'mac.com',
  'protonmail.com', 'proton.me', 'pm.me',
  'aol.com',
  'mail.com',
  'msn.com',
]

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  )
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    }
  }
  return dp[m][n]
}

export function suggestEmailCorrection(email: string): string | null {
  const trimmed = email.trim().toLowerCase()
  const atIndex = trimmed.lastIndexOf('@')
  if (atIndex < 1) return null

  const local = trimmed.slice(0, atIndex)
  const domain = trimmed.slice(atIndex + 1)

  if (!domain || domain.indexOf('.') < 0) return null
  if (COMMON_DOMAINS.includes(domain)) return null

  let bestMatch: string | null = null
  let bestDist = Infinity

  for (const known of COMMON_DOMAINS) {
    const dist = levenshtein(domain, known)
    if (dist > 0 && dist <= 2 && dist < bestDist) {
      bestDist = dist
      bestMatch = known
    }
  }

  return bestMatch ? `${local}@${bestMatch}` : null
}
