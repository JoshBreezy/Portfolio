export const BLOGS = [
    {
        id: 0,
        title: 'First Blog Post',
        author: 'Jarsh',
        date: '08-21-2022',
        content: `In an attempt to stay active, and continue learing new things in development, I've decided to create a blog section on my portfolio page!
        One thing I've been looking into lately has been server tech, and hosting. After a little experimentation with linux and pihole, I've decided to implement a virtual machine with linux (probably ubuntu server) for hosting.
        There is still alot to learn, and I'm not confident enough yet to take the security risks that I can only imagine come with hosting from your own machine. BUT! I want to blog about the process. So for now, I'll be
        writing blogs as react components that will be pushed to the github that hosts this page. Here's to turning that commit grid green!`
    },
    {
        id: 1,
        title: 'Working on mobile blog cards',
        author: 'Jarsh',
        date: '08-22-2022 4:36pm',
        content: `Alright! I have the blog component working, and the mobile cards looking pretty good. Now I have to work on the z-index of the card element itself. As it stands, the card sits on top of the carousel controls, even when hidden.
        Obviously that won't do. I'm wondering if changing the state controller from adjusting the hidden property to the enabled property will solve the issue. Also, this being the second blog, it'll be cool to see if the carousel works properly now
        that there we're working with multiple blog elements. I've set the overflow of the blog to scroll, which is fine using a mouse wheel, but I'll need to check it out on the phone to make sure it isn't clunky.`
    },
    {
        id: 3,
        title: 'Finished mobile component',
        author: 'Jarsh',
        date: '08-23-2023 6:00am',
        content: `Got the z-index issue worked out, I think it looks pretty good. Today I started working on an ubuntu server to run pihole and openvpn on. Things get a little confusing because I'm on AT&T and their routers / modems are setup the strangest way.
         Yes I'm being polite about it. I'm still not confident about the right way to get it working so for now, I'm still working on blogs this way. 
         Every time I read one of these blogs I notice ten typos :O`
    },
    {
        id: 4,
        title: 'Responsive Layout',
        author: 'Jarsh',
        date: '08-24-2022 2:42pm',
        content: `I've been struggling with this parallax scroll since the beginning. It looks cool, but It just doesn't scale well
        on different devices. Definitely going to switch to a system that uses an observer for lazy loading instead. I think I'll be able
        to achieve a similar effect, plus added stability and performance.`
    },
    {
        id: 5,
        title: 'Refactoring Everything',
        author: 'Jarsh',
        date: '08-25-2022 6:00am',
        content: `As with most serious layout changes, removing the parallax layers has broken everything. Finally figured out the background situation (Hadn't heard of the background attachment prop before). Now it's on to the scrollbars. I setup some 
        custom css rules for the scrollbars and I honestly can't remember exactly how I got it looking good. Now considering a js solution which apparently has better browser support anyway. Definitely glad I thought to create a new git branch for this change. It's nice that I can work on those features and still reliably use
        the blog functionality and continue to post updates.`
    },
    {
        id: 6,
        title: 'Time to move on, and return later',
        author: 'Jarsh',
        date: '08-28-2022 6:02pm',
        content: `Sometimes you gotta move on from something and return to it later. I'm having so much trouble getting the observer to 
        work well. I know that it's because the references are conflicting with each other, and that there is a way to make them work
        without refactoring every component seperately, but for some reason I just can't wrap my brain around it at the moment. So 
        for now, I'm merging the branches and moving on to something else. I did update the projects component for desktop view with a 
        third party library that I like better than the one I wrote myself, and It may be responsive enough to work on both desktop and 
        mobile allowing me to use one component instead of two. Wish me luck moving forward.`
    },
    {
        id: 7,
        title: 'Well Well Well',
        author: 'Jarsh',
        date: '08-30-2022 6:42am',
        content: `Look who has a linux server running openvpn and pihole ;). Next server project will be setting up a network drive to make sharing files across systems easier, but I do think thats a project
        for another day. For now I'm enjoying the ad free network I've setup for myself and brainstorming for a new project to work on. When I update this site to use a database for users and such,
        I'll probably still host it with a third party just for security purposes. Don't need that traffic running through the apartment.`
    },
    {
        id: 8,
        title: 'A lot going on',
        author: 'Jarsh',
        date: '09-09-2022 2:02pm',
        content: `Been working on a lot the last few days. Mostly on the linux server. I named it linuckles btw. Lots of installing and re-installing stuff when it doesn't work. I included a web interface
        called cockpit which helps a lot with viewing logs and such. I have some kind of networking issue with communication between devices on the vpn network. I also spent the majority of a day with a free 
        router that a neightbor was giving away. Flashed some custom firmware on there and attempted to change some settings, but I may have fried the thing lol. Also updated the resume with a cover letter.
        Tried to give it a personal touch that's obviously missing from a simple list of achievements. I think next thing to tackle is .net and C++ or C#. I see lots of dev job listings that are looking for 
        that particular skill, and after learning what it's capable of it sounds like a great idea.`
    },
    {
        id: 9,
        title: 'M.2 and cache',
        author: 'Jarsh',
        date: '09-11-22 2:23pm',
        content: `So. I did a thing and installed a sweet 1tb PCIe-4 drive in my windows 11 laptop. It was aparently not a good choice. I also setup a partition to use as cache for the old spinning disk drive
        that I was using as an external, which all together would have had me around 2.6tb. Plenty of space for all the things. But oh the hell it's putting me through. I'm guessing that there is some 
        sort of hardware signature the bios is recognizing and it insists the spinning disk should be the system disk. I'm leaving for a week starting tomorrow, and I need this thing to work. Will update you 
        with progress.`
    },
    {
        id: 10,
        title: 'Great thing about having 2 drives',
        author: 'Jarsh',
        date: '09-11-22 5:09pm',
        content: `Re-installing windows isn't THAT big of a deal when you keep all your media on a second drive. That being said, it is time consuming and nerve wracking. This time I'll make sure everything is up
        to date, including the bios, before I plug that second drive back in and see what's what.`
    },
    {
        id: 11,
        title: 'So far so good',
        author: 'Jarsh',
        date: '09-12-2022 5:06am',
        content: `Well, I've been using the laptop for a couple hours now without issue, so thats a good sign. Currently at LAX waiting 
        to board for Atlanta. 12 year old me would lose it if he knew what technology would do in twenty years. I've got intel cache
        partition working. Oh looks like we're about to board. I'll check in when we land.`
    },
    {
        id: 12,
        title: 'A big upgrade',
        author: 'Jarsh',
        date: '09-18-2022 8:14pm',
        content: `I've been putting off doing something that needs to be done. I need to setup a server and a database for these blogs. It's a lot and I'm intimidated, but I have done this once before 
        in school, so I have a reference to check when I get lost. First I'll do a little research into which db service would be best for this application though. We used mongo in class 
        but that doesn't mean something else wont work better. So expect updates there. I want to have standard user capabilities with comment and such. Wish me luck!`
    },
    {
        id: 13,
        title: 'Success!',
        author: 'Jarsh',
        date: '09-25-2022 3:05am',
        content: `Alright! the account creation modal works! It even looks like the firebase setup is working as well, so I can now create users. Next step is a login modal for existing users, then on to 
        setting up the database for users, blogs, comments, and so on. I was getting close to the point that I thought firebase was a mistake and I should have just written my own express server, but 
        I do think this will save me a lot of time in the long run.`
    },
    {
        id: 14,
        title: 'More success',
        author: 'Jarsh',
        date: '09-26-2022 03:48am',
        content: `Alright! Got the create account and login components working correctly. Added some logic to disable account creation and login if a current user exists. 
        It may be time to actually start putting together the database for blogs and such. Can't wait!`
    },
    {
        id: 15,
        title: 'Why',
        author: 'Jarsh',
        date: '09-29-2022 4:42am',
        content: `I haven't struggled this much with a concept in a long time. I honestly am at a loss here. I've tried so many ways to get firebase to send a verification email to the current user. Even 
        going as far as making a button that is only responsible for calling that one function. It's been three days :( of watching the console, and the http requests, and reading the docs, and watching 
        tutorials. ugh`
    },
    {
        id: 16,
        title: 'I got it!',
        author: 'Jarsh',
        date: '09-29-2022 9:27pm',
        content: `I did it! that was so frustrating. Essentially, the corrent way to call the function to send the confirmation email was one layer deeper into the auth component than I realized. Could not be 
        happier to be finished with that. I also updated reactstrap to the latest version which fixed the issue I was having with the next/previous animation not working correctly. Next up is a link for 
        forgotten passwords, then it's on to getting that database up and running.`
    },
    {
        id: 17,
        title: 'Merging some branches!',
        author: 'Jarsh',
        date: '10-2-2022 04:13am',
        content: `OK I'm finaly comfortable enough with the auth and DB systems to deploy them officially! So far all you can do is create an account lol, BUT! When you do, the system automaticaly creates 
        a user in auth, and in the DB, then sends you an email with a link to confirm your given email address. Now that I have those setup, I crated a new branch for installing router. Until now I really 
        wanted to keep this a single page app, but I do think it will make more sense to have at least one seperate page for handling user settings. I think this will be more secure as well because I can 
        setup private path's that are only accessible to the current user. As much as I want to start working on the blog element, I should probably get the user settings together first. Wish me luck!`
    },
    {
        id: 18,
        title: 'Functionality is fun',
        author: 'Jarsh',
        date: '10-06-2022 6:40am',
        content: `Well, I've added a user settings page. It's been a little difficult learining the correct way to call the firebase info and write new info without deleting old info, but with a bit 
        of logic and object destructuring, I think I have it working so far. React router is a "breez". I'll continue adding some security into the mix before publishing though.`
    },
    {
        id:19,
        title: 'Users are here!',
        author: 'Jarsh',
        date: '10-07-2022 4:49am',
        content: `Users are here! There is a basic login/logout function, and user settings page with email reset, and username setup. I know I should have the system check for availability when 
        choosing a username before I push this, but I can't wait! Hope there aren't too many bugs lol`
    },
    {
        id:20,
        title: 'Username availability',
        author: 'Jarsh',
        date: '10-18-2022 01:33am',
        content: `Users can now take advantage of the user settings page after creating an account. Options include: UserName, New Email Address, Checking email verification and resending verification 
        email if needed, and one checkbox to submit that the user is over 18 years old. Only thing missing is a little clean up tp remove a UName from the unavailable list after being changed.`
    },
    {
        id: 21,
        title: 'Back to the grind stone',
        author: 'Jarsh',
        date: '11-15-2022 01:00am',
        content: `Well, it's been a while since I've written a blog. I've spent the last couple weeks taking a break from working on the site, and instead I've been setting up a legit linux server.
        So now that I've had such trouble with firebase, it's officially time to write my own data-base. Hopefully I'll have more success.`
    },
    {
        id: 22,
        title: 'Breakthrough',
        author: 'Jarsh',
        date: '11-15-2022 12:13pm',
        content: `You may have noticed a trend here. At least twice I've said I was done with firebase, and followed that up with a post about firebase. Well today is no different lol. I spent 
        the entire night working on firebase db, and I believe it's working the way I intend. It's finally time to design the blog itself.`
    },
    {
        id: 23,
        title: 'Starting to get excited again',
        author: 'Jarsh',
        date: '11-19-2022 7:31am',
        content: `I'm almost finished putting together a layout for the new blogs page. As of now it lists the blogs I've been 
        storing in the blogs.js file and manually pushing with the rest of the repo, but once the layout is finished I'll get 
        it all linked up to the database and write an input component for new blogs and comments.`
    }
]