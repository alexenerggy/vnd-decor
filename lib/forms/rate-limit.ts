const storage = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(
  key: string,
  limit = 5,
  windowMs = 60_000
): { limited: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const existing = storage.get(key);

  if (!existing || now > existing.resetAt) {
    storage.set(key, { count: 1, resetAt: now + windowMs });
    return { limited: false, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (existing.count >= limit) {
    return { limited: true, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return { limited: false, remaining: Math.max(0, limit - existing.count), resetAt: existing.resetAt };
}
