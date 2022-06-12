export function time2TimeAgo(date: string) {
	const initialUnix = Math.floor(new Date(date).getTime() / 1000)
	const d = new Date()
	const nowTs = Math.floor(d.getTime() / 1000)
	const seconds = nowTs - initialUnix

	if (seconds > 2 * 24 * 3600) {
		return 'Декілька днів тому '
	}

	if (seconds > 24 * 3600) {
		return 'Вчора'
	}

	if (seconds > 3600) {
		return 'Кілька годин назад'
	}

	if (seconds > 1800) {
		return 'Півгодини тому'
	}

	if (seconds > 60) {
		return Math.floor(seconds / 60) + ' хвилин тому'
	}

	if (seconds < 60) {
		return 'Щойно'
	}
}
