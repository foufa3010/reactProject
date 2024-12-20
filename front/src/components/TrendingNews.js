import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function TrendingNews() {
  const news = [
    {
      title: "New Superfood Trends for 2024",
      description:
        "Discover the top trending superfoods that are taking the food world by storm this year.",
      url: "https://www.cosmopolitan.com/lifestyle/g46584075/superfoods-list-2024/",
    },
    {
      title: "How Plant-Based Diets Are Changing the Food Industry",
      description:
        "Explore how plant-based diets are becoming more popular and reshaping menus worldwide.",
      url: "https://www.sciencedirect.com/science/article/pii/S0002916523048992",
    },
    {
      title: "Food Waste Reduction: Innovative Solutions in 2024",
      description:
        "Learn about the latest technologies and strategies in reducing food waste around the globe.",
      url: "https://ewwr.eu/thematic_focus/2024-food-waste/",
    },
    {
      title: "How Artificial Intelligence Is Shaping the Future of Food",
      description:
        "AI is making waves in the food industry, from smart kitchens to personalized nutrition plans.",
      url: "https://www.foodunfolded.com/article/how-will-ai-shape-our-food-systems-of-the-future",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {news.map((article, index) => (
        <Card
          key={index}
          style={{
            width: "300px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#F5F7F8", 

          }}
        >
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title
              style={{
                fontWeight: "bold",
                fontFamily: "ui-monospace",
                fontStyle: "italic",
                fontSize: "24px",
                color: "#c46f00",
                marginBottom: "15px",
              }}
            >
              {article.title}
            </Card.Title>
            <Card.Text
              style={{
                fontSize: " 18px",
                color: "#322c2b",
                fontFamily:"serif",
                marginBottom: "20px",
              }}
            >
              {article.description}
            </Card.Text>
          </Card.Body>
          <Button
            href={article.url}
            target="_blank"
            style={{
              backgroundColor: "#B2B377",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              textDecoration: "none",
              alignSelf: "center",
            }}
          >
            Read More
          </Button>
        </Card>
      ))}
    </div>
  );
}

export default TrendingNews;

