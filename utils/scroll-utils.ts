/**
 * Smoothly scrolls to a specific section with header offset
 * @param sectionId The ID of the section to scroll to
 */
export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId)

  if (section) {
    // Get the header height for offset calculation
    const headerHeight = document.querySelector("header")?.offsetHeight || 80

    // Scroll to the section with offset for header
    window.scrollTo({
      top: section.offsetTop - headerHeight,
      behavior: "smooth",
    })

    // Update URL hash without scrolling
    history.pushState(null, "", `#${sectionId}`)
  }
}
