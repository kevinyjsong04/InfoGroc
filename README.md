# InfoGroc
Hacklytics 2023 Finance track project

Created by: Kevin Song, Ben Dai, Phillip Zhang, Ashley Mendez

How to Setup Testing Environment:

1. Install most recent version of Node.js
2. Install Expo Go on phone (can also use web alternative: https://snack.expo.dev/)
3. Open terminal and cd to desired location
4. Run 'npm install -g expo-cli'
5. Run 'npx create-expo-app YourProjectName'
6. Clone this git repo into your project and cd into it
7. Run 'npx expo start --tunnel' while phone is connected to same wifi
8. Scan QR code on terminal from phone

For a video demo or to see pictures of the working app, go to https://devpost.com/software/infogroc.

# Inspiration
Being college students,, we're often not aware of how much we are spending every time we visit the grocery store. It's especially difficult to compare your spending to others' spending, and even more so when you want to know the breakdown by categories. Additionally, its difficult for those less well off financially to know whether or not they're spending in the right categories in comparison to those in a similar financial situation. Thus, we came up with an app that would be able to track a user's spending on groceries broken down by category and compare it to data so the user can evaluate where they might focus their spending on.

# What it does
The user logs in and enters in how much they spent in their last grocery trip broken down by category. The user's data is compared against consumer spending data that we collected and cleaned, and the percentile of where the user falls into within each category is displayed for the user. Additionally, their income and total spending are compared to averages in the collected data.

# How we built it
We used Python as a back end to process, filter, and sort data. These data were cleaned using pandas to remove unnecessary columns and rows with blank values. We then performed operations on the values to get averages over a number of trips for each data point, and then we compiled these data into lists, which where then subsequently put into a dictionary, which finally were written into a JSON file. We read from the JSON file using a React Native JavaScript front-end, creating a cross-platform mobile app to allow users to log-in and see their statistics in relation to the sorted JSON dataset.

# Challenges we ran into
We were unable to connect a database to the app.js. Tried to use Firebase but the import was not allowing the app to work, therefore, we created a simple array to collect the users information. Unfortunately this does not store the users information. We also had a lot of trouble with getting valid data in the Python filter, as many of the values returned an inf or nan, which would have not have been able to be processed as valid data points, in part due to the divisor being 0 in some average calculations. We fixed this by checking each data point before they were averaged and removed problematic data. Another big problem was converting the data from pandas to a JSON file which would be easily readable by React Native. We settled on converting each column to a one dimensional array representing each category of spending, then compiling each array into a dictionary, then writing into a JSON, which would allow the React Native client to read the JSON data by using the contents as multiple arrays.

# Accomplishments that we're proud of
We are proud of creating a display that shows the percentiles of the users spending. We are proud of the apps sleekness/visual appeal as well as its usefulness to users who may have trouble accessing such relevant data. We are also proud of how seamless the application of such a large dataset was to the user.

# What we learned
Database connection is a bit tricky to connect to the app. A JSON file can keep your keys and values and is easy to access, but the data needs to be in the right format for the contents to be able to be manipulated by several parties, especially if they are using different programs, as we did in this project.

# What's next for InfoGroc
We hope to connect a database such as firebase to the app so that users can store their spending and view their reports over time. Additionally, we plan on adding features to make it more appealing and visuals so that users can understand the report.
