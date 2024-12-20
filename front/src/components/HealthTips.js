import React, { useEffect, useState } from "react";

const healthTips = [
  {
    id: 1,
    tip: "🍎 Did you know? An apple a day keeps the doctor away! Apples are rich in antioxidants and dietary fiber.",
    image: "https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F98a21442-383a-469b-afb1-3ccaece7bcf5.jpg&w=3840&q=75",
  },
  {
    id: 2,
    tip: "🥦 Broccoli is a superfood! It’s packed with vitamins K and C, and it boosts your immune system.",
    image: "https://c.ndtvimg.com/2022-03/97v0misg_broccoli_625x300_30_March_22.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384",
  },
  {
    id: 3,
    tip: "🥑 Avocados are rich in healthy fats and can help lower bad cholesterol levels.",
    image: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/08/Stocksy_txpa387b205vt9300_Medium_3358820_header-1024x575.jpg?w=1155&h=1528",
  },
  {
    id: 4,
    tip: "🥕 Carrots are a great source of beta-carotene, which helps improve vision and skin health.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_0Jttd1wIHDkMpthLrTCnJYgVq-3M-il3A&s",
  },
  {
    id: 5,
    tip: "🍋 Lemons are high in vitamin C and can help with digestion and hydration.",
    image: "https://kdahweb-static.kokilabenhospital.com/kdah-2019/tips/59968721d7e3314815647_l.jpg",
  }
];

const HealthTips = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % healthTips.length);
    }, 4000); // Changes tips every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>🍎 Health & Nutrition Tips</h3>
      <div style={styles.card}>
        <img
          src={healthTips[currentTipIndex].image}
          alt="Health Tip"
          style={styles.image}
        />
        <p style={styles.text}>{healthTips[currentTipIndex].tip}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "500px",
    margin: "20px auto",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  },
  image: {
    width: "200px",
    height: "200px",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default HealthTips;
