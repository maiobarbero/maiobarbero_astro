export const slugify = string => {
	string = string.trim().toLowerCase()
	// Replace spaces with dashes
	string = string.replace(/\s+/g, '-')

	// Replace special characters with their equivalents
	string = string.replace(/à|á|â|ä|æ|ã|å|ā/g, 'a')
	string = string.replace(/ç|č|ć/g, 'c')
	string = string.replace(/ď|ð/g, 'd')
	string = string.replace(/è|é|ê|ë|ē|ė|ę/g, 'e')
	string = string.replace(/ì|í|î|ï|ī|į/g, 'i')
	string = string.replace(/ñ/g, 'n')
	string = string.replace(/ò|ó|ô|ö|ø|ō|õ/g, 'o')
	string = string.replace(/œ/g, 'oe')
	string = string.replace(/ř/g, 'r')
	string = string.replace(/š|ś/g, 's')
	string = string.replace(/ť/g, 't')
	string = string.replace(/ù|ú|û|ü|ū|ů/g, 'u')
	string = string.replace(/ý|ÿ/g, 'y')
	string = string.replace(/ž|ź|ż/g, 'z')
	string = string.replace(/ß/g, 'ss')

	// Remove special characters
	string = string.replace(/[^a-z0-9\-]/g, '')

	// Remove duplicate dashes
	string = string.replace(/-+/g, '-')

	return string
}
