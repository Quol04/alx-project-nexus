# Project Nexus Documentation

#  Job Board Frontend

## 🧭 Project Overview
This mobile application is being developed as part of my journey in the **ProDev Frontend Engineering Program**. The project demonstrates the practical application of modern frontend development tools and concepts, with a focus on **building performant, user-friendly, and scalable mobile solutions** using React Native.

---

### 🧠 Project Highlights
- Hands-on learning through real-world projects.  
- Mentorship and peer collaboration on modern frontend tools.  
- Deep dives into mobile ecosystems.  
- Focus on writing clean, maintainable, and scalable code.

---

### 🧩 Key Technologies Covered
- **Mobile Development:** React Native, Expo, Native APIs   
- **Styling & UI Frameworks:** TailwindCSS, Styled Components, React Native Paper  
- **Version Control:** Git & GitHub  
- **TypeScript:** Strong typing and static analysis  
- **GraphQL:** Querying APIs efficiently  
- **API Integration:** RESTful and GraphQL endpoints  
- **System Design & Analysis:** Architecture planning, scalability, component reusability  

---

## 💡 Important Frontend Development Concepts
- **Component-Based Architecture:** Building modular and reusable UI components.  
- **State Management:** Context API, Redux Toolkit, and React Query for efficient data flow.  
- **Responsive Design:** Creating adaptive layouts for multiple screen sizes.  
- **Performance Optimization:** Lazy loading, code splitting, and memoization.  
- **Accessibility:** Ensuring inclusive design for all users.  
- **Testing:** Unit and integration testing for reliable apps.  
- **Deployment:** Using Expo EAS, Vercel, and Netlify for production-ready builds.  

---

## ⚙️ Challenges Faced & Solutions Implemented

| Challenge | Solution |
|------------|-----------|
| Difficulty integrating APIs in React Native | Used **Axios** and **fetch** to handle requests efficiently and cache data. |
| Styling inconsistencies across devices | Implemented **responsive design principles** using Flexbox and `Dimensions` API. |
| Managing complex state across components | Adopted **Redux Toolkit** and Context API for centralized state management. |
| Learning curve with TypeScript | Started with gradual typing and used **type inference** and **interfaces** for clarity. |
| Debugging mobile builds | Leveraged **React Native Debugger**, **Expo CLI logs**, and emulator tools for troubleshooting. |

---

## 🌟 Best Practices & Personal Takeaways

- **Write clean, readable, and reusable code.**  
- **Break UI into small, testable components.**  
- **Use version control (Git) for collaboration and backup.**  
- **Embrace TypeScript for type safety and maintainability.**  
- **Follow consistent naming conventions and project structure.**  
- **Prioritize user experience (UX) and accessibility.**      

---

## 🧭 Next Steps
- Implement authentication and secure API communication.  
- Optimize app performance for low-end devices.  
- Deploy a production-ready build on Google Play Store.  

---

# Job Board Backend

## Stack
Django, Django REST Framework, PostgreSQL, SimpleJWT, drf-spectacular

## Setup (local)
1. Clone
2. Create .env with DATABASE_URL, SECRET_KEY, DEBUG
3. docker-compose up --build
4. docker-compose exec web python manage.py migrate
5. docker-compose exec web python manage.py createsuperuser
6. Open http://localhost:8000/api/docs/

## Running tests
docker-compose exec web pytest

## Producing Swagger docs
Open /api/docs/

## Performance
- Ensure pg_trgm extension enabled: create extension pg_trgm
- Run provided SQL migration to create tsvector and GIN indexes
