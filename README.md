# :money_with_wings: CodeReviews.MVC.Budget

**Personal Finance & Budgeting Application**  
4th ASP.NET Core MVC project developed as part of the [C# Academy](https://www.thecsharpacademy.com/) curriculum.  
**Goal:** Build a personal budgeting tool to track and evaluate financial transactions.

---

## :clipboard: Requirements

:heavy_check_mark: This application allows users to record personal finance transactions.  
:heavy_check_mark: There should be two linked tables: Transaction and Category.  
:heavy_check_mark: Entity Framework must be used; raw SQL is not allowed.  
:heavy_check_mark: Each transaction MUST have a category, and if a category is deleted, all its transactions should be deleted as well.  
:heavy_check_mark: SQL Server must be used (no SQLite).  
:heavy_check_mark: The application should include a search functionality to find transactions by name.  
:heavy_check_mark: A filter feature should be provided to display transactions by category and date.  
:heavy_check_mark: Modals should be used for inserting, deleting, and updating transactions and categories. These operations should not require navigating to a different page.

---

## :bookmark_tabs: Project Description

This project expands upon the final assignment for the ASP.NET Core MVC module.  
Beyond fulfilling the standard requirements, the application aims to promote **mindful spending** by helping users reflect on their financial habits.

Users evaluate transactions **twice**:
1. When the transaction is first recorded.  
2. Later, during a reevaluation phase — encouraging users to assess how "happy" or "necessary" each purchase really was.

Interactive charts visualize **monthly and yearly statistics**, allowing users to identify trends in their spending behavior.

---

## ⚙️ Technologies & Architecture

- **ASP.NET Core MVC (C#)** for backend logic and views.  
- **Entity Framework Core** for data access.  
- **SQL Server** as the relational database.  
- **Unit of Work pattern** for structured data operations and improved maintainability.  
- **Vanilla JavaScript** for dynamic front-end behavior and modal management.  
- **Bootstrap** for responsive UI layout and styling.

---

## 🚀 Getting Started

### Installation Steps

# Local
1. Restore NuGet packages.  
2. Configure your SQL Server connection string in `appsettings.json`.  
3. No npm installation required — all static resources are bundled.  
4. If `SeedData` and `Auto-Migrate` are set to `true` in `appsettings.json`,  
   the latest migrations will be automatically applied and sample data inserted.

# Docker
1. Download `setup.exe` and `Spendwise.Installer.msi` from the [release page]('https://github.com/K-MYR/CodeReviews.MVC.Budget/releases').
2. Run `setup.exe`.
3. Go to your installation folder, copy `.env.example` and rename it to `.env`.
4. Set your database password in .env
5. Start Docker Desktop
6. Start Spendwise.Launcher or Spendwise.Configuration (Changes to the settings don`t apply at runtime).

---
## 🧩 Usage Guide

The application layout and interactions are designed to be intuitive.  
Below are some key interface elements and workflows.

### 🗂️ Category Action Menu

Click any income or expense category to open a quick-action menu.  
From there, you can:

- Add a new transaction directly.  
- Edit or delete the category.  
- Navigate to detailed category views.

A rotating border visually indicates the selected category.

![Category Action Menu Screenshot](https://github.com/user-attachments/assets/ea3af5f4-5fc0-4e82-ad31-7ddff73f6737)

---

### 💼 General Workflow

1. Create one or more **budget plans** (e.g., "Personal Budget," "Work Expenses").  
2. Add **categories** (e.g., "Groceries," "Rent," "Salary").  
3. Add **transactions** within categories.  
   Each transaction includes:
   - **Sentiment rating:** How happy were you about this expense?  
   - **Necessity rating:** Was this transaction truly necessary?

---

## 🧠 Key Learnings

This project was a major step in building **full-stack MVC applications** with dynamic client-side interactivity.  
It integrates structured backend design patterns with direct JavaScript DOM manipulation to create a smooth user experience.

---

## 🛠️ Planned Features

These are improvements and new features I plan to implement in future iterations of the application:

- **Savings Category Type:** Introduce a dedicated category type for savings to better track financial goals.  
- **Enhanced Responsive Design:** Improve layout and usability for smaller screens and mobile devices.  

## ⚠️ Disclaimer

This project is part of my **learning journey toward mastering C# and ASP.NET Core**.  
It demonstrates foundational full-stack skills including **MVC architecture**, **Entity Framework**, **SQL Server integration**, and **front-end interactivity**.
