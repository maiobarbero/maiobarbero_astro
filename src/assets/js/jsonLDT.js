export default function jsonLDGenerator({
	type,
	title,
	description,
	date,
	url,
}) {
	if (type === 'post') {
		return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${title}",
        "description": "${description}",
        "datePublished": "${date}"
      }
    </script>`
	}
	return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "maiobarbero.dev",
      "url": "https://www.maiobarbero.dev"
      }
    </script>`
}
