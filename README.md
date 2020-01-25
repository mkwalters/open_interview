# open

The most enjoyable part of building this app was familiarizing myself with Vue.js. I had never built a Vue.js application but was pleased with how lightweight it was while still offering modern tools such as reactive state management, routing and component registration. 

There are currently two main problems with the application that I would address given more time. The first issue is that there are no users, so someone could press the reserve button until there were no more spots available. The second issue is that the mongo collections do not lock when they are accessed so it is possible that a session could be overbooked if multiple clients try to make reservations at precisely the same time. 