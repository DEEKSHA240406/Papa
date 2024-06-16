function toggleSection(showId, hideId) {
    var showSection = document.getElementById(showId);
    var hideSection = document.getElementById(hideId);

    showSection.classList.remove('hidden');
    showSection.classList.add('visible');
    hideSection.classList.remove('visible');
    hideSection.classList.add('hidden');
}