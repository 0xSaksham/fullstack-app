import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programmer's Job",
      content: "Why did the programmer quit his job? He didn't get arrays.",
    },
    {
      id: 2,
      title: "Favorite Place",
      content: "What's a programmer's favorite place? The Foo Bar.",
    },
    {
      id: 3,
      title: "Dark Mode",
      content:
        "Why do JavaScript developers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 4,
      title: "Comforting Bugs",
      content: "How do you comfort a JavaScript bug? You console it.",
    },
    {
      id: 5,
      title: "Going Broke",
      content:
        "Why did the developer go broke? Because he used up all his cache!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}/`);
});
