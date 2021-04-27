# Rapptr Labs Web Test

### Created by Michael Sollazzo

### Total Hours spent: 18 - 24 hours

Over the span of 6 days I spent roughly 2 - 4 hours a day.

(rough estimate below)

- Building forms - 5 hours
- Building common generic components - 4 hours
- styling - 2 hours
- validation - 2 hours
- todo list - 3 hours
- refactoring - 1 hour
- debugging - 3 hours

## How I spent my time

### What libraries to choose:

- I decided not to use any style or state management libaries for the sake of keeping things simple and focusing more on writing quality css and react. I did however use a handful of third party libraries such as 'joi-browser' which helped greatly with validation.

### Planning:

- Small amount of planning, kind of just jumped right into it. I thought out what generic react components I needed and started working on those first, for example: ListItem.js

### Problems Faced:

- Trying to abstract one general form component, so I didnt have to re-write handle functions for forms. Was not able to do this so each form ended up having their own handleSubmit and handleChange functions.
- Logging in. I kept getting an CORS error upon hitting the endpoint provided. I believe this is an issue that needs to be handled on the backend. I spent a lot of time trying to figure out how to get a response back.
- Editing a todo. I spent too much time trying to populate an update form for each listitem, but ended up getting it to work!

### Typescript
 - Recently I learned the basics of typescript and I implemented it into a couple components to try it out. I added it to Input.js and Button.js


 I added some screenshots of the app in the public folder. 