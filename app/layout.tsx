import { cn } from "@/lib/utils"
import { attributeRootLayoutRequest } from "@/lib/otel/layout"
import { BottomCorners, LegalLinks, TopCorners } from "@/components/corners"
import "@/styles/globals.css"
import { NextPageDecode } from "@/components/page-decode-next"
import { ThemeProvider } from "@/components/theme-provider"
import { fontVariables } from "@/lib/fonts"

export const metadata = {
  title: "1909",
  description: "三個室友的共同支出",
  // A private app for three flatmates: keep every page out of search results.
  robots: { index: false, follow: false },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Client attribution for Sensorium — see @workspace/otel/layout for why
  // this has to run here (Node.js Server Component) and not middleware.
  await attributeRootLayoutRequest()

  return (
    <html
      lang="zh-TW"
      suppressHydrationWarning
      className={cn("dark", "antialiased", fontVariables, "font-sans")}
    >
      <body>
        <ThemeProvider>
          <NextPageDecode />
          <TopCorners fade />
          {children}
          <BottomCorners
            fade
            copyrightTip="zyx"
            links={<LegalLinks labels={{ privacy: "隱私權", terms: "條款" }} />}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
