export const env = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL!,
  },
  resend: {
    url: process.env.NEXT_PUBLIC_RESEND_URL!,
  },
  environment: {
    prod: process.env.NEXT_PUBLIC_IS_PRODUCTION === "true",
  },
} as const;
