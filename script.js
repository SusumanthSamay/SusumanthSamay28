:root {
    --bg-color: #ECEFCA;
    --text-color: #213448;
    --primary-color: #547792;
    --accent-color: #94B4C1;
  }
  
  [data-theme="dark"] {
    --bg-color: #213448;
    --text-color: #ECEFCA;
    --primary-color: #94B4C1;
    --accent-color: #547792;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
  
  header {
    background: var(--primary-color);
    padding: 10px 20px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
  }
  
  .theme-toggle {
    cursor: pointer;
  }
  
  section {
    padding: 40px 20px;
  }
  
  #home {
    text-align: center;
  }
  
  #home img {
    width: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
  #skills i, .project i {
    font-size: 30px;
    margin: 10px;
    color: var(--accent-color);
  }
  
  .project {
    background: white;
    padding: 15px;
    margin: 10px 0;
    border-left: 4px solid var(--primary-color);
    color: var(--text-color);
  }
  
  footer {
    text-align: center;
    padding: 15px;
    background: var(--primary-color);
    color: white;
  }
  
  @media (max-width: 768px) {
    nav ul {
      flex-direction: column;
      gap: 10px;
    }
  }
  