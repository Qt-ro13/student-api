const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Student API</title>
        <style>
            body{
                margin:0;
                font-family:Arial, sans-serif;
                background:#f4f6f9;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
            }

            .card{
                background:white;
                width:500px;
                padding:40px;
                border-radius:12px;
                box-shadow:0 8px 20px rgba(0,0,0,0.15);
                text-align:center;
            }

            h1{
                color:#2c3e50;
            }

            p{
                color:#555;
                font-size:18px;
            }

            .status{
                margin-top:20px;
                display:inline-block;
                background:#28a745;
                color:white;
                padding:10px 20px;
                border-radius:20px;
                font-weight:bold;
            }

            footer{
                margin-top:30px;
                color:gray;
                font-size:14px;
            }
        </style>
    </head>

    <body>

        <div class="card">

            <h1>🎓 Student API</h1>

            <p>Welcome to the Student API Application</p>

            <div class="status">
                ✅ Application Running Successfully
            </div>

            <footer>
                DevOps Demo | Node.js • Express • GitHub Actions • Render
            </footer>

        </div>

    </body>
    </html>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});