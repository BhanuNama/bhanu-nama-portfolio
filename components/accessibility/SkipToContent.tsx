export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-custom z-50 focus:outline-none focus:ring-2 focus:ring-primary-400"
    >
      Skip to main content
    </a>
  )
}
