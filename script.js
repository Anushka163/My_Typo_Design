function showRequirements() {
    const requirements = document.getElementById('requirements');
    requirements.style.display = 'block';
    gsap.from('#requirements', { opacity: 0, y: 50, duration: 1 });
}

function showDesigns() {
    const designs = document.getElementById('design-features');
    designs.style.display = 'block';
    gsap.from('#design-features', { opacity: 0, y: 50, duration: 1 });
}
