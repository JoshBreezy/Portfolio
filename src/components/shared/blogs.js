export const BLOGS = [
    {
        id: '0',
        title: 'First Blog Post',
        date: '08-21-2022',
        content: `In an attempt to stay active, and continue learing new things in development, I've decided to create a blog section on my portfolio page!
        One thing I've been looking into lately has been server tech, and hosting. After a little experimentation with linux and pihole, I've decided to implement a virtual machine with linux (probably ubuntu server) for hosting.
        There is still alot to learn, and I'm not confident enough yet to take the security risks that I can only imagine come with hosting from your own machine. BUT! I want to blog about the process. So for now, I'll be
        writing blogs as react components that will be pushed to the github that hosts this page. Here's to turning that commit grid green!`
    },
    {
        id: '1',
        title: 'Working on mobile blog cards',
        date: '08-22-2022 4:36pm',
        content: `Alright! I have the blog component working, and the mobile cards looking pretty good. Now I have to work on the z-index of the card element itself. As it stands, the card sits on top of the carousel controls, even when hidden.
        Obviously that won't do. I'm wondering if changing the state controller from adjusting the hidden property to the enabled property will solve the issue. Also, this being the second blog, it'll be cool to see if the carousel works properly now
        that there we're working with multiple blog elements. I've set the overflow of the blog to scroll, which is fine using a mouse wheel, but I'll need to check it out on the phone to make sure it isn't clunky.`
    }
]