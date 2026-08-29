# Day 01: Introduction to CSS & Selectors

## 🎯 Learning Objectives
- Understand what CSS is and how it enhances HTML
- Learn the three ways to add CSS (inline, internal, external)
- Master basic CSS selectors (element, class, ID)
- Apply CSS properties to HTML elements
- Understand the cascade and specificity basics

## 📊 Difficulty Level
**Beginner** — Requires HTML foundation

## ⏱️ Estimated Duration
**2 hours** (1.5 hours training + 0.5 hours practical exercises)

## 📋 Prerequisites
- Completion of HTML curriculum (Days 01–10)
- Understanding of HTML tags, classes, and IDs

## 🔑 Core Topics
1. What is CSS and the separation of concerns
2. The three methods of adding CSS: inline, internal, external (with pros/cons)
3. CSS rule syntax: selector, property, value
4. Element selectors (targeting all `<p>` tags, etc.)
5. Class selectors (targeting `.classname`)
6. ID selectors (targeting `#idname`)
7. The cascade: how styles override each other
8. Specificity: why ID selectors "beat" classes
9. Basic CSS properties: color, font-size, background-color

## 📝 Files You Will Create
- `style.css` — External stylesheet for your first page
- `article.html` — HTML file linked to CSS
- Starter files demonstrate external CSS best practices

## 🎓 Suggested Lesson Sequence
1. **Why CSS?** (10 min): Show HTML-only vs. styled versions of a website
2. **Three Methods** (15 min): Explain inline (discouraged), internal, and external (best)
3. **Selectors** (20 min): Demonstrate element, class, and ID selectors
4. **Live Demo** (20 min): Modify `training/demo/index.html`; change colors and sizes
5. **Concept Study** (25 min): Follow `training/concepts.md`
6. **Practical Lab** (40 min): Complete `practical/assignment.md`
7. **Review** (10 min): Show solutions and common mistakes

## ✅ Practical Assignment Summary
- **Assignment 1**: Link CSS to HTML; style all paragraphs with an element selector
- **Assignment 2**: Use a class selector to style a specific paragraph
- **Assignment 3**: Create a styled article page with ID and class selectors

## 🎓 Expected Learning Outcome
By the end of this day, you will:
- Understand the purpose and power of CSS
- Know when and how to use each selector type
- Be able to link external stylesheets to HTML
- Understand why external CSS is the professional standard
- Know the basics of CSS specificity

## 📚 Quick Revision Checklist
- [ ] CSS = Cascading Style Sheets (adds styling to HTML)
- [ ] Element Selector: `p { ... }` targets all `<p>` tags
- [ ] Class Selector: `.highlight { ... }` targets elements with `class="highlight"`
- [ ] ID Selector: `#main-title { ... }` targets the element with `id="main-title"`
- [ ] **Always use a dot (.) before class names**: `.classname` not `classname`
- [ ] **Always use a hash (#) before ID names**: `#idname` not `idname`
- [ ] External CSS is linked in the `<head>`: `<link rel="stylesheet" href="style.css">`
- [ ] Every CSS rule ends with a semicolon (;)
- [ ] IDs are unique; each should appear only once per page
- [ ] Classes can be reused on multiple elements
- [ ] The cascade means later rules override earlier ones (same specificity)

## 🔗 Navigation
- **← Previous**: [HTML Curriculum Complete](../../html/day-10/README.md)
- **Next →**: [Day 02: Colors, Backgrounds & Borders](../day-02/README.md)
