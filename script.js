function showPage(pageId) {
    // 1. Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Remove 'active' styling from all buttons
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // 3. Show the selected section
    document.getElementById(pageId).classList.add('active');

    // 4. Highlight the clicked button
    document.getElementById('nav-' + pageId).classList.add('active');
    
    // 5. Scroll to top on mobile when changing pages
    window.scrollTo(0, 0);
}

console.log(`
+-------------------------+-----------------+
|                         |                 |
|                         |                 |
|                         |        8        |
|                         |                 |
|            13           +---------+-------+
|                         |         |   3   |
|                         |    5    +---+---+
|                         |         | 2 |1|1|
+-------------------------+---------+---+-+-+

          Thank you for pressing F12.
`);

window.addEventListener('scroll', function() {
    // Select your navbar using the ID or class
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }
});
