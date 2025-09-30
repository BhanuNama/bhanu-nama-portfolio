export interface Project {
  id: string
  title: string
  slug: string
  shortDescription: string
  longDescription: string
  techStack: string[]
  features: string[]
  liveUrl: string | null
  repoUrl: string | null
  images: Array<{
    src: string
    alt: string
  }>
  year: string
  role: string
  metrics: Record<string, string>
}
