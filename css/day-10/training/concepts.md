# Complete Responsive Website Project

## 1. Concept Explanation
Today is about bringing everything together. You will build a landing page for a fictional tech company. It must utilize everything: the Universal Reset, Google Fonts, specific color variables, Flexbox for the header/footer, Grid for the features section, and Media Queries for responsiveness.

## 2. Project Requirements
You are going to build a **Business Landing Page**.

It must contain:
1. **Global Styles**: 
   - A clean Google Font (like 'Inter' or 'Roboto').
   - CSS variables (`:root`) for primary colors (e.g., brand blue, dark gray, light gray).
2. **Navigation Bar (Header)**:
   - Fixed to the top (`position: sticky`).
   - Flexbox layout (Logo left, Links right).
   - Hover transitions on the links.
3. **Hero Section**:
   - A large, centered headline and a Call-to-Action (CTA) button.
   - The CTA button must grow slightly on hover (`transform: scale`).
4. **Features Section**:
   - A 3-column layout using CSS Grid.
   - On mobile, it must be 1 column. On tablet, 2 columns. On desktop, 3 columns.
   - Each feature "card" should have a light border and a subtle shadow on hover.
5. **Footer**:
   - Dark background, white text, centered using Flexbox.

## 3. Common Mistakes to Avoid
- **Forgetting `box-sizing: border-box;`**: This will ruin your grid layouts.
- **Not testing on mobile**: Shrink your browser window continuously while building. Fix things *before* they get too complicated.

## 4. Best Practices
- Define your colors at the top of the file in the `:root` pseudo-class. 
  ```css
  :root {
      --primary: #2563eb;
      --text-dark: #1f2937;
  }
  ```
  Then use them like this: `color: var(--primary);`

## 5. Trainer Notes
- Emphasize to students that this is what they will actually do at a job. They will receive a design and have to piece together Flexbox, Grid, and Media Queries to make it work on all screens. 

## 6. Quick Revision
- Check your syntax, remember your media queries, and have fun!
