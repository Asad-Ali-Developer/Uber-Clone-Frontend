# UBER CLONE FRONTEND

## Project Structure

The project follows the Atomic Design methodology, which consists of organizing components into Atoms, Molecules, and Organisms. Below is the structure of the `src` directory:

## Functionalities

### Atoms

- **Input.tsx**: A reusable input component with support for password visibility toggle.
- **InputForTrip.tsx**: A specialized input component for trip-related forms.
- **LinkButton.tsx**: A button component that acts as a link.
- **InputFieldError.tsx**: A component to display input field errors.

### Molecules

- **BookingModule.tsx**: A module for booking-related functionalities.
- **CaptainDetails.tsx**: Displays details of the captain.
- **CaptainLogout.tsx**: Handles captain logout functionality.
- **CaptainProtectWrapper.tsx**: A wrapper component to protect captain routes.
- **CompleteRideModal.tsx**: A modal to complete a ride.
- **ConfirmRidePopupModal.tsx**: A popup modal to confirm a ride.
- **ModuleWrapper.tsx**: A wrapper for modules.
- **RidePopupModal.tsx**: A popup modal for ride notifications.
- **UserLogout.tsx**: Handles user logout functionality.
- **UserProtectWrapper.tsx**: A wrapper component to protect user routes.

### Organisms

- **AllLocationsModal.tsx**: A modal to display all locations.
- **AllRidesModal.tsx**: A modal to display all rides.
- **ConfirmRideModal.tsx**: A modal to confirm a ride.
- **LocationSearchModal.tsx**: A modal for location search.
- **LookingForDriverModal.tsx**: A modal to indicate looking for a driver.
- **WaitingForDriverModal.tsx**: A modal to indicate waiting for a driver.

### Contexts

- **AuthCaptainContext.tsx**: Context for captain authentication.
- **AuthUserContext.tsx**: Context for user authentication.

### Hooks

- **constant.ts**: Contains constants used across hooks.
- **index.ts**: Exports all hooks.

### Interfaces

- **APICaptainResponse.ts**: Interface for API responses related to captains.
- **index.ts**: Exports all interfaces.

### Pages

- **CaptainHomePage.tsx**: The home page for captains.
- **UserHomePage.tsx**: The home page for users.

### Providers

- **index.ts**: Exports all context providers.

### Routes

- **index.ts**: Exports all routes.
- **routes.ts**: Defines the routes for the application.

### Schemas

- **captainFormDataLogin.ts**: Schema for captain login form data.
- **index.ts**: Exports all schemas.

### Services

- **index.ts**: Exports all services.

### Utils

- **generateRoutes.tsx**: Utility to generate routes.
- **index.ts**: Exports all utilities.

## Getting Started

### Prerequisites

- Node.js
- Yarn or npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/uber-clone-frontend.git
   cd uber-clone-frontend


   yarn install
   # or
   npm install

   