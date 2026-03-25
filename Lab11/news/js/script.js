function parseHTML(html) {
	const parser = new DOMParser(); [cite: 302]
	const doc = parser.parseFromString(html, 'text/html'); [cite: 305]
	return doc.body.textContent; [cite: 307]
}

function extractImageUrl(description) {
	const match = description.match(/<img.*?src="(.*?)"/); [cite: 312]
	return match ? match[1] : null; [cite: 314]
}

async function displayNews(rssUrl) {
	const loadingPlaceholder = document.getElementById('loading-placeholder'); [cite: 320]
	const newsList = document.getElementById('news-list'); [cite: 322]

	try {
		loadingPlaceholder.classList.remove('d-none'); [cite: 327]
		newsList.classList.add('d-none'); [cite: 329]

		const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`); [cite: 336]
		const data = await response.text(); [cite: 335]

		const parser = new DOMParser(); [cite: 338]
		const xml = parser.parseFromString(data, 'application/xml'); [cite: 340]
		const items = xml.querySelectorAll('item'); [cite: 342]

		newsList.innerHTML = ''; [cite: 345]

		items.forEach(item => {
			const title = item.querySelector('title').textContent; [cite: 351]
			const link = item.querySelector('link').textContent; [cite: 354]
			const description = item.querySelector('description').textContent; [cite: 378]
			const pubDate = new Date(item.querySelector('pubDate').textContent); [cite: 358]

			const imageUrl = extractImageUrl(description); [cite: 379]

			const articleDiv = document.createElement('div'); [cite: 380]
			articleDiv.className = 'col-12 col-md-6 col-lg-4 mb-4'; [cite: 380]

			articleDiv.innerHTML = `
				<div class="card h-100">
					<img src="${imageUrl}" class="card-img-top" alt="${title}" style="height: 200px; object-fit: cover;">
					<div class="card-body">
						<h5 class="card-title">${title}</h5>
						<p class="card-text">${parseHTML(description)}</p>
						<p class="card-text">
							<small class="text-muted">${pubDate.toLocaleString('vi-VN')}</small>
						</p>
						<div class="d-flex gap-2">
							<a href="${link}" target="_blank" class="btn btn-primary">Đọc thêm</a>
						</div>
					</div>
				</div>`; [cite: 381, 382, 383, 384, 385, 386, 387, 389, 390, 391, 395, 397, 398]

			newsList.appendChild(articleDiv); [cite: 410]
		});

		loadingPlaceholder.classList.add('d-none'); [cite: 411]
		newsList.classList.remove('d-none'); [cite: 412]
	} catch (error) {
		console.error('Error fetching news:', error); [cite: 414]
		loadingPlaceholder.innerHTML = `
			<div class="col-12 text-center">
				<p class="text-danger">Error loading news. Please try again later.</p>
			</div>`; [cite: 415, 424, 426]
	}
}