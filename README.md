# Contact Management App

![Contact Management App Screenshot](https://res.cloudinary.com/aman10110/image/upload/v1694354876/Screenshot_1009_ec9f5e.png)

This is a contact management app built with ReactJS, TypeScript, TailwindCSS, React Router v6, React Query, and Redux. It also includes a dashboard with charts and maps to display COVID-19 data.

## How to Run

To run this app on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/aman12207/Contact-Manager.git
   cd contact-management-app
   npm install 
   npm start
   ```
## API Endpoints

This app uses the following APIs to fetch data:

- **Worldwide Data of Cases**: [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
- **Country-Specific Data of Cases**: [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
- **Graph Data for Cases with Date**: [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)

# App Features

## Contact Management:

- Add new contacts.
- View a list of all added contacts.
- View contact details.
- Edit existing contacts.
- Delete contacts.

## Charts and Maps Dashboard:

- A line graph showing COVID-19 cases fluctuations.
- A map displaying country-specific COVID-19 data with markers that indicate the country name, total number of active, recovered cases, and deaths as a popup.

