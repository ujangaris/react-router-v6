# React Router V6

# Page Components

    todo:
    1.  pages/HomePage.jsx
    2.  pages/AboutPage.jsx
    3.  pages/ContactPage.jsx
    4.  pengujian pada browser:
        - http://localhost:3000/HomePage
        - http://localhost:3000/AboutPage
        - http://localhost:3000/ContactPage

# Mengunakan Link Components untuk berpindah page

    todo:
    1.  pages/HomePage.jsx
    2.  pages/AboutPage.jsx
    3.  pages/ContactPage.jsx
    4.  pengujian pada browser:
        - http://localhost:3000/HomePage
        - http://localhost:3000/AboutPage
        - http://localhost:3000/ContactPage

# NavLink component untuk berpindah page

    todo:
    1.  pages/HomePage.jsx
    2.  pages/AboutPage.jsx
    3.  pages/ContactPage.jsx
    4.  conmponents/NavComponents.jsx
        - buat functional components NavComponents
        - buat halaman path yang dituju
    5.  App.jsx
        - Import dan pasang NavComponents di atas Routes
    6.  index.css
        - Styling css
    7.  App.css
        - hapus css
    8.  pengujian pada browser:
        - klik navbar Home => http://localhost:3000/HomePage
        - klik navbar About => http://localhost:3000/AboutPage
        - klik navbar Contact => http://localhost:3000/ContactPage

# Navbar akan kembali ke atas ketika di klik

    todo:
    1.  pages/HomePage.jsx
    2.  pages/AboutPage.jsx
    3.  pages/ContactPage.jsx
    4.  conmponents/ScrollTop.jsx
        - buka browser ketikan pada search :back to top react router
            - link https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

    5.  main.jsx
        - Import dan pasang ScrollTop di atas App
    6.  pengujian pada browser: scrol dulu kebawah/ tengah dari tinggi halaman kemudian,
        - klik navbar Home => http://localhost:3000/HomePage
            -akan ke halaman Home dengan menampilkan navbar back to top
        - klik navbar About => http://localhost:3000/AboutPage
            - akan ke halaman About dengan menampilkan navbar back to top
        - klik navbar Contact => http://localhost:3000/ContactPage
            - akan ke halaman Contact dengan menampilkan navbar back to top
