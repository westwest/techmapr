# TechMapr
The application is intended for creating, managing and rendering technology radars, while showcasing a bit of what I bring to the table. In it I use some of my favourite libraries, do a bit of architectural exploration and, in general challenge myself to write an interesting solution. I aim to demonstrate the way i structure and write code, and curious readers could also check the version history to learn how I like my commits to look like.

This isn't the prettiest app around, and it isn't the main focus. I'm less of a designer than I am an engineer. Sorry.

## The tech stack
On the surface it's a rather standard React app, built using Vite. React router is used for routing. Local state is managed using Jotai, a distributed approach with "atoms" (approchvise similar to the Facebook experiment Recoil). Data fetching and server-state is powered by React Query. Material UI is used as component library, in a standard "on top of Emotion"-configuration.

All above in a list:
- React
- Vite
- React router v6
- Jotai
- React Query
- Material UI, powered by Emotion

As I'm a frontend guy, backend isn't focus. It's powered by firebase, and that's about it.

### Additional note on state management libraries
A bit of history: Facebook originally proposed the Flux architecture for handling state management in React applications, most popularily implemented through Redux (and yes, I've written a lot of Redux). This also cut the problem space in a specific way so that all state management was a single topic, and that topic was separate from how data is retreived, loaded, cached and what not. 

Then someone (Tanner Lindsay to be specific) came about and suggested an entirely new way of dividing the problem-space, and implemented that through React Query. Instead of viewing state and data fetching as two singular and separate problems, he made the case that a lot of data in our web-apps is really just a reflection of what's on a server. So that's one problem: Server state, and that's what React Query does.

That leaves Local state. Usually there's one or two things that the app keeps track of that isn't relevant to or tracked by the server. Local state isn't handled by React Query, so it needs another solution. The Context API included in React is one thinkable option. I've tried it, it works, but is a bit cumbersome. When I came across Jotai it was like finding the missing piece of the puzzle. It works great in the space that React Query leaves open.

## Technical curiosities
Here I'll try to collect some of the ideas I've explored.

### Feature oriented architecture
This is one of my main defining thoughts. If there's a hill I'm willing to die on, it's this one. I'm continously exploring ways to better express my code in terms of features. I'm quite opposed to layered MVC-type architectures. I get that it can make sense in some circumstances, but in most cases I've seen, it ends up with a bunch of closely related files ending up in 3-4 entirely different places, which makes it hard to find and jump between them. At the core, I'm guided by a really simple principle: What change together should live together.

### Feature-module system
It all started with that I was annoyed by the tendency to end up with a large god-like "routes"-file that would contain all the routes in the app. I wanted to create a more distributed way to create routes, that could let features (more or less) own their own routing. So I did that. Then I realized that features may expose functionality through other means than routes, like widgets. So then I just expanded on the modular concept even further.

## Why Javascript?
It's not that I cannot write Typescript. I use Typescript professionally in my day-job, and I do see some relevant points in using it in the context of team collaboration and large, wild codebases. However, I enjoy writing Javascript more, and also I wanted to explore how far I can get without needing types, or getting slowed down by having a lot of issues that typing could save me from.
