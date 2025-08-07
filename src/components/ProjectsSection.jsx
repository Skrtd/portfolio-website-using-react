import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "Amazon Clone",
        description: "Developed a comprehensive Amazon clone using HTML and CSS to replicate the user interface and design of the original platform. Leveraged modern web development techniques to create a responsive and visually appealing layout that closely resembles the Amazon website.",
        image: "/projects/project1.png",
        tags: ["HTML", "CSS"],
        demoUrl: "https://skrtd.github.io/Amazon.com-Clone-using-HTML-and-CSS/",
        githubUrl: "https://github.com/Skrtd/Amazon.com-Clone-using-HTML-and-CSS",
    },
    {
        id: 2,
        title: "Travel Website",
        description: " Designed and developed the front-end of a travel website using HTML, CSS, and JavaScript. Created a responsive layout to ensure seamless user experience across various devices. Implemented interactive features and custom CSS animations to enhance visual appeal.",
        image: "/projects/project2.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://skrtd.github.io/Travel-Website-Using-HTML-CSS-Javascript/",
        githubUrl: "https://github.com/Skrtd/Travel-Website-Using-HTML-CSS-Javascript",
    },
    {
        id: 3,
        title: "Food Recipe App",
        description: "Built a responsive web application using React.js that allows users to search for food recipes. Fetched data from the MealDB API and displayed recipe details with images. Implemented search functionality and clean UI for a better user experience.",
        image: "/projects/project4.png",
        tags: ["ReactJs", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
    }
]

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> 
            Featured <span className='text-primary'> Projects </span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Here are some of my projects.Each projects was carefully crafted with 
            attention to detail, perfomance and user experience.       
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, key) => (
                <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                    <div className='h-48 overflow-hidden'>
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                    </div>

                    <div className='p-6'>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.tags.map((tag) => (
                                <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foregruond'>{tag}</span>
                            ))}
                        </div>
                    </div>

                    <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                    <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>

                    <div className='flex justify-between items-center'>
                        <div className='flex space-x-3'>
                            <a href={project.demoUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                <ExternalLink size={20} />
                            </a>
                            <a href={project.githubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                </div>
            ))}

        </div>

        <div className='text-center mt-12'>
            <a href="https://github.com/Skrtd" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                Check My Github <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

