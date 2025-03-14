import { Avatar, Box, List, ListItem, ListItemAvatar, styled, Typography } from '@mui/material';
import * as React from 'react';

// Sample certificate data (replace with actual images if available)
const certificates = [
  {
    id: 1,
    title: "Google Data Analytics Professional Certificate",
    description: "Offered by Google, this course teaches the foundations of data analytics, including data cleaning, analysis, visualization, and the use of spreadsheets, SQL, R programming, and Tableau.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 2,
    title: "CS50: Introduction to Computer Science",
    description: "Provided by Harvard University through Coursera, this entry-level course covers fundamental concepts of computer science and programming using languages like C, Python, SQL, and more.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 3,
    title: "AI For Everyone",
    description: "Offered by Coursera, this course provides a non-technical introduction to artificial intelligence, exploring its applications, implications, and how to navigate AI in the business world.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 4,
    title: "The Complete Digital Marketing Course",
    description: "Available on Udemy, this comprehensive course covers SEO, social media marketing, content marketing, email marketing, and more, aiming to equip learners with practical digital marketing skills.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 5,
    title: "Project Management Principles and Practices",
    description: "Offered by the University of California, Irvine through Coursera, this specialization introduces project management fundamentals, including planning, scheduling, and managing projects effectively.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 6,
    title: "Google IT Support Professional Certificate",
    description: "Offered by Google through Coursera, this program provides the skills needed for an entry-level IT support role, covering topics like troubleshooting, networking, operating systems, system administration, and security.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 7,
    title: "IBM Data Science Professional Certificate",
    description: "This course teaches the foundations of data analytics, including data cleaning, analysis, visualization, and the use of spreadsheets, SQL, R programming, and Tableau.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 8,
    title: "Microsoft Python Development Professional Certificate",
    description: "Offered by Microsoft on Coursera, this program teaches Python programming fundamentals, data structures, and algorithms, preparing learners for entry-level Python developer roles.",
    image: "https://via.placeholder.com/60"
  }
];

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#3f6fbf',
    color: 'white',
    '& *': { color: 'white' },
  },
  '&:nth-of-type(odd)': {
    backgroundColor: 'white',
    '& *': { color: '#000000' }
  },
}));

const avatarStyle = (index) => {
  const c1 = '#ffffff'
  const c2 = '#0a4eb2'
  return index % 2 === 0 ? `radial-gradient(circle,${c1} 0%, ${c2} 100%)` : `radial-gradient(circle, ${c2} 0%, ${c1} 100%)`
}

export default function Certificates() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', py: 0, pb: 0 }}>
      {certificates.map((cert, index) => (
        <StyledListItem
          key={cert.id}
          sx={{
            mb: 1,
            px: 2,
            m: 0,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box flex={1}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {cert.id}. {cert.title}
            </Typography>
            <Typography variant="body2">
              {cert.description}
            </Typography>
          </Box>

          {/* Right: Certificate Image */}
          <ListItemAvatar>
            <Avatar
              src={cert.image}
              sx={{
                width: 60,
                height: 60,
                background: avatarStyle(index),
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                // border: '2px solid white'
              }}
            />
          </ListItemAvatar>
        </StyledListItem>
      ))}
    </List>
  );
}