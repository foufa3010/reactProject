import React, { useState, useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Box, Typography, Button} from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const AdminProfile = () => {
  const [users, setUsers] = useState([]);

  const url = "http://localhost:3010/api/users";
  const url2="http://localhost:3010/api/feedbacks"
  const url3 = 'http://localhost:3010/users/:email'; 

  const [feedbacks, setFeedbacks] = useState([]);
  
  const [data, setData] = useState({
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Daily Activity',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      let newData = data.datasets[0].data.map(() => Math.floor(Math.random() * 100));
      setData({
        ...data,
        datasets: [{ ...data.datasets[0], data: newData }],
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setUsers(result.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(url2);
        const result = await response.json();
        setFeedbacks(result.data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  const deleteUser = async (email) => {
    try {
        console.log(`Attempting to delete user with email: ${email}`);
        
        const response = await fetch(`http://localhost:3010/api/users/${email}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));  // Filter by email
           alert(`User with email ${email} deleted successfully.`);
        } else {
            console.error('Failed to delete user:', await response.text());
        }
    } catch (error) {
        console.error("Error deleting user:", error);
    }
};



  return (
    <>
      <Box sx={styles.container}>
        <Typography variant="h4" sx={styles.title}>Admin Profile</Typography>

        <Box sx={styles.boxContainer}>

          <Box sx={styles.box}>
            <Typography variant="h6" sx={styles.boxTitle}>User List</Typography>
            <Box sx={styles.userBox}>
              <ul style={styles.list}>

                {users.map((user) => (
                  <li key={user._id} style={styles.listItem}>
                    <span style={styles.userName}>{user.name}</span>
                    <span style={styles.userEmail}>{user.email}</span>
                    
                    <Button onClick={() => deleteUser(user.email)} style={{ marginLeft: '10px', color: 'red' }}>
                    Delete
            </Button>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>


          <Box sx={styles.box}>
            <Typography variant="h6" sx={styles.boxTitle}>User Feedbacks</Typography>
            <Box sx={styles.userBox}>
              <ul style={styles.list}>
                {feedbacks.length === 0 ? (
                  <Typography variant="body2" sx={styles.noFeedback}>No feedbacks available.</Typography>
                ) : (
                  feedbacks.map((feedback, index) => (
                    <li key={index} style={styles.listItem}>
                      <Typography variant="body1" sx={styles.userName}>{feedback.name}</Typography>
                      <Typography variant="body2" sx={styles.userEmail}>{feedback.email || 'No email provided'}</Typography>
                      <Typography variant="body2" sx={styles.feedbackMessage}>{feedback.message}</Typography>
                      <Typography variant="caption" sx={styles.timestamp}>
                        {new Date(feedback.timestamp).toLocaleString()}
                      </Typography>
                    </li>
                  ))
                )}
              </ul>
            </Box>
          </Box>
        </Box>

        <Box sx={styles.chartWrapper}>
          <Typography variant="h5" sx={styles.chartTitle} style={{fontSize:'40px', color:"#820000"}}>Charts</Typography>
          <Box sx={styles.chartContainer}>

            <Box sx={styles.chartItem}>
              <Bar data={data} options={{ responsive: true }} />
            </Box>

            <Box sx={styles.chartItem}>
              <Doughnut
                data={{
                  labels: ['Chicken Couscous', 'Burek', 'Kafteji', 'Chick-Fil-A Sandwich'],
                  datasets: [{
                    label: 'Most Searched Recipes',
                    data: [30, 20, 40, 10],
                    backgroundColor: ['#F09319', '#597445', '#7C96AB', '#973131'],
                  }],
                }}
                options={{ responsive: true }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const styles = {
  container: {
    padding: '50px',
    fontFamily: "'Itim', serif",
    maxWidth: '900px',
    width: '80%',
    margin: '0 auto',
  },
  
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
    marginBottom: '40px',
  },
  box: {
    backgroundColor: '#FBF6F0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '48%',
  },
  boxTitle: {
    fontSize: '1.5rem',
    color: '#435334',
    marginBottom: '15px',
    textAlign: 'center',
  },
  userBox: {
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    width: '90%',
    margin: '0 auto',
  },
  
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '1.2rem',
    marginBottom: '12px',
    lineHeight: '1.6',
  },
  userName: {
    fontWeight: 'bold',
    color: '#4C4B16',
  },
  userEmail: {
    marginLeft: '10px',
    color: '#666',
  },
  chartWrapper: {
    marginTop: '40px',
    textAlign: 'center',
  },
  chartTitle: {
    marginBottom: '30px',
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '50px',
    marginLeft: '50px', 
  },
  chartItem: {
    width: '48%',
    marginBottom: '20px',
  },
};


export default AdminProfile;
