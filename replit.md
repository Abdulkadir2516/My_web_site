# Portfolio Website

## Overview

A modern, responsive portfolio website for Abdulkadir Yeşilkaya, a Computer Engineer and Robotics Specialist. The application is built as a full-stack web application featuring a React frontend with a Node.js/Express backend. The site showcases professional experience, skills, and provides a contact form for potential clients or employers.

## Recent Changes
- **August 1, 2024**: Added comprehensive SEO optimization including meta tags, Open Graph tags, Twitter cards, structured data (JSON-LD), robots.txt, and sitemap.xml
- **August 1, 2024**: Enhanced meta descriptions and keywords to include all work areas: robotics, AI, swarm systems, ROS, Python, C++, Arduino, UAVs, UGVs, 3D design
- **August 1, 2024**: Fixed CSS import order issue preventing proper Tailwind compilation

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Component-based architecture using functional components and hooks
- **Vite**: Modern build tool for fast development and optimized production builds
- **shadcn/ui**: Comprehensive UI component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling with custom design system
- **Wouter**: Lightweight client-side routing library
- **TanStack Query**: Data fetching and state management for API interactions

### Backend Architecture
- **Express.js**: RESTful API server with TypeScript support
- **In-Memory Storage**: Simple storage implementation using Maps for development
- **Modular Route System**: Organized API endpoints with proper error handling
- **Middleware Pipeline**: Request logging, JSON parsing, and error handling

### Data Storage
- **Drizzle ORM**: Type-safe database toolkit configured for PostgreSQL
- **Schema Definition**: Centralized database schema in shared directory
- **Database Migration**: Configured migration system with Drizzle Kit
- **Dual Storage Strategy**: In-memory storage for development, PostgreSQL for production

### Design System
- **Dark/Light Theme**: Complete theming system with CSS custom properties
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animation System**: Intersection Observer-based scroll animations
- **Component Variants**: Class Variance Authority for consistent component styling

### Development Architecture
- **Monorepo Structure**: Organized into client, server, and shared directories
- **TypeScript Configuration**: Unified type checking across frontend and backend
- **Path Aliases**: Simplified imports using @ prefixes for better developer experience
- **Hot Reload**: Vite HMR for rapid frontend development

## External Dependencies

### UI and Styling
- **Radix UI**: Headless component primitives for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe component variant management

### Data Management
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Runtime type validation and schema definition
- **Drizzle ORM**: Database ORM with PostgreSQL support

### Development Tools
- **Vite**: Build tool with React plugin and development server
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast bundling for production server builds
- **TSX**: TypeScript execution for development server

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle Kit**: Database migration and introspection tools
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Utilities
- **date-fns**: Date manipulation and formatting library
- **nanoid**: Unique ID generation for entities
- **clsx**: Conditional className utility for dynamic styling