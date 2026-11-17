# Car Show Registration System

A full-stack web application developed for **AutoVista Events – Car Show 2027**, a three-day car show hosted at Sorsogon City Coliseum.

The system provides a centralized platform for managing participant registrations, car entries, registration fees, payments, and event statistics. It consists of a RESTful Backend API built with C# and .NET 10 and a React-based Frontend Dashboard.

The application aims to replace manual paper forms and spreadsheets with an organized digital registration system that helps event organizers manage participants, monitor payments, and track registration statistics.

---

## Team Members and Responsibilities

| Member | Role |
|---|---|
| **Ronald Estremera** | Backend Developer (Team Leader) |
| **Marco Keon Lee** | Frontend Developer |

## Project Overview

The Car Show Registration System supports three types of participants:

- **Exhibitors** – Participants who display their cars in the exhibition hall.
- **Competitors** – Participants who enter their cars in the judged Show & Shine competition.
- **VIPs** – Participants who receive premium display spots and passes.

Each registration represents one participant entering one car in the event.

## Technology Stack

### Backend

| Technology | Purpose |
|---|---|
| C# | Backend programming language |
| .NET 10 | Backend framework |
| Vertical Slice Architecture | Application architecture |
| CQRS | Separates commands and queries |
| Entity Framework Core | Database ORM |
| SQLite | Database management |
| FluentValidation | Request validation |
| Scalar UI | API documentation and testing |

### Frontend

| Technology | Purpose |
|---|---|
| React JS | Frontend framework |
| Vite | Development server and build tool |
| Tailwind CSS / Bootstrap | User interface styling |

## Main Features

### Registration Management
- Register new car show participants.
- Generate unique registration numbers automatically.
- Store participant and vehicle information.
- Prevent duplicate vehicle plate numbers.
- Support Exhibitor, Competitor, and VIP registration types.

### Payment Management
- Automatically calculate registration fees based on participant type.
- Track the amount paid by each participant.
- Automatically determine payment status:
  - Unpaid
  - Partial
  - Paid
- Prevent payments from exceeding the registration fee.

### Registration Tracking
- Track registration statuses:
  - Pending
  - Confirmed
  - CheckedIn
  - Cancelled
- Search registrations by participant name.
- Filter registrations by type and status.
- Support pagination for registration records.

### Dashboard and Statistics
- Display total registrations.
- Show confirmed, checked-in, pending, and cancelled registrations.
- Display total registration fees.
- Track total payments collected.
- Calculate uncollected payments.

## Registration Fees

Registration fees are determined by the backend according to the selected registration type.

| Registration Type | Registration Fee |
|---|---:|
| Exhibitor | ₱1,500 |
| Competitor | ₱2,500 |
| VIP | ₱5,000 |

**Note:** Registration fees, registration numbers, registration dates, and initial registration statuses are controlled by the backend to maintain data consistency and prevent unauthorized changes.

## Project Structure

The project follows the required shared repository structure:

```text
car-show-registration/
│
├── backend/
│   ├── Api/
│   ├── Application/
│   ├── Domain/
│   ├── Infrastructure/
│   └── [Solution Files]
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── [Other React Files]
│
├── docs/
│   └── screenshots/
│
├── .gitignore
└── README.md
```

### Folder Responsibilities

- **backend/** – Contains the C# solution, REST API, application logic, domain entities, and database configuration.
- **frontend/** – Contains the React application, dashboard, components, and user interface.
- **docs/screenshots/** – Stores screenshots documenting API testing and application functionality.
- **README.md** – Provides project information, team responsibilities, technologies, and setup instructions.
- **.gitignore** – Excludes unnecessary build files, dependencies, and temporary files from Git.

## Backend API Endpoints

The backend provides the following REST API endpoints:

| HTTP Method | Endpoint | Description |
|---|---|---|
| POST | `/api/registrations` | Create a new registration |
| GET | `/api/registrations` | Retrieve all registrations with pagination |
| GET | `/api/registrations/{id}` | Retrieve a registration by ID |
| GET | `/api/registrations?type=VIP` | Filter registrations by type |
| GET | `/api/registrations?status=Confirmed` | Filter registrations by status |
| GET | `/api/registrations?participantName=juan` | Search registrations by participant name |
| GET | `/api/registrations/summary` | Retrieve dashboard KPI statistics |

### API Response and Error Handling

The API uses appropriate HTTP status codes:

| Status Code | Description |
|---|---|
| 200 OK | Request completed successfully |
| 201 Created | Registration successfully created |
| 400 Bad Request | Invalid request or validation errors |
| 404 Not Found | Requested registration does not exist |
| 409 Conflict | Duplicate vehicle plate number |

API documentation and endpoint testing are available through Scalar UI.

## Getting Started

Follow these instructions to run the entire project locally.

### Prerequisites

Install the following tools before running the application:

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

### 1. Clone the Repository

Open your terminal and execute:

```bash
git clone <your-github-repository-url>
```

Navigate into the project directory:

```bash
cd car-show-registration
```

### 2. Run the Backend

Open a terminal in the project root directory.

Navigate to the backend folder:

```bash
cd backend
```

Restore the required NuGet packages:

```bash
dotnet restore
```

Run the backend API:

```bash
dotnet run --project Api
```

The API will start on the configured local development URL.

**Scalar API Documentation:**

```text
http://localhost:5205/scalar/v1
```

### 3. Run the Frontend

Open another terminal in the project root directory.

Navigate to the frontend folder:

```bash
cd frontend
```

Install the required dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the frontend dashboard.

**Default Vite Development URL:**

```text
http://localhost:5173
```

### 4. Database

The backend uses SQLite with Entity Framework Core to store registration records.

The database provides persistent storage so that registration data remains available even after the application is stopped and restarted.

Database migrations are used to create and update the database schema.

## Architecture

The backend follows **Vertical Slice Architecture**, organizing application code based on individual features rather than separating everything by technical layer.

The required application features are:

| Feature | Type | Purpose |
|---|---|---|
| CreateRegistration | Command | Register a new participant |
| GetRegistrations | Query | Retrieve, filter, and paginate registrations |
| GetRegistrationById | Query | Find a specific registration |
| GetRegistrationSummary | Query | Retrieve dashboard statistics |

The frontend communicates with the backend through HTTP requests to retrieve and manage registration data.

## Development and Collaboration

The project is developed collaboratively using Git and GitHub.

- Ronald Estremera is responsible for backend API development, database integration, business logic, and API testing.
- Marco Keon Lee is responsible for frontend development, React components, and dashboard implementation.
- Both developers coordinate to maintain a consistent API contract between the frontend and backend.
- Git is used to track changes and maintain the project's development history.

## Documentation and Screenshots

Project documentation and screenshots are stored in:

```text
docs/screenshots/
```

These screenshots document the backend API endpoints, database, test scenarios, GitHub commit history, and the running full application.

## Project Information

| Information | Details |
|---|---|
| Project Name | Car Show Registration System |
| Event | AutoVista Events – Car Show 2027 |
| Course | Integrative Programming 2 |
| Institution | Computer Communication Development Institute (CCDI), Sorsogon Campus |
| Backend Framework | C# / .NET 10 |
| Frontend Framework | React JS (Vite) |
| Database | SQLite |
| Architecture | Vertical Slice Architecture |
| Repository | GitHub |

---

**Car Show Registration System – Car Show 2027**

Developed as a team project for Integrative Programming 2.
