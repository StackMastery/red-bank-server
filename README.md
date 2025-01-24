<div align="center">
  <br />
    <a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-StackMastery" target="_blank">
      <img src="https://res.cloudinary.com/dogyg2j0h/image/upload/v1737733933/Group_3_qbhr3d.png" alt="Project Banner">
    </a>
  <br />
<br/>

  <div>
    <img src="https://img.shields.io/badge/-Mongoose-black?style=for-the-badge&logoColor=white&logo=mongoose&color=E50000" alt="Mongoose">
    <img src="https://img.shields.io/badge/-Express-black?style=for-the-badge&logoColor=white&logo=express&color=000000" alt="Express">
    <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=node.js&color=339933" alt="Node.js">
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="MongoDB">
    <img src="https://img.shields.io/badge/-JWT-black?style=for-the-badge&logoColor=white&logo=json-web-tokens&color=FF4F87" alt="JWT">
    <img src="https://img.shields.io/badge/Stripe-6A4C9C?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe">
    <img src="https://img.shields.io/badge/Cookie_Parser-4B4B4B?style=for-the-badge&logo=cookie&logoColor=white" alt="Cookie Parser">
    <img src="https://img.shields.io/badge/.env-FFDD57?style=for-the-badge&logo=dotenv&logoColor=black" alt=".env">
    <img src="https://img.shields.io/badge/CORS-FF5A5F?style=for-the-badge&logo=cors&logoColor=white" alt="CORS">

  </div>

<br />
<br />
<a href="https://redbank.netlify.app" align="start">
    <img width=200 src="https://res.cloudinary.com/dogyg2j0h/image/upload/v1737738092/Group_5_1_bpdezy.svg" alt="Red. Bank">
</a>
    <br />
    <br />
   <div align="center">
</div>
</div>

## 🚨 Introduction

Welcome to the server for the **Red.Bank** project!

**Red.Bank** is a platform designed to facilitate blood donation activities by connecting donors with individuals in need of blood. The goal is to create a seamless, user-friendly experience that promotes efficient blood donation.

The application includes essential features such as:

- **Donor Registration**: Allowing users to register as blood donors.
- **Blood Donation Requests**: Enabling people in need of blood to make requests.
- **Donor Management**: Managing donor information and donation history.
- **Content Management**: Admin tools for managing platform content.
- **Role-based Access Control**: Ensuring security and proper permissions for users and administrators.

Built using the **MERN stack** (MongoDB, Express.js, React, Node.js), **Red.Bank** aims to streamline the blood donation process, making it easier and more accessible for everyone.

You can explore the project here: [Red. Bank](https://redbank.netlify.app/)

## ✨ Features

1. All apis protected
2. Code Readable And Strutered
3. User Verification Using JWT
4. Mongoose Schema Models
5. CRUD Operation
6. Stripe payment
7. Middlewares

## 📦 Main Dependencies

1. cookie-parser (^1.4.7)
2. cors (^2.8.5)
3. dotenv (^16.4.7)
4. express (^4.21.2)
5. jsonwebtoken (^9.0.2)
6. mongoose (^8.9.2)
7. stripe (^17.5.0)

## Project Diagram

```root/
├── controllers/
│   ├── Admin/
│   │   └── Admin.controller.js
│   ├── Auth/
│   │   ├── clearCookie.js
│   │   ├── createAccessToken.js
│   │   ├── createNewUser.js
│   │   └── userCrud.js
│   ├── Blog/
│   │   ├── CreateBlog.js
│   │   ├── DeletePost.js
│   │   ├── GetAllPostPaginated.js
│   │   ├── GetPostDetails.js
│   │   ├── UpdateBlog.js
│   │   └── verifyPermalink.js
│   ├── BloodDonation/
│   │   ├── CreateBloodDonation.js
│   │   └── GetBloodDonations.js
│   ├── frontend/
│   │   ├── AllFunds.js
│   │   ├── AllStatuses.js
│   │   ├── GetAllDonors.js
│   │   └── GetBlogPostFrontend.js
│   └── Payment/
│       └── subscribe.controller.js
│   └── Stripe.js
├── db/
│   └── dbConnect.js
├── middlewares/
│   ├── verifyAdmin.js
│   ├── verifyOrigin.js
│   ├── verifyToken.js
│   └── verifyVolunteer.js
├── models/
│   ├── blog.model.js
│   ├── bloodDonation.model.js
│   ├── fund.model.js
│   ├── subscribe.model.js
│   └── user.model.js
├── node_modules/
├── routes/
│   └── Routes.js
├── .env
├── .env.example
├── .gitignore
├── app.server.js
├── package-lock.json
├── package.json
├── README.md
└── vercel.json
```

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-StackMastery
cd b10a12-server-side-StackMastery
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Configure**

Rename the .env.example file to .env and fill all env

```bash
PORT=YOUR_PORT
MONGO_DB_URI=YOUR_MONGO_DB_URI
JWT_SECRET=YOUR_JWT_SECRET_TOKEN # require('crypto').randomBytes(40).toString('hex')
ORIGIN=ORIGIN_FORNTEND_URL

# Stripe
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:PORT](http://localhost:3000) in your browser to view the project.
