export const scrollTo = (top, left) => {
  if (typeof window !== `undefined`) {
    window.scrollTo({top: top, left: left, behavior: 'smooth' })
  }
}
