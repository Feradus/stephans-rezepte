import "./globals.css"
import type { LayoutProps } from "@/app/types/index"

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
