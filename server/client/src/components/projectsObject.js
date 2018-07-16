let projectsObject = {
  projects: [
    {
      key: 'digicaching',
      title: 'Digicaching React/Node App',
      order: 1,
      tech: ['react', 'node', 'html', 'js'],
      description: `<p>This was a project that I and three other developers did over the course of two weeks. We used ReactJS with Redux for the frontend and NodeJS with PostgreSQL on the backend.</p>
		<p>Here’s the <a href="https://github.com/BGamber/digicaching/" target="_blank" rel="noopener">github repo</a>.<br>
		And here’s the current version of <a href="https://digicaching.herokuapp.com/" target="_blank" rel="noopener">the live app</a>. (We plan on continuing to improve it.)</p>
		<p>We built this app mostly to practice and improve our full-stack developing skills.</p>`
    },
    {
      key: 'dark-horse-woodworks',
      title: 'Dark Horse Woodworks, Inc.',
      tech: ['wp', 'php', 'html'],
      order: 2,
      description: `<p>I designed and built this award-winning luxury&nbsp;cabinetry company’s <a href="http://darkhorsewoodworks.com/" target="_blank">website</a>.</p>`
    },
    {
      key: 'theatre-in-the-square',
      title: 'Theatre in the Square',
      tech: ['wp', 'php', 'html'],
      order: 3,
      description: `Marietta’s New Theatre in the Square had just been rescued from near abandonment by an enthusiastic new group of people who were struggling to bring life back to the venue. While the company put together its first new shows, they also needed to get the word out so that audience seats would be filled. They needed a website that would be professional, yet fun, invoking stability as well as change. It also needed to have a backend that would be simple enough for volunteer interns to update easily.

      I designed and built this site for them using highly customized WordPress theme, into which I integrated theatre-specific data input fields and displays, such as showtimes, dates, prices, postcard images, etc.
      
      This is what the site looked like when I turned it over to them.`
    },
    {
      key: 'the-naked-crepe',
      title: 'The Naked Crepe',
      tech: ['wp', 'php', 'html'],
      order: 4,
      description: `This small upstart catering business needed a website that was clean and elegant, while still being personal and inviting.

      I designed and built this website for them.`
    },
    {
      key: 'whitman-publishing',
      title: 'Whitman Publishing map/timeline app',
      tech: ['js', 'html'],
      order: 5,
      description: `<p>Worked with a small team of designers and coders on a complete redesign of whitman.com. Specifically, I worked on the UX and front-end coding of the overall site.</p>
  <p>One unique area of the site is an interactive map and timeline displaying US National Park quarters. The app allows users to scroll a timeline to see which quarters were released in which year. Users can also click any state on a map and see the quarters that represent that particular state.</p>
  <p>Take a look at the <a class="project-image" href="https://www.whitman.com/store/Inventory/Browse/National-Park-Quarters-Products" target="_blank">site</a>.</p>`
    },
    {
      key: 'wheeldesks',
      title: 'Wheeldesks',
      tech: ['wp', 'php', 'html'],
      order: 6,
      description: ``
    },
    {
      key: 'headlight-logic',
      title: 'Headlight Logic',
      tech: ['wp', 'php', 'html'],
      order: 7,
      description: `<p>Headlight Logic needed a place where customers could learn about and directly order their services online.</p>
      <p>I designed and built <a href="http://headlightlogic.com">this website/web app</a> for them.</p>`
    },
    {
      key: 'dimensionworks',
      title: 'DimensionWorks',
      tech: ['wp', 'php', 'html'],
      order: 8,
      description: `<p>Designed and built this concept-to-completion construction company’s <a href="http://www.dimensionworks.com/dw/" target="_blank">website</a>.</p>`
    }
  ],
  get: function(id) {
    return this.projects.find( p => p.key === id);
  }
};

export default projectsObject;