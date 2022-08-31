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
    },
    {
        id: 6,
        title: 'Time to move on, and return later',
        date: '08-28-2022 6:02pm',
        content: `Sometimes you gotta move on from something and return to it later. I'm having so much ttrouble getting the observer to 
        work well. I know that it's because the references are conflicting with each other, and that there is a way to make them work
        without refactoring every component seperately, but for some reason I just can't wrap my brain around it at the moment. So 
        for now, I'm merging the branches and moving on to something else. I did update the projects component for desktop view with a 
        third party library that I like better than the one I wrote myself, and It may be responsive enough to work on both desktop and 
        mobile allowing me to use one component instead of two. Wish me luck moving forward.`
    },
    {
        id: 7,
        title: 'Well Well Well',
        date: '08-30-2022 6:42am',
        content: `Look who has a linux server running openvpn and pihole ;). Next servver project will be setting up a network drive to make sharing files across systems easier, but I do think thats a project
        for another day. For now I'm enjoying the ad free network I've setup for myself and brainstorming for a new project to work on. When I update this site to use a databse for users and such,
        I'll probably still host it with a third party just for security purposes. Don't need that traffic running through thee apartment.`
    }
]