export const BLOGS = [
    {
        id: 0,
        title: 'First Blog Post',
        date: '08-21-2022',
        content: `In an attempt to stay active, and continue learing new things in development, I've decided to create a blog section on my portfolio page!
        One thing I've been looking into lately has been server tech, and hosting. After a little experimentation with linux and pihole, I've decided to implement a virtual machine with linux (probably ubuntu server) for hosting.
        There is still alot to learn, and I'm not confident enough yet to take the security risks that I can only imagine come with hosting from your own machine. BUT! I want to blog about the process. So for now, I'll be
        writing blogs as react components that will be pushed to the github that hosts this page. Here's to turning that commit grid green!`
    },
    {
        id: 1,
        title: 'Working on mobile blog cards',
        date: '08-22-2022 4:36pm',
        content: `Alright! I have the blog component working, and the mobile cards looking pretty good. Now I have to work on the z-index of the card element itself. As it stands, the card sits on top of the carousel controls, even when hidden.
        Obviously that won't do. I'm wondering if changing the state controller from adjusting the hidden property to the enabled property will solve the issue. Also, this being the second blog, it'll be cool to see if the carousel works properly now
        that there we're working with multiple blog elements. I've set the overflow of the blog to scroll, which is fine using a mouse wheel, but I'll need to check it out on the phone to make sure it isn't clunky.`
    },
    {
        id: 3,
        title: 'Finished mobile component',
        date: '08-23-2023 6:00am',
        content: `Got the z-index issue worked out, I think it looks pretty good. Today I started working on an ubuntu server to run pihole and openvpn on. Things get a little confusing because I'm on AT&T and their routers / modems are setup the strangest way.
         Yes I'm being polite about it. I'm still not confident about the right way to get it working so for now, I'm still working on blogs this way. 
         Every time I read one of these blogs I notice ten typos :O`
    },
    {
        id: 4,
        title: 'Responsive Layout',
        date: '08-24-2022 2:42pm',
        content: `I've been struggling with this parallax scroll since the beginning. It looks cool, but It just doesn't scale well
        on different devices. Definitely going to switch to a system that uses an observer for lazy loading instead. I think I'll be able
        to achieve a similar effect, plus added stability and performance.`
    },
    {
        id: 5,
        title: 'Refactoring Everything',
        date: '08-25-2022 6:00am',
        content: `As with most serious layout changes, removing the parallax layers has broken everything. Finally figured out the background situation (Hadn't heard of the background attachment prop before). Now it's on to the scrollbars. I setup some 
        custom css rules for the scrollbars and I honestly can't remember exactly how I got it looking good. Now considering a js solution which apparently has better browser support anyway. Definitely glad I thought to create a new git branch for this change. It's nice that I can work on those features and still reliably use
        the blog functionality and continue to post updates.`
    }
]