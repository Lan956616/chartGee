
<img width="1443" alt="homePageScreenShot" src="https://github.com/Lan956616/chartGee/blob/main/public/readMe/homePageScreenShot.png">

# ChartGee
ChartGee empowers anyone to turn data into beautiful, customizable charts — no design or coding required. Just focus on your data, and we’ll handle the rest.

Website URL: https://chart-gee-4y8.vercel.app/

Test account: Chartgeetest@gmail.com

Test password: testChartGee111

Demo Chart URL: [Bar Chart](https://chart-gee-4y8.vercel.app/share/Bp5Wh4YJUJilnMjV2jQp) / [Pie Chart](https://chart-gee-4y8.vercel.app/share/bxZW8eEAORiNgpUbkgla) / [Line Chart](https://chart-gee-4y8.vercel.app/share/mAAiSb2Bg6OF4SRymO2n)

# Table of Contents
- [Demo](#demo)
- [Main Features](#main-features)
- [Core Tools and Technologies](#core-tools-and-technologies)
  - [Front-End](#front-end)
  - [Third-Party Library](#third-party-library)
  - [Back-End](#back-end)
- [Techniques](#techniques)
  - [React Page Components Design](#react-page-components-design)
  - [Redux - Resume Data Flow](#redux---resume-data-flow)
  - [Redux - User Info Data Flow](#redux---user-info-data-flow)
- [Contact](#contact)

# Demo
[(back to top)](#table-of-contents)

### Easily edit online

![showCaseArea_edit](https://github.com/Lan956616/chartGee/blob/main/public/gif/editonline.gif)

### Custom chart styles

![showCaseArea_styles](https://github.com/Lan956616/chartGee/blob/main/public/gif/customize.gif)

### Export & share anywhere

![showCaseArea_export](https://github.com/Lan956616/chartGee/blob/main/public/gif/shareanddownload.gif)

# Main Features
[(back to top)](#table-of-contents)

- Login with email or Google account supported by Firebase Authentication
- View a dynamic preview of chart while editing to ensure changes look great
- Effortlessly generate bar, pie, and line charts from your input data
- Customize fonts, colors, borders, and more to make your charts stand out
- Automatically save your chart as you edit
- Manage multiple chart projects from your personal dashboard
- Support exporting your charts as PNG files
- Support sharing a URL link to your public chart page ([example](https://chart-gee-4y8.vercel.app/share/Bp5Wh4YJUJilnMjV2jQp))

# Core Tools and Technologies
[(back to top)](#table-of-contents)

### Front-End
- **Framework**: Next.js (App Router), React (Hooks, JSX)
- **Styling**: CSS Modules
- **Routing**: Next.js File-based Routing
- **State Management**: React Context API, Redux Toolkit, React-Redux, Redux-persist
- **Type Checking**: TypeScript
- **Code Formatter**: ESLint (Next Config), Prettier
- **Bundler**: Turbopack (Dev) / Webpack (Prod)


### Third-Party Library
- chart.js
- react-chartjs-2
- chartjs-plugin-datalabels
- fast-deep-equal 
- lodash
- react-toastify

### Back-End
**Firebase (backend-as-a-service)**
- Authentication
- FireStore Database
- Storage
- Hosting


# Techniques
[(back to top)](#table-of-contents)

### Next.js Page Routing Structure
<img width="1200" alt="Page Routing Structure" src="https://github.com/Lan956616/chartGee/blob/main/public/readMe/pageRouting.png">

### ChartData Flow via React Context & Firebase Sync
<img width="1200" alt="ChartData Flow" src="https://github.com/Lan956616/chartGee/blob/main/public/readMe/reduxChartDataFlow.png">

### User Authentication & Redux State Flow
<img width="1200" alt="Authentication & Redux State Flow" src="https://github.com/Lan956616/chartGee/blob/main/public/readMe/authentication.png">

### SharePage Data Flow
<img width="1200" alt="SharePage Data Flow" src="https://github.com/Lan956616/chartGee/blob/main/public/readMe/sharePageDataFlow.png">

# Contact
YUAN SHAO LAN

Email: cd25924218@gmail.com