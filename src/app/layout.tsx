import "src/app/global.css"; // keep global CSS import in the root layout
import Providers from "./providers";

// (Recommended) Use Next.js Metadata API instead of manual <head> tags
export const metadata = {
  title: "Neethi Thevan - AI, Data and Cloud Developer",
  description:
    "Welcome to Neethi Thevan's professional portfolio. Explore projects, experience, and more.",
  openGraph: {
    type: "website",
    description: "Professional portfolio with a chatbot.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
