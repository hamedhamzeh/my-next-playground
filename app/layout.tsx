export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="winter">
            <body>{children}</body>
        </html>
    );
}
